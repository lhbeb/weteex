import { NextResponse } from 'next/server';
import { getProducts, updateProduct } from '@/lib/supabase/products';
import { PRODUCT_TRANSLATIONS } from '@/lib/productTranslations';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await getProducts();
    let updatedCount = 0;
    const updatedSlugs = [];

    console.log(`Found ${products.length} products`);
    for (const product of products) {
      const translation = PRODUCT_TRANSLATIONS[product.slug];
      if (translation && translation.de) {
        console.log(`Updating ${product.slug}`);
        await updateProduct(product.slug, {
          title: translation.de.title,
          description: translation.de.description,
        });
        updatedCount++;
        updatedSlugs.push(product.slug);
      } else {
        console.log(`No translation found for ${product.slug}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully updated ${updatedCount} products to German.`,
      updatedSlugs
    });
  } catch (error: any) {
    console.error('Translation script error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
