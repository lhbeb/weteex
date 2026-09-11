import { getProductBySlug } from '@/lib/data';
import { getReviewProduct, isReviewProduct } from '@/lib/reviewProducts';
import { getSellerById } from '@/lib/supabase/sellers';
import { formatValidSku, mapConditionToSchema } from '@/lib/conditions';
import { getProductTranslation } from '@/lib/productTranslations';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';
import type { Metadata, ResolvingMetadata } from 'next';

// Hardcoded base URL (no environment variable needed)
const BASE_URL = 'https://weteextees.com';

export async function generateMetadata(
  { params, searchParams }: { params: Promise<{ slug: string }>; searchParams?: Promise<{ lang?: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { slug } = await params;
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const lang = (resolvedSearchParams.lang?.toLowerCase() === 'en' ? 'en' : 'de') as 'de' | 'en';

    if (!slug) return { title: 'Product Not Found | Weteextees' };

    let product = isReviewProduct(slug) ? getReviewProduct(slug) : null;
    if (!product) product = await getProductBySlug(slug);
    if (!product) return { title: 'Product Not Found | Weteextees' };

    const translation = getProductTranslation(product, lang, product.title, product.description);
    const displayTitle = translation.title;
    const displayDescription = translation.description;

    const title = `${displayTitle} - ${product.brand || 'Weteextees'} | ${product.category || (lang === 'en' ? 'Furniture' : 'Möbel')} | Weteextees`;
    const description = (displayDescription || '').substring(0, 155) + '...';
    const canonicalUrl = `${BASE_URL}/products/${product.slug}`;
    const currencyCode = lang === 'en' ? 'USD' : (product.currency || 'EUR');
    const price = lang === 'en'
      ? (Math.round((product.price || 0) * 1.085 * 100) / 100).toFixed(2)
      : (product.price || 0).toFixed(2);
    const inStock = product.inStock !== false;

    const imageUrls = (product.images || []).map(img => ({
      url: new URL(img, BASE_URL).toString(),
      alt: displayTitle,
    }));

    return {
      title,
      description,
      keywords: product.meta?.keywords || `${displayTitle}, ${product.brand}, ${product.category}`,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'de': `${BASE_URL}/products/${product.slug}?lang=de`,
          'en': `${BASE_URL}/products/${product.slug}?lang=en`,
        },
      },
      openGraph: {
        title,
        description,
        url: `${canonicalUrl}?lang=${lang}`,
        siteName: 'Weteextees',
        type: 'website',
        locale: lang === 'en' ? 'en_US' : 'de_DE',
        images: imageUrls,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: imageUrls.map(i => i.url),
      },
      // Extra OG product tags consumed by Google Shopping & Facebook
      other: {
        'og:type': 'product',
        'product:price:amount': price,
        'product:price:currency': currencyCode,
        'product:availability': inStock ? 'in stock' : 'out of stock',
        'product:brand': product.brand || 'Weteextees',
        'product:retailer_item_id': product.slug || '',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Möbel & Designer-Stühle | Weteextees',
      description: 'Entdecken Sie handverlesene moderne Möbel, ergonomische Esszimmerstühle und Tische von Weteextees.',
    };
  }
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
}) {
  try {
    const { slug } = await params;
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const lang = (resolvedSearchParams.lang?.toLowerCase() === 'en' ? 'en' : 'de') as 'de' | 'en';

    if (!slug || typeof slug !== 'string') {
      notFound();
    }

    let product = isReviewProduct(slug) ? getReviewProduct(slug) : null;
    if (!product) product = await getProductBySlug(slug);
    if (!product) notFound();

    // ── Review inheritance ─────────────────────────────────────────────────
    const hasOwnReviews = Array.isArray(product.reviews) && product.reviews.length > 0;
    if (!hasOwnReviews && product.sellerId) {
      try {
        const seller = await getSellerById(product.sellerId);
        if (seller && seller.reviews && seller.reviews.length > 0) {
          product = {
            ...product,
            reviews: seller.reviews,
            rating: product.rating || seller.averageRating || 0,
            reviewCount: product.reviewCount || seller.totalReviews || 0,
            meta: {
              ...product.meta,
              _sellerReviews: true,
              _sellerName: seller.name,
              _sellerUsername: seller.username,
            } as any,
          };
        }
      } catch {
        // Silently ignore – don't break product page if seller fetch fails
      }
    }

    const p = product!;
    const inStock = p.inStock !== false;
    const hasReviews = (p.reviewCount || 0) > 0 && (p.rating || 0) > 0;

    const translation = getProductTranslation(p, lang, p.title, p.description);
    const displayTitle = translation.title;
    const displayDescription = translation.description;

    // priceValidUntil: 1 year from today — expected by Google Merchant Center
    const priceValidUntil = new Date();
    priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);

    const priceAmount = lang === 'en'
      ? Math.round((p.price || 0) * 1.085 * 100) / 100
      : (p.price || 0);
    const priceCurrency = lang === 'en' ? 'USD' : 'EUR';

    // Generate Product Schema for Rich Snippets (EU & Google Merchant Center compliant)
    const productSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": displayTitle,
      "description": displayDescription,
      "image": (p.images || []).map((img: string) => {
        try { return new URL(img, BASE_URL).toString(); } catch { return img; }
      }),
      "brand": {
        "@type": "Brand",
        "name": p.brand || 'Weteextees'
      },
      "category": p.category || (lang === 'en' ? 'Furniture' : 'Möbel'),
      "sku": formatValidSku(p, slug),
      "offers": {
        "@type": "Offer",
        "price": priceAmount,
        "priceCurrency": priceCurrency,
        "validFrom": new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
        "priceValidUntil": priceValidUntil.toISOString().slice(0, 10),
        "availability": inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        "itemCondition": mapConditionToSchema(p.condition),
        "url": `${BASE_URL}/products/${p.slug}?lang=${lang}`,
        "seller": {
          "@type": "Organization",
          "name": "Weteextees"
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "name": lang === 'en' ? "Weteextees 30-Day Return & Refund Policy" : "Weteextees 30-Tage Rückgaberecht",
          "merchantReturnLink": `${BASE_URL}/return-policy`,
          "applicableCountry": ["US", "DE", "AT", "FR", "NL", "BE", "IT", "ES"],
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn",
          "returnLabelSource": "https://schema.org/ReturnLabelInTheBox",
          "restockingFee": 0,
          "refundType": "https://schema.org/FullRefund"
        },
        "shippingDetails": [
          {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": 0,
              "currency": priceCurrency
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": lang === 'en' ? "US" : "DE"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 5,
                "maxValue": 9,
                "unitCode": "DAY"
              }
            }
          }
        ]
      },
    };

    // Only add aggregateRating when there ARE real reviews —
    // Google rejects / ignores ratings with reviewCount=0
    if (hasReviews) {
      productSchema["aggregateRating"] = {
        "@type": "AggregateRating",
        "ratingValue": p.rating,
        "reviewCount": p.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      };
      productSchema["review"] = ((p.reviews || []) as any[]).slice(0, 5).map((review: any) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": review.author || 'Verifizierter Kunde' },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating || 0,
          "bestRating": 5,
          "worstRating": 1
        },
        "reviewBody": review.content || '',
        "datePublished": review.date || new Date().toISOString(),
      }));
    }

    // Generate Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Möbelkollektionen", "item": `${BASE_URL}/#collection` },
        {
          "@type": "ListItem", "position": 3,
          "name": p.category || 'Möbel',
          "item": `${BASE_URL}/#collection?category=${encodeURIComponent(p.category || '')}`
        },
        { "@type": "ListItem", "position": 4, "name": p.title || 'Produkt', "item": `${BASE_URL}/products/${p.slug}` }
      ]
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ProductPageClient product={p} />
      </>
    );
  } catch (error) {
    console.error('Error in ProductPage:', error);
    notFound();
  }
}
