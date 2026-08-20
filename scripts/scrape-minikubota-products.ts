import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_BASE_URL = 'https://www.minikubota.com';
const DEFAULT_OUTPUT = 'data/minikubota-products.json';
const DEFAULT_IMAGES_DIR = 'data/minikubota-images';
const DEFAULT_DELAY_MS = 1000;
const USER_AGENT = 'WeteexCatalogResearch/1.0 (+https://weteextees.com)';

interface CliOptions {
  baseUrl: string;
  output: string;
  imagesDir: string;
  delayMs: number;
  limit?: number;
  skipImages: boolean;
}

interface SitemapProduct {
  url: string;
  lastModified?: string;
}

interface ScrapedProduct {
  slug: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  local_images: string[];
  condition: string;
  category: string;
  brand: string;
  checkout_link: string;
  currency: string;
  rating: number;
  review_count: number;
  reviews: unknown[];
  in_stock: boolean;
  collections: string[];
  meta: {
    source: string;
    sourceProductId?: string;
    sourceLastModified?: string;
    compareAtPrice?: number;
    scrapedAt: string;
  };
}

function readOptions(argv: string[]): CliOptions {
  const options: CliOptions = {
    baseUrl: DEFAULT_BASE_URL,
    output: DEFAULT_OUTPUT,
    imagesDir: DEFAULT_IMAGES_DIR,
    delayMs: DEFAULT_DELAY_MS,
    skipImages: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    const value = argv[index + 1];

    if (argument === '--base-url' && value) {
      options.baseUrl = value.replace(/\/$/, '');
      index += 1;
    } else if (argument === '--output' && value) {
      options.output = value;
      index += 1;
    } else if (argument === '--images-dir' && value) {
      options.imagesDir = value;
      index += 1;
    } else if (argument === '--delay-ms' && value) {
      options.delayMs = Number.parseInt(value, 10);
      index += 1;
    } else if (argument === '--limit' && value) {
      options.limit = Number.parseInt(value, 10);
      index += 1;
    } else if (argument === '--skip-images') {
      options.skipImages = true;
    } else if (argument === '--help') {
      console.log(`Usage: npm run scrape:minikubota -- [options]

Options:
  --output <path>       JSON output path (default: ${DEFAULT_OUTPUT})
  --images-dir <path>   Downloaded image directory (default: ${DEFAULT_IMAGES_DIR})
  --delay-ms <number>   Delay between product requests (default: ${DEFAULT_DELAY_MS})
  --limit <number>      Scrape only the first N products for testing
  --skip-images         Keep remote image URLs without downloading files
  --base-url <url>      Override the source site (default: ${DEFAULT_BASE_URL})
  --help                Show this message`);
      process.exit(0);
    } else {
      throw new Error(`Unknown or incomplete argument: ${argument}`);
    }
  }

  if (!Number.isFinite(options.delayMs) || options.delayMs < 250) {
    throw new Error('--delay-ms must be at least 250');
  }

  if (options.limit !== undefined && (!Number.isFinite(options.limit) || options.limit < 1)) {
    throw new Error('--limit must be a positive integer');
  }

  return options;
}

function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchText(url: string, attempts = 3): Promise<string> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'user-agent': USER_AGENT,
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(30_000),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await sleep(attempt * 1500);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(`Failed to fetch ${url}`);
}

async function fetchBinary(url: string, attempts = 3): Promise<{ bytes: Uint8Array; contentType: string }> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif,*/*;q=0.8',
          'user-agent': USER_AGENT,
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(60_000),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.toLowerCase().startsWith('image/')) {
        throw new Error(`Expected an image but received ${contentType || 'an unknown content type'}`);
      }

      return {
        bytes: new Uint8Array(await response.arrayBuffer()),
        contentType,
      };
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await sleep(attempt * 1500);
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error(`Failed to download ${url}`);
}

function decodeHtml(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function cleanText(value: string): string {
  return decodeHtml(value)
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function htmlToText(html: string): string {
  return cleanText(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
      .replace(/<br\s*\/?>|<\/(?:p|div|li|h[1-6]|section)>/gi, '\n')
      .replace(/<[^>]+>/g, ' '),
  );
}

function readAttributes(tag: string): Record<string, string> {
  const attributes: Record<string, string> = {};
  const pattern = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(tag)) !== null) {
    attributes[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? '');
  }

  return attributes;
}

function getMeta(html: string, key: string): string | undefined {
  const normalizedKey = key.toLowerCase();
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];

  for (const tag of tags) {
    const attributes = readAttributes(tag);
    const name = (attributes.name ?? attributes.property ?? '').toLowerCase();
    if (name === normalizedKey && attributes.content) {
      return cleanText(attributes.content);
    }
  }

  return undefined;
}

function getProductJsonLd(html: string): Record<string, unknown> | undefined {
  const scripts = html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );

  for (const match of scripts) {
    try {
      const data = JSON.parse(match[1].trim());
      const candidates = Array.isArray(data) ? data : [data];
      const product = candidates.find((item) => item?.['@type'] === 'Product');
      if (product) return product;
    } catch {
      // Ignore invalid structured-data blocks and continue with visible HTML.
    }
  }

  return undefined;
}

function extractProductDescription(visibleText: string, fallback = ''): string {
  const heading = /\bProduct Description\b/i.exec(visibleText);

  if (heading) {
    const remainder = visibleText.slice(heading.index + heading[0].length);
    const end = /\n(?:reviews|Our Customers Reviews|FREE SHIPPING|faq|Your Questions)\b/i.exec(remainder);
    const description = cleanText(end ? remainder.slice(0, end.index) : remainder);
    if (description.length >= 40) return description;
  }

  const buyNow = /\bBuy now\b/i.exec(visibleText);
  if (buyNow) {
    const remainder = visibleText.slice(buyNow.index + buyNow[0].length);
    const end = /\n(?:30 Day Guarantee|Shipping|Return Policy|High Quality)\b/i.exec(remainder);
    const description = cleanText(end ? remainder.slice(0, end.index) : remainder);
    if (description.length >= 40) return description;
  }

  return cleanText(fallback);
}

function parseMoney(value: string): number {
  return Number.parseFloat(value.replace(/,/g, ''));
}

function extractPrices(visibleText: string, title: string): number[] {
  const titleIndex = visibleText.toLowerCase().indexOf(title.toLowerCase());
  const start = titleIndex >= 0 ? titleIndex + title.length : 0;
  const afterTitle = visibleText.slice(start, start + 1500);
  const endMatch = /\b(?:Limited offer|Quantity|Add To Cart|Buy now)\b/i.exec(afterTitle);
  const priceArea = endMatch ? afterTitle.slice(0, endMatch.index) : afterTitle;
  const values = [...priceArea.matchAll(/\$\s*([0-9][0-9,]*(?:\.\d{1,2})?)/g)]
    .map((match) => parseMoney(match[1]))
    .filter(Number.isFinite);

  return [...new Set(values)];
}

function normalizeAssetUrl(candidate: string): string {
  let value = decodeHtml(candidate).replace(/\\u0026/gi, '&');
  const nestedAsset = value.lastIndexOf('https://assets.lightfunnels.com/account-');
  if (nestedAsset > 0) value = value.slice(nestedAsset);
  return value.replace(/[\\"')>,]+$/, '');
}

function extractImages(html: string, structuredImage: unknown): string[] {
  const structuredImages = Array.isArray(structuredImage)
    ? structuredImage.filter((value): value is string => typeof value === 'string')
    : typeof structuredImage === 'string'
      ? [structuredImage]
      : [];
  const source = [html, ...structuredImages].join('\n');
  const candidates = [
    ...source.matchAll(/https:\/\/assets\.lightfunnels\.com\/[^\s"')<>\\]+/gi),
  ].map((match) => normalizeAssetUrl(match[0]));

  const primary = structuredImages[0] ? normalizeAssetUrl(structuredImages[0]) : candidates[0];
  const accountMatch = primary?.match(/\/account-[^/]+\/images_library\//i);
  const accountPath = accountMatch?.[0].toLowerCase();

  return [...new Set(candidates)].filter((url) => {
    const lower = url.toLowerCase();
    return (!accountPath || lower.includes(accountPath)) && /\.(?:avif|gif|jpe?g|png|webp)(?:[?#]|$)/i.test(url);
  });
}

function inferBrand(title: string): string {
  const brands = ['AGT', 'Kubota', 'Rippa', 'RATO', 'Yanmar', 'Huayee', 'CFG'];
  return brands.find((brand) => new RegExp(`\\b${brand}\\b`, 'i').test(title)) ?? 'Unbranded';
}

function inferCategory(title: string): string {
  return /attachment|bucket|grapple|rake|auger|thumb|tool|kit|breaker|hammer/i.test(title)
    ? 'Attachments'
    : 'Mini Excavators';
}

function extractSourceProductId(html: string): string | undefined {
  return /"product"\s*:\s*\{\s*"id"\s*:\s*"([^"]+)"/i.exec(html)?.[1];
}

function imageExtension(url: string, contentType?: string): string {
  const pathnameExtension = path.extname(new URL(url).pathname).toLowerCase();
  if (/^\.(?:avif|gif|jpe?g|png|webp)$/.test(pathnameExtension)) return pathnameExtension;

  const type = contentType?.split(';', 1)[0].trim().toLowerCase();
  const extensions: Record<string, string> = {
    'image/avif': '.avif',
    'image/gif': '.gif',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
  };
  return extensions[type ?? ''] ?? '.jpg';
}

async function hasNonEmptyFile(filePath: string): Promise<boolean> {
  try {
    return (await fs.stat(filePath)).size > 0;
  } catch {
    return false;
  }
}

async function downloadProductImages(
  product: ScrapedProduct,
  imagesRoot: string,
  requestDelayMs: number,
): Promise<string[]> {
  const safeSlug = product.slug.replace(/[^a-z0-9_-]+/gi, '-');
  const productDirectory = path.join(imagesRoot, safeSlug);
  const localImages: string[] = [];
  await fs.mkdir(productDirectory, { recursive: true });

  for (let index = 0; index < product.images.length; index += 1) {
    const remoteUrl = product.images[index];
    const provisionalExtension = imageExtension(remoteUrl);
    const provisionalPath = path.join(
      productDirectory,
      `${String(index + 1).padStart(2, '0')}${provisionalExtension}`,
    );

    if (await hasNonEmptyFile(provisionalPath)) {
      localImages.push(path.relative(process.cwd(), provisionalPath).replace(/\\/g, '/'));
      continue;
    }

    const { bytes, contentType } = await fetchBinary(remoteUrl);
    const extension = imageExtension(remoteUrl, contentType);
    const finalPath = path.join(productDirectory, `${String(index + 1).padStart(2, '0')}${extension}`);
    const temporaryPath = `${finalPath}.tmp`;
    await fs.writeFile(temporaryPath, bytes);
    await fs.rename(temporaryPath, finalPath);
    localImages.push(path.relative(process.cwd(), finalPath).replace(/\\/g, '/'));

    if (index < product.images.length - 1) {
      await sleep(Math.min(requestDelayMs, 500));
    }
  }

  return localImages;
}

function extractSitemapEntries(xml: string): SitemapProduct[] {
  const entries: SitemapProduct[] = [];

  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)) {
    const loc = /<loc>([\s\S]*?)<\/loc>/i.exec(match[1])?.[1];
    const lastModified = /<lastmod>([\s\S]*?)<\/lastmod>/i.exec(match[1])?.[1];
    if (loc) entries.push({ url: decodeHtml(loc.trim()), lastModified: lastModified?.trim() });
  }

  return entries;
}

async function discoverProducts(baseUrl: string): Promise<SitemapProduct[]> {
  const rootSitemap = await fetchText(`${baseUrl}/sitemap.xml`);
  const childSitemaps = [...rootSitemap.matchAll(/<loc>([^<]+\.xml)<\/loc>/gi)].map((match) =>
    decodeHtml(match[1].trim()),
  );
  const sitemapDocuments = childSitemaps.length > 0
    ? await Promise.all(childSitemaps.map((url) => fetchText(url)))
    : [rootSitemap];
  const origin = new URL(baseUrl).origin;
  const entries = sitemapDocuments.flatMap(extractSitemapEntries);

  return [...new Map(
    entries
      .filter((entry) => {
        const url = new URL(entry.url);
        return url.origin === origin && url.pathname.startsWith('/products/');
      })
      .map((entry) => [entry.url, entry]),
  ).values()];
}

async function scrapeProduct(entry: SitemapProduct): Promise<ScrapedProduct> {
  const html = await fetchText(entry.url);
  const structured = getProductJsonLd(html);
  const visibleText = htmlToText(html);
  const title = cleanText(
    (typeof structured?.name === 'string' ? structured.name : undefined)
      ?? getMeta(html, 'og:title')
      ?? /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1]
      ?? '',
  );

  if (!title) throw new Error('Product title was not found');

  const prices = extractPrices(visibleText, title);
  if (prices.length === 0) throw new Error('Product price was not found');

  const sortedPrices = [...prices].sort((a, b) => a - b);
  const price = sortedPrices[0];
  const compareAtPrice = sortedPrices.length > 1 ? sortedPrices.at(-1) : undefined;
  const structuredDescription = typeof structured?.description === 'string' ? structured.description : '';
  const description = extractProductDescription(
    visibleText,
    structuredDescription || getMeta(html, 'description') || '',
  );
  const images = extractImages(html, structured?.image);
  const category = inferCategory(title);
  const url = new URL(entry.url);

  return {
    slug: url.pathname.split('/').filter(Boolean).at(-1) ?? '',
    title,
    description,
    price,
    images,
    local_images: [],
    condition: 'New',
    category,
    brand: inferBrand(title),
    checkout_link: entry.url,
    currency: 'USD',
    rating: 0,
    review_count: 0,
    reviews: [],
    in_stock: /\b(?:Add To Cart|Buy now)\b/i.test(visibleText),
    collections: [category],
    meta: {
      source: entry.url,
      sourceProductId: extractSourceProductId(html),
      sourceLastModified: entry.lastModified,
      compareAtPrice,
      scrapedAt: new Date().toISOString(),
    },
  };
}

async function main() {
  const options = readOptions(process.argv.slice(2));
  const discovered = await discoverProducts(options.baseUrl);
  const entries = options.limit ? discovered.slice(0, options.limit) : discovered;
  const products: ScrapedProduct[] = [];
  const failures: Array<{ url: string; error: string }> = [];

  console.log(`Discovered ${discovered.length} product URLs in the public sitemap.`);
  console.log(`Scraping ${entries.length} product pages sequentially with a ${options.delayMs}ms delay.`);
  if (!options.skipImages) {
    console.log(`Images will be downloaded to ${path.resolve(process.cwd(), options.imagesDir)}.`);
  }

  for (let index = 0; index < entries.length; index += 1) {
    const entry = entries[index];
    process.stdout.write(`[${index + 1}/${entries.length}] ${entry.url} ... `);

    try {
      const product = await scrapeProduct(entry);
      if (!options.skipImages) {
        product.local_images = await downloadProductImages(
          product,
          path.resolve(process.cwd(), options.imagesDir),
          options.delayMs,
        );
      }
      products.push(product);
      console.log(
        `ok (${product.images.length} remote images, ${product.local_images.length} downloaded)`,
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ url: entry.url, error: message });
      console.log(`failed: ${message}`);
    }

    if (index < entries.length - 1) await sleep(options.delayMs);
  }

  const outputPath = path.resolve(process.cwd(), options.output);
  const temporaryPath = `${outputPath}.tmp`;
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(
    temporaryPath,
    `${JSON.stringify({
      source: options.baseUrl,
      generatedAt: new Date().toISOString(),
      discovered: discovered.length,
      scraped: products.length,
      failed: failures.length,
      products,
      failures,
    }, null, 2)}\n`,
    'utf8',
  );
  await fs.rename(temporaryPath, outputPath);

  console.log(`Saved ${products.length} products to ${outputPath}`);
  if (failures.length > 0) {
    console.warn(`${failures.length} product(s) failed; details are included in the output file.`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
