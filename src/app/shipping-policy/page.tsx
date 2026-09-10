import type { Metadata } from 'next';
import ShippingPolicyClient from '@/components/ShippingPolicyClient';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Weteextees',
  description: 'Free insured delivery across the United States with 0–1 business day handling and 5–9 business day transit.',
  alternates: { canonical: 'https://weteextees.com/shipping-policy' },
};

export default function ShippingPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'WebPage', '@id': 'https://weteextees.com/shipping-policy',
        url: 'https://weteextees.com/shipping-policy', name: 'Shipping & Delivery Policy | Weteextees',
        description: 'Free insured United States shipping with 0–1 business day handling and 5–9 business day transit.',
      },
      {
        '@type': 'OfferShippingDetails', '@id': 'https://weteextees.com/shipping-policy#shipping-us',
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
        shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'USD' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 9, unitCode: 'DAY' },
          cutoffTime: '14:00:00-07:00',
          businessDays: ['https://schema.org/Monday','https://schema.org/Tuesday','https://schema.org/Wednesday','https://schema.org/Thursday','https://schema.org/Friday'],
        },
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} /><ShippingPolicyClient /></>;
}
