import fs from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: path.resolve(process.cwd(), '.env.local') });

const CATALOG_PATH = path.resolve(process.cwd(), 'data/minikubota-products.json');
const BUCKET_NAME = 'product-images';
const FEATURED_LIMIT = 18;
const UPLOAD_CONCURRENCY = 4;

interface CatalogProduct {
  slug: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  local_images: string[];
  condition: string;
  category: string;
  brand: string;
  currency: string;
  rating: number;
  review_count: number;
  reviews: unknown[];
  in_stock: boolean;
  collections: string[];
  meta: Record<string, unknown> & {
    source?: string;
    compareAtPrice?: number;
  };
}

interface CatalogFile {
  products: CatalogProduct[];
}

function contentTypeFor(filePath: string): string {
  const types: Record<string, string> = {
    '.gif': 'image/gif',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  };
  return types[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream';
}

function getAdminEmail(): string {
  const configured = process.env.ADMIN_EMAILS?.split(',')
    .map((email) => email.trim())
    .find(Boolean);
  return configured ?? 'contact@weteextees.com';
}

function getStoreBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_BASE_URL
    || process.env.APP_BASE_URL
    || 'https://weteextees.com'
  ).replace(/\/$/, '');
}

function storagePathFor(slug: string, localPath: string): string {
  return `minikubota/${slug}/${path.basename(localPath)}`;
}

async function mapWithConcurrency<T, R>(
  values: T[],
  concurrency: number,
  worker: (value: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(values.length);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(values[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, values.length) }, () => runWorker()),
  );
  return results;
}

async function main() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase URL or service-role key in .env.local');
  }

  const catalog = JSON.parse(await fs.readFile(CATALOG_PATH, 'utf8')) as CatalogFile;
  if (!Array.isArray(catalog.products) || catalog.products.length === 0) {
    throw new Error('The scraped product catalog is empty');
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: bucket, error: bucketError } = await supabase.storage.getBucket(BUCKET_NAME);
  if (bucketError || !bucket) {
    throw new Error(`Storage bucket ${BUCKET_NAME} is unavailable: ${bucketError?.message ?? 'not found'}`);
  }
  if (!bucket.public) {
    throw new Error(`Storage bucket ${BUCKET_NAME} must be public before catalog upload`);
  }

  const adminEmail = getAdminEmail();
  const storeBaseUrl = getStoreBaseUrl();
  let uploadedImages = 0;
  let reusedImages = 0;
  const failures: Array<{ slug: string; error: string }> = [];

  console.log(`Uploading ${catalog.products.length} products to ${new URL(supabaseUrl).hostname}.`);
  console.log(`Storage bucket: ${BUCKET_NAME}; image concurrency: ${UPLOAD_CONCURRENCY}.`);

  for (let productIndex = 0; productIndex < catalog.products.length; productIndex += 1) {
    const product = catalog.products[productIndex];
    process.stdout.write(
      `[${productIndex + 1}/${catalog.products.length}] ${product.slug} (${product.local_images.length} images) ... `,
    );

    try {
      if (!product.slug || !product.title || !Number.isFinite(product.price)) {
        throw new Error('Missing required product fields');
      }
      if (!Array.isArray(product.local_images) || product.local_images.length === 0) {
        throw new Error('No downloaded images were recorded');
      }

      const { data: existingObjects, error: listError } = await supabase.storage
        .from(BUCKET_NAME)
        .list(`minikubota/${product.slug}`, { limit: 100 });
      if (listError) throw new Error(`Could not inspect storage: ${listError.message}`);
      const existingNames = new Set((existingObjects ?? []).map((object) => object.name));

      const imageUrls = await mapWithConcurrency(
        product.local_images,
        UPLOAD_CONCURRENCY,
        async (relativePath) => {
          const localPath = path.resolve(process.cwd(), relativePath);
          const relativeToWorkspace = path.relative(process.cwd(), localPath);
          if (relativeToWorkspace.startsWith('..') || path.isAbsolute(relativeToWorkspace)) {
            throw new Error(`Image path escapes the workspace: ${relativePath}`);
          }

          const storagePath = storagePathFor(product.slug, localPath);
          const fileName = path.basename(storagePath);
          if (!existingNames.has(fileName)) {
            const fileBytes = await fs.readFile(localPath);
            const { error: uploadError } = await supabase.storage
              .from(BUCKET_NAME)
              .upload(storagePath, fileBytes, {
                cacheControl: '31536000',
                contentType: contentTypeFor(localPath),
                upsert: true,
              });
            if (uploadError) {
              throw new Error(`Image upload failed for ${fileName}: ${uploadError.message}`);
            }
            uploadedImages += 1;
          } else {
            reusedImages += 1;
          }

          return supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath).data.publicUrl;
        },
      );

      const sourceUrl = typeof product.meta?.source === 'string' ? product.meta.source : undefined;
      const compareAtPrice = Number(product.meta?.compareAtPrice);
      const collections = product.category.toLowerCase().includes('attachment')
        ? ['attachments']
        : ['excavators'];
      const checkoutLink = `${storeBaseUrl}/checkout?product=${encodeURIComponent(product.slug)}`;
      const payload = {
        id: product.slug,
        slug: product.slug,
        title: product.title,
        description: product.description,
        price: product.price,
        original_price: Number.isFinite(compareAtPrice) && compareAtPrice > product.price
          ? compareAtPrice
          : null,
        images: imageUrls,
        condition: product.condition || 'New',
        category: product.category || 'Mini Excavators',
        brand: product.brand || 'Unbranded',
        payee_email: adminEmail,
        checkout_link: checkoutLink,
        checkout_flow: 'stripe',
        currency: product.currency || 'USD',
        rating: product.rating || 0,
        review_count: product.review_count || 0,
        reviews: Array.isArray(product.reviews) ? product.reviews : [],
        meta: {
          ...product.meta,
          source: sourceUrl,
          sourceImages: product.images,
          published: true,
        },
        in_stock: product.in_stock !== false,
        is_featured: productIndex < FEATURED_LIMIT,
        published: true,
        listed_by: 'Weteextees',
        collections,
      };

      const { error: upsertError } = await supabase
        .from('products')
        .upsert(payload, { onConflict: 'slug' });
      if (upsertError) throw new Error(`Database upsert failed: ${upsertError.message}`);

      console.log('ok');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ slug: product.slug, error: message });
      console.log(`failed: ${message}`);
    }
  }

  console.log(`Products uploaded: ${catalog.products.length - failures.length}`);
  console.log(`Images uploaded: ${uploadedImages}; existing images reused: ${reusedImages}.`);

  if (failures.length > 0) {
    console.error(`Failures: ${JSON.stringify(failures, null, 2)}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
