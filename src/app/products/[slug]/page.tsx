import { getProductBySlug } from '@/lib/data';
import { getSellerById } from '@/lib/supabase/sellers';
import { formatValidSku, mapConditionToSchema } from '@/lib/conditions';
import { getProductTranslation } from '@/lib/productTranslations';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';
import type { Metadata, ResolvingMetadata } from 'next';

const BASE_URL = 'https://weteextees.com';

async function loadProduct(slug: string) {
  return getProductBySlug(slug);
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const { slug } = await params;
    const product = slug ? await loadProduct(slug) : null;
    if (!product) return { title: 'Product Not Found | Weteextees' };
    const translation = getProductTranslation(product, 'en', product.title, product.description);
    const title = `${translation.title} - ${product.brand || 'Weteextees'} | ${product.category || 'Furniture'} | Weteextees`;
    const description = `${translation.description || ''}`.slice(0, 155);
    const canonicalUrl = `${BASE_URL}/products/${product.slug}`;
    const images = (product.images || []).map((url) => ({ url: new URL(url, BASE_URL).toString(), alt: translation.title }));
    return {
      title, description,
      keywords: product.meta?.keywords || `${translation.title}, ${product.brand}, ${product.category}`,
      alternates: { canonical: canonicalUrl },
      openGraph: { title, description, url: canonicalUrl, siteName: 'Weteextees', type: 'website', locale: 'en_US', images },
      twitter: { card: 'summary_large_image', title, description, images: images.map((image) => image.url) },
      other: {
        'og:type': 'product',
        'product:price:amount': Number(product.price || 0).toFixed(2),
        'product:price:currency': 'USD',
        'product:availability': product.inStock === false ? 'out of stock' : 'in stock',
        'product:brand': product.brand || 'Weteextees',
        'product:retailer_item_id': product.slug || '',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return { title: 'Furniture & Designer Chairs | Weteextees', description: 'Shop modern furniture, dining chairs, and tables from Weteextees.' };
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    if (!slug) notFound();
    let product = await loadProduct(slug);
    if (!product) notFound();

    if ((!Array.isArray(product.reviews) || product.reviews.length === 0) && product.sellerId) {
      try {
        const seller = await getSellerById(product.sellerId);
        if (seller?.reviews?.length) {
          product = {
            ...product,
            reviews: seller.reviews,
            rating: product.rating || seller.averageRating || 0,
            reviewCount: product.reviewCount || seller.totalReviews || 0,
            meta: { ...product.meta, _sellerReviews: true, _sellerName: seller.name, _sellerUsername: seller.username } as any,
          };
        }
      } catch { /* A seller lookup must not prevent the product page from loading. */ }
    }

    const p = product!;
    const translation = getProductTranslation(p, 'en', p.title, p.description);
    const priceValidUntil = new Date();
    priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
    const hasReviews = Number(p.reviewCount) > 0 && Number(p.rating) > 0;
    const productSchema: Record<string, any> = {
      '@context': 'https://schema.org', '@type': 'Product', name: translation.title,
      description: translation.description,
      image: (p.images || []).map((image: string) => { try { return new URL(image, BASE_URL).toString(); } catch { return image; } }),
      brand: { '@type': 'Brand', name: p.brand || 'Weteextees' }, category: p.category || 'Furniture', sku: formatValidSku(p, slug),
      offers: {
        '@type': 'Offer', price: Number(p.price || 0), priceCurrency: 'USD',
        validFrom: new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10),
        priceValidUntil: priceValidUntil.toISOString().slice(0, 10),
        availability: p.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
        itemCondition: mapConditionToSchema(p.condition), url: `${BASE_URL}/products/${p.slug}`,
        seller: { '@type': 'Organization', name: 'Weteextees' },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy', name: 'Weteextees 30-Day Return & Refund Policy',
          merchantReturnLink: `${BASE_URL}/return-policy`, applicableCountry: ['US'],
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow', merchantReturnDays: 30,
          returnMethod: 'https://schema.org/ReturnByMail', returnFees: 'https://schema.org/FreeReturn',
          returnLabelSource: 'https://schema.org/ReturnLabelInTheBox', restockingFee: 0, refundType: 'https://schema.org/FullRefund',
        },
        shippingDetails: [{
          '@type': 'OfferShippingDetails', shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'USD' },
          shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
            transitTime: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 9, unitCode: 'DAY' },
          },
        }],
      },
    };
    if (hasReviews) {
      productSchema.aggregateRating = { '@type': 'AggregateRating', ratingValue: p.rating, reviewCount: p.reviewCount, bestRating: 5, worstRating: 1 };
      productSchema.review = ((p.reviews || []) as any[]).slice(0, 5).map((review) => ({
        '@type': 'Review', author: { '@type': 'Person', name: review.author || 'Verified Customer' },
        reviewRating: { '@type': 'Rating', ratingValue: review.rating || 0, bestRating: 5, worstRating: 1 },
        reviewBody: review.content || '', datePublished: review.date || new Date().toISOString(),
      }));
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Furniture Collections', item: `${BASE_URL}/#collection` },
        { '@type': 'ListItem', position: 3, name: p.category || 'Furniture', item: `${BASE_URL}/#collection?category=${encodeURIComponent(p.category || '')}` },
        { '@type': 'ListItem', position: 4, name: p.title || 'Product', item: `${BASE_URL}/products/${p.slug}` },
      ],
    };
    return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductPageClient product={p} /></>;
  } catch (error) {
    console.error('Error in ProductPage:', error);
    notFound();
  }
}
