import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STORAGE_BUCKET = 'product-images';

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing Supabase environment variables in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const BRANDS = [
  'Troy-Bilt', 'Ariens', 'Bad Boy', 'Bosch', 'Craftsman', 'Cub Cadet', 'DeWalt', 'DEWALT',
  'DongFang', 'DR Power', 'Drift Hero', 'Echo', 'EGO Power+', 'EGO', 'ePropulsion', 'Esco',
  'Festool', 'FLEX', 'Greenworks', 'Halo Lifts', 'Handy Home', 'Hein-Werner', 'Honda',
  'Humminbird', 'Husqvarna', 'Hyundai', 'iDEAL', 'Interceptor', 'John Deere', 'Jura',
  'Katool', 'KATOOL', 'Keter', 'La Marzocco', 'Lelit', 'Lifetime', 'Little Cottage Co',
  'Makita', 'MAMMOTION', 'Mercury', 'Metabo HPT', 'Milwaukee', 'MotoTec', 'MowRo',
  'MTD', 'Murray', 'Newport', 'Powersmart', 'PowerSmart', 'PRORUN', 'Razor', 'ShelterCoat',
  'SKIL', 'Suncast', 'Sunex Tools', 'Sunseeker', 'Suzuki', 'Taotao', 'Titan', 'Toro',
  'TrailMaster', 'Triumph', 'Tuxedo', 'Westinghouse', 'Wild Badger', 'Yamaha', 'Yard Force',
  'Weteextees'
];

function cleanTitle(raw: string): string {
  let t = raw.replace(/^\d+[\s_-]+/, '');
  t = t.replace(/[“”"']/g, '');
  t = t.replace(/&#038;/g, '&').replace(/&#8211;/g, '-').replace(/&amp;/g, '&');
  t = t.replace(/w_/g, 'with ');
  t = t.replace(/\?|\uFFFD/g, '"');
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

function extractBrand(title: string): string {
  const normalizedTitle = title.toLowerCase();
  for (const b of BRANDS) {
    if (normalizedTitle.includes(b.toLowerCase())) {
      return b;
    }
  }
  return 'Weteextees';
}

interface CategoryRule {
  category: string;
  collections: string[];
  priceRange: [number, number];
  condition: string;
}

function determineCategoryAndPricing(title: string): CategoryRule {
  const lower = title.toLowerCase();

  // 1. Furniture / Chairs
  if (/chair|dining|table|furniture|bench|stool|sofa|wood dining/.test(lower)) {
    return {
      category: 'Modern Chairs & Furniture',
      collections: ['modern-furniture'],
      priceRange: [289, 589],
      condition: 'Brand New',
    };
  }

  // 2. Outboard Motors & Marine
  if (/outboard|tiller|marine outboards|motor kit|boat motor|fish finder|propulsion/.test(lower)) {
    if (/30 hp|25 hp|20 hp/.test(lower)) {
      return {
        category: 'Outboard Motors & Marine',
        collections: ['featured'],
        priceRange: [2999, 3999],
        condition: 'Brand New',
      };
    }
    if (/15 hp|8 hp|9\.9 hp/.test(lower)) {
      return {
        category: 'Outboard Motors & Marine',
        collections: ['featured'],
        priceRange: [1499, 2299],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Outboard Motors & Marine',
      collections: ['featured'],
      priceRange: [699, 1299],
      condition: 'Brand New',
    };
  }

  // 3. Automotive Lifts & Jacks
  if (/lift|2 post|4 post|car lift|service jacks|alignment lift|end lifts/.test(lower)) {
    if (/4 post|15,000|11,000|10,000/.test(lower)) {
      return {
        category: 'Automotive Lifts & Jacks',
        collections: ['featured'],
        priceRange: [2499, 3899],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Automotive Lifts & Jacks',
      collections: ['featured'],
      priceRange: [1899, 2799],
      condition: 'Brand New',
    };
  }

  // 4. Espresso & Coffee Machines
  if (/espresso|jura|lelit|la marzocco|coffee machine/.test(lower)) {
    if (/linea mini|bianca/.test(lower)) {
      return {
        category: 'Espresso & Coffee Machines',
        collections: ['featured'],
        priceRange: [2499, 3899],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Espresso & Coffee Machines',
      collections: ['featured'],
      priceRange: [1299, 2199],
      condition: 'Brand New',
    };
  }

  // 5. Storage Sheds & Outdoor Buildings
  if (/shed|workshop|shelter|barn|storage shed/.test(lower)) {
    return {
      category: 'Outdoor Storage & Buildings',
      collections: ['featured'],
      priceRange: [1199, 2499],
      condition: 'Brand New',
    };
  }

  // 6. Go Karts & Powersports
  if (/go kart|go-kart|dune buggy|ground force|blazer/.test(lower)) {
    return {
      category: 'Go Karts & Powersports',
      collections: ['featured'],
      priceRange: [899, 1899],
      condition: 'Brand New',
    };
  }

  // 7. Generators & Power Stations
  if (/generator|inverter|wgen/.test(lower)) {
    if (/9500|7500/.test(lower)) {
      return {
        category: 'Power Equipment & Generators',
        collections: ['featured'],
        priceRange: [799, 1199],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Power Equipment & Generators',
      collections: ['featured'],
      priceRange: [499, 899],
      condition: 'Brand New',
    };
  }

  // 8. Power Tools & Saws
  if (/miter saw|mitre saw|radial cutting|compound miter|sliding compound/.test(lower)) {
    return {
      category: 'Power Tools & Saws',
      collections: ['featured'],
      priceRange: [449, 899],
      condition: 'Brand New',
    };
  }

  // 9. Snow Blowers
  if (/snow blower|snowblower|sno-thro/.test(lower)) {
    if (/two-stage|two stage|three-stage|rapidtrak|hd 1030|hd 828|platinum/.test(lower)) {
      return {
        category: 'Snow Blowers',
        collections: ['featured'],
        priceRange: [899, 1799],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Snow Blowers',
      collections: ['featured'],
      priceRange: [399, 799],
      condition: 'Brand New',
    };
  }

  // 10. Riding & Zero Turn Lawn Mowers
  if (/zero turn|zero-turn|riding|timecutter|z-turn|tractor|ztrak|apex|magnum|myride/.test(lower)) {
    return {
      category: 'Lawn Mowers & Tractors',
      collections: ['featured'],
      priceRange: [1899, 3699],
      condition: 'Brand New',
    };
  }

  // 11. Robotic Mowers
  if (/robotic|automower|luba|mowro|sunseeker/.test(lower)) {
    return {
      category: 'Lawn Mowers & Tractors',
      collections: ['featured'],
      priceRange: [999, 2199],
      condition: 'Brand New',
    };
  }

  // 12. Walk Behind & Self-Propelled Mowers / Trimmers / Baggers
  if (/bagger|timemaster|self-propelled|push lawn|brushless push|lawn mower|mower kit/.test(lower)) {
    if (/bagger/.test(lower)) {
      return {
        category: 'Lawn Mowers & Accessories',
        collections: ['featured'],
        priceRange: [349, 599],
        condition: 'Brand New',
      };
    }
    return {
      category: 'Lawn Mowers & Tractors',
      collections: ['featured'],
      priceRange: [399, 799],
      condition: 'Brand New',
    };
  }

  // Default Fallback
  return {
    category: 'Home & Outdoor Equipment',
    collections: ['featured'],
    priceRange: [499, 999],
    condition: 'Brand New',
  };
}

function generateSlug(title: string, index: number): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 45);
  return `${base || 'product'}-${index}`;
}

function generateDescription(title: string, brand: string, category: string): string {
  return `${title} delivers professional-grade engineering, reliable performance, and exceptional build quality. Designed for discerning buyers seeking durability, precision, and ease of operation.

Key Features & Highlights:
• Authentic original manufacturing from ${brand} with verified specifications
• Engineered for high efficiency, seamless usability, and extended working longevity
• Thoroughly inspected and guaranteed to perform to exact manufacturer standards
• Includes complete standard manufacturer fittings, essential accessories, and setup documentation
• Ships with insured, white-glove packaging and tracked courier dispatch directly to your address

Technical Details & Specifications:
• Brand: ${brand}
• Category: ${category}
• Condition: Brand New / Factory Inspected
• Warranty: Full manufacturer warranty coverage and 30-day satisfaction guarantee
• Support: Direct technical consultation and dedicated customer support from Weteextees`;
}

function calculatePrice(title: string, range: [number, number], index: number): { price: number; originalPrice: number } {
  const seed = (title.length * 17 + index * 31) % 100;
  const min = range[0];
  const max = range[1];
  const calculated = Math.round(min + (seed / 100) * (max - min));
  const roundedPrice = Math.floor(calculated / 10) * 10 - 1; // e.g. 789.00 or 1499.00
  const finalPrice = Math.max(min, roundedPrice);
  const originalPrice = Math.round(finalPrice * 1.25);
  return { price: finalPrice, originalPrice };
}

async function uploadImage(localPath: string, destStoragePath: string): Promise<string | null> {
  try {
    const fileBuffer = await fs.readFile(localPath);
    const ext = path.extname(localPath).toLowerCase();
    let contentType = 'image/webp';
    if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.avif') contentType = 'image/avif';

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(destStoragePath, fileBuffer, {
        contentType,
        upsert: true,
      });

    if (uploadError) {
      console.error(`  ⚠️ Upload failed for ${destStoragePath}:`, uploadError.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(destStoragePath);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error(`  ❌ Error processing file ${localPath}:`, err);
    return null;
  }
}

async function ensureDefaultSeller() {
  const { data: existingSellers } = await supabase
    .from('sellers')
    .select('id, username')
    .limit(1);

  if (existingSellers && existingSellers.length > 0) {
    return existingSellers[0].id;
  }

  const { data: newSeller, error } = await supabase
    .from('sellers')
    .insert([
      {
        name: 'Weteextees Official Store',
        username: 'weteextees',
        bio: 'Official flagship store for curated modern furniture, authentic antiques, and premium home machinery.',
        avatar_url: 'https://weteextees.com/weteex-machines-mark.svg',
        location: 'London, United Kingdom',
        member_since: '2023',
        reviews: [],
      }
    ])
    .select('id')
    .single();

  if (error) {
    console.warn('⚠️ Could not create default seller (continuing without seller):', error.message);
    return null;
  }

  return newSeller?.id || null;
}

async function main() {
  console.log('🚀 Starting import of caminorealantiques_products into Supabase...\n');

  const sellerId = await ensureDefaultSeller();
  console.log(`👤 Assigned Seller ID: ${sellerId || 'None'}`);

  const baseDir = path.resolve(process.cwd(), 'caminorealantiques_products');
  if (!existsSync(baseDir)) {
    console.error(`❌ Directory not found: ${baseDir}`);
    process.exit(1);
  }

  const folderEntries = await fs.readdir(baseDir, { withFileTypes: true });
  const productFolders = folderEntries
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .sort();

  console.log(`📁 Found ${productFolders.length} product folders to process.\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < productFolders.length; i++) {
    const folderName = productFolders[i];
    const itemNumber = i + 1;
    const title = cleanTitle(folderName);
    const brand = extractBrand(title);
    const categoryRule = determineCategoryAndPricing(title);
    const slug = generateSlug(title, itemNumber);
    const { price, originalPrice } = calculatePrice(title, categoryRule.priceRange, itemNumber);
    const description = generateDescription(title, brand, categoryRule.category);

    console.log(`[${itemNumber}/${productFolders.length}] Processing: "${title}" (${brand} | ${categoryRule.category}) - $${price}`);

    const folderPath = path.join(baseDir, folderName);
    const imageFiles = (await fs.readdir(folderPath))
      .filter(f => /\.(png|webp|jpe?g|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    const uploadedUrls: string[] = [];

    for (const imgFile of imageFiles) {
      const localFilePath = path.join(folderPath, imgFile);
      const destPath = `products/${slug}/${imgFile}`;
      const publicUrl = await uploadImage(localFilePath, destPath);
      if (publicUrl) {
        uploadedUrls.push(publicUrl);
      }
    }

    if (uploadedUrls.length === 0) {
      console.warn(`  ⚠️ No images uploaded for ${slug}. Skipping.`);
      failCount++;
      continue;
    }

    const rating = parseFloat((4.6 + ((itemNumber * 7) % 4) * 0.1).toFixed(1));
    const reviewCount = 8 + ((itemNumber * 13) % 45);

    const productPayload = {
      id: slug,
      slug: slug,
      title: title,
      description: description,
      price: price,
      original_price: originalPrice,
      rating: rating,
      review_count: reviewCount,
      images: uploadedUrls,
      condition: categoryRule.condition,
      category: categoryRule.category,
      brand: brand,
      payee_email: 'contact@weteextees.com',
      currency: 'USD',
      checkout_link: `/checkout?slug=${slug}`,
      checkout_flow: 'stripe',
      in_stock: true,
      published: true,
      is_featured: i < 12,
      collections: categoryRule.collections,
      seller_id: sellerId,
      meta: {
        published: true,
        gmc_enabled: true,
        original_price: originalPrice,
        sku: `WTX-${slug.slice(0, 30).toUpperCase()}`,
        gtin: '',
        mpn: `MPN-${itemNumber.toString().padStart(4, '0')}`,
        condition: categoryRule.condition,
        weight: 'Standard Freight',
      },
      updated_at: new Date().toISOString(),
    };

    const { error: insertError } = await supabase
      .from('products')
      .upsert([productPayload], { onConflict: 'slug' });

    if (insertError) {
      console.error(`  ❌ Failed to insert product in DB:`, insertError.message);
      failCount++;
    } else {
      console.log(`  ✅ Inserted successfully with ${uploadedUrls.length} images.`);
      successCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`🎉 Import Complete!`);
  console.log(`✅ Successfully imported: ${successCount} products`);
  console.log(`❌ Failed: ${failCount} products`);
  console.log(`========================================\n`);
}

main().catch(err => {
  console.error('Fatal import error:', err);
  process.exit(1);
});
