import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/data';
import { formatWeteexteesProductId, mapConditionToGmc } from '@/lib/conditions';
import { getProductTranslation } from '@/lib/productTranslations';
import type { Product } from '@/types/product';

const BASE_URL = 'https://weteextees.com';
const GMC_TITLE_MAX_LENGTH = 150;
const GMC_DESCRIPTION_MAX_LENGTH = 5000;
const SUPPORTED_IMAGE_EXTENSIONS = /\.(?:jpe?g|png|webp|gif|bmp|tiff?)(?:$|\?)/i;

const FURNITURE_CATEGORY = 'Modern Chairs & Furniture';
const GOOGLE_FURNITURE_CATEGORY = '436';
const GMC_BRAND = 'Weteextees';

function escapeXml(value: unknown): string {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function normalizeFeedText(value: unknown): string {
  return String(value ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncateFeedText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  const truncated = value.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${(lastSpace > maxLength * 0.75 ? truncated.slice(0, lastSpace) : truncated).trimEnd()}…`;
}

function normalizeImageUrl(value: unknown): string | null {
  try {
    const url = new URL(String(value ?? '').trim(), BASE_URL);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    if (!SUPPORTED_IMAGE_EXTENSIONS.test(`${url.pathname}${url.search}`)) return null;
    return url.toString();
  } catch { return null; }
}

function getFeedImageUrls(product: Product): string[] {
  return [...new Set((product.images || []).map(normalizeImageUrl)
    .filter((url): url is string => Boolean(url)))];
}

function usesInternalCheckout(product: Product): boolean {
  if (product.checkoutFlow !== 'stripe') return false;

  try {
    const checkoutUrl = new URL(String(product.checkoutLink || '').trim(), BASE_URL);
    return checkoutUrl.origin === new URL(BASE_URL).origin && checkoutUrl.pathname === '/checkout';
  } catch {
    return false;
  }
}

function isFeedEligible(product: Product): boolean {
  return product.meta?.gmc_enabled === true && product.meta?.published !== false &&
    product.published !== false && product.category === FURNITURE_CATEGORY &&
    Boolean(product.brand && product.brand.trim() && product.brand.toLowerCase() !== 'unbranded') &&
    usesInternalCheckout(product) &&
    Boolean(product.slug && normalizeFeedText(product.title) && getFeedImageUrls(product).length) &&
    Number.isFinite(Number(product.price)) && Number(product.price) > 0;
}

function xmlResponse(xml: string) {
  return new NextResponse(xml, { status: 200, headers: {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'no-store, max-age=0',
    'X-Robots-Tag': 'noindex, follow',
  }});
}

function retiredRegionalFeed() {
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0"><channel>
<title>Weteextees Retired Regional Feed</title><link>${BASE_URL}</link>
<description>Dieser regionale Produktfeed ist nicht mehr aktiv.</description><language>de</language>
</channel></rss>`);
}

export async function GET(request: NextRequest) {
  const country = request.nextUrl.searchParams.get('country')?.toUpperCase();
  const currency = request.nextUrl.searchParams.get('currency')?.toUpperCase();
  const language = (request.nextUrl.searchParams.get('lang') || request.nextUrl.searchParams.get('language'))?.toLowerCase();

  // Weteextees operates exclusively in Germany with German-language EUR offers.
  if ((country && country !== 'DE') || (currency && currency !== 'EUR') || (language && language !== 'de')) {
    return retiredRegionalFeed();
  }

  try {
    const products = await getAllProducts();
    const itemsXml = products.filter(isFeedEligible).map((product) => {
      const translated = getProductTranslation(product, 'de', product.title, product.description);
      const title = escapeXml(truncateFeedText(normalizeFeedText(translated.title), GMC_TITLE_MAX_LENGTH));
      const description = escapeXml(truncateFeedText(normalizeFeedText(translated.description), GMC_DESCRIPTION_MAX_LENGTH));
      const feedImages = getFeedImageUrls(product);
      const additionalImages = feedImages.slice(1, 11)
        .map((image) => `\n      <g:additional_image_link>${escapeXml(image)}</g:additional_image_link>`).join('');
      const gmcProductId = formatWeteexteesProductId(product);
      const identifierXml = `\n      <g:mpn>${escapeXml(gmcProductId)}</g:mpn>\n      <g:identifier_exists>yes</g:identifier_exists>`;
      return `
    <item>
      <g:id>${escapeXml(gmcProductId)}</g:id>
      <title>${title}</title>
      <description>${description}</description>
      <link>${escapeXml(`${BASE_URL}/products/${encodeURIComponent(product.slug)}`)}</link>
      <g:image_link>${escapeXml(feedImages[0])}</g:image_link>${additionalImages}
      <g:price>${Number(product.price).toFixed(2)} EUR</g:price>
      <g:availability>${product.inStock === false ? 'out_of_stock' : 'in_stock'}</g:availability>
      <g:condition>${mapConditionToGmc(product.condition)}</g:condition>
      <g:brand>${escapeXml(GMC_BRAND)}</g:brand>
      <g:product_type>${escapeXml(FURNITURE_CATEGORY)}</g:product_type>
      <g:google_product_category>${GOOGLE_FURNITURE_CATEGORY}</g:google_product_category>
      <g:custom_label_0>${escapeXml(product.condition || 'New')}</g:custom_label_0>
      <g:return_policy_label>default_return_policy</g:return_policy_label>${identifierXml}
      <g:shipping><g:country>DE</g:country><g:service>Kostenloser Standardversand (Deutschland)</g:service>
        <g:price>0.00 EUR</g:price><g:min_handling_time>1</g:min_handling_time><g:max_handling_time>1</g:max_handling_time>
        <g:min_transit_time>5</g:min_transit_time><g:max_transit_time>8</g:max_transit_time></g:shipping>
    </item>`;
    }).join('');

    return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0"><channel>
<title>Weteextees Google Merchant Center Feed (Deutschland)</title><link>${BASE_URL}</link>
<description>Weteextees Möbelprodukte für Deutschland in EUR.</description><language>de</language>${itemsXml}
</channel></rss>`);
  } catch (error) {
    console.error('Error generating GMC feed:', error);
    return new NextResponse('Error generating feed', { status: 500 });
  }
}
