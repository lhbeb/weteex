import type { Metadata } from 'next';
import ShippingPolicyClient from '@/components/ShippingPolicyClient';

export const metadata: Metadata = {
  title: 'Versand- und Lieferbedingungen | Weteextees',
  description: 'Kostenloser versicherter Versand innerhalb Deutschlands mit einem Werktag Bearbeitungszeit und 3–4 Werktagen Lieferzeit.',
  alternates: { canonical: 'https://weteextees.com/shipping-policy' },
};

export default function ShippingPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'WebPage', '@id': 'https://weteextees.com/shipping-policy',
        url: 'https://weteextees.com/shipping-policy', name: 'Versand- und Lieferbedingungen | Weteextees',
        description: 'Kostenloser versicherter Versand innerhalb Deutschlands mit einem Werktag Bearbeitungszeit und 3–4 Werktagen Lieferzeit.',
      },
      {
        '@type': 'OfferShippingDetails', '@id': 'https://weteextees.com/shipping-policy#shipping-de',
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'DE' },
        shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'EUR' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 1, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 4, unitCode: 'DAY' },
          cutoffTime: '14:00:00+01:00',
          businessDays: ['https://schema.org/Monday','https://schema.org/Tuesday','https://schema.org/Wednesday','https://schema.org/Thursday','https://schema.org/Friday'],
        },
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} /><ShippingPolicyClient /></>;
}
