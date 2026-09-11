/** Germany-only market configuration. */
export type MarketKey = 'eu';

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

export const GERMANY_MARKET: MarketConfig = {
  label: 'Deutschland',
  flag: '🇩🇪',
  currencyCode: 'EUR',
  currencySymbol: '€',
  locale: 'de-DE',
  shipsFrom: 'Deutschland',
  shipsFromFlag: '🇩🇪',
  deliveryDaysMin: 4,
  deliveryDaysMax: 5,
  freeShippingText: 'Kostenloser Standardversand innerhalb Deutschlands',
  returnsText: '30 Tage Rückgaberecht',
  faqShippingAnswer: 'Bestellungen werden innerhalb eines Werktags bearbeitet und innerhalb Deutschlands in der Regel in 3 bis 4 Werktagen zugestellt.',
  faqFreeShippingAnswer: 'Ja, der versicherte Standardversand ist für alle Bestellungen innerhalb Deutschlands kostenlos (Deutschland und EU).',
};

export const MARKETS: Record<MarketKey, MarketConfig> = { eu: GERMANY_MARKET };
export const DEFAULT_MARKET = GERMANY_MARKET;

export function getMarket(_key?: string | null): MarketConfig {
  return GERMANY_MARKET;
}

export function formatMarketPrice(price: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
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
    return `${start.getDate()}–${end.getDate()}. ${start.toLocaleString('de-DE', { month: 'long' })}`;
  }
  return `${start.getDate()}. ${start.toLocaleString('de-DE', { month: 'long' })} – ${end.getDate()}. ${end.toLocaleString('de-DE', { month: 'long' })}`;
}

export const MARKET_OPTIONS = [
  { value: 'eu', label: '🇩🇪 Deutschland (EUR €)' },
] as const;

export const MARKET_CURRENCY_MAP: Record<string, string> = { eu: 'EUR' };
