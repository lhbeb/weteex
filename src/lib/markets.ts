/** United States storefront market configuration. */
export type MarketKey = 'us';

export interface MarketConfig {
  label: string;
  flag: string;
  currencyCode: string;
  currencySymbol: string;
  locale: string;
  shipsFrom: string;
  shipsFromFlag: string;
  deliveryDaysMin: number;
  deliveryDaysMax: number;
  freeShippingText: string;
  returnsText: string;
  faqShippingAnswer: string;
  faqFreeShippingAnswer: string;
}

export const MARKETS: Record<MarketKey, MarketConfig> = {
  us: {
    label: 'United States',
    flag: '🇺🇸',
    currencyCode: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    shipsFrom: 'United States',
    shipsFromFlag: '🇺🇸',
    deliveryDaysMin: 5,
    deliveryDaysMax: 8,
    freeShippingText: 'Free standard shipping across the United States',
    returnsText: '30-day returns',
    faqShippingAnswer:
      'Orders are processed within 1 business day. Most deliveries within the United States arrive in 5 to 8 business days after processing.',
    faqFreeShippingAnswer:
      'Yes, standard shipping is free across the United States. Faster delivery options may be available at checkout.',
  },
};

export const DEFAULT_MARKET: MarketConfig = MARKETS.us;

export function getMarket(_key?: string | null): MarketConfig {
  return DEFAULT_MARKET;
}

export function formatMarketPrice(price: number, market: MarketConfig = DEFAULT_MARKET): string {
  return new Intl.NumberFormat(market.locale, {
    style: 'currency',
    currency: market.currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function getDeliveryRange(market: MarketConfig = DEFAULT_MARKET): string {
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);
  start.setDate(today.getDate() + market.deliveryDaysMin);
  end.setDate(today.getDate() + market.deliveryDaysMax);

  if (start.getMonth() === end.getMonth()) {
    return `${start.getDate()}–${end.getDate()} ${start.toLocaleString(market.locale, { month: 'long' })}`;
  }
  return `${start.getDate()} ${start.toLocaleString(market.locale, { month: 'long' })} – ${end.getDate()} ${end.toLocaleString(market.locale, { month: 'long' })}`;
}

export const MARKET_OPTIONS = [
  { value: 'us', label: '🇺🇸 United States (USD $)' },
] as const;

export const MARKET_CURRENCY_MAP: Record<string, string> = {
  us: 'USD',
};
