import type { Metadata } from 'next';
import ShippingPolicyClient from '@/components/ShippingPolicyClient';

export const metadata: Metadata = {
  title: 'Versandrichtlinien & Lieferzeiten | Shipping & Delivery Policy | Weteextees',
  description:
    'Free insured freight shipping policy: 0–1 business days handling, 5–9 business days transit time (5–10 business days total delivery) to the United States, Germany, and Europe. 100% insured delivery.',
  alternates: {
    canonical: 'https://weteextees.com/shipping-policy',
  },
};

export default function ShippingPolicyPage() {
  const supportedRegions = [
    { country: 'US', currency: 'USD', name: 'United States', cutoff: '14:00:00-07:00' },
    { country: 'DE', currency: 'EUR', name: 'Germany', cutoff: '23:00:00+01:00' },
    { country: 'AT', currency: 'EUR', name: 'Austria', cutoff: '23:00:00+01:00' },
    { country: 'FR', currency: 'EUR', name: 'France', cutoff: '23:00:00+01:00' },
    { country: 'NL', currency: 'EUR', name: 'Netherlands', cutoff: '23:00:00+01:00' },
    { country: 'BE', currency: 'EUR', name: 'Belgium', cutoff: '23:00:00+01:00' },
    { country: 'IT', currency: 'EUR', name: 'Italy', cutoff: '23:00:00+01:00' },
    { country: 'ES', currency: 'EUR', name: 'Spain', cutoff: '23:00:00+01:00' },
  ];

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://weteextees.com/shipping-policy',
        'url': 'https://weteextees.com/shipping-policy',
        'name': 'Versandrichtlinien & Lieferzeiten | Weteextees',
        'description':
          'Versand- und Lieferbedingungen für moderne Möbel, Stühle und Tische von Weteextees mit versichertem Transport und Speditionsversand. 0–1 Werktage Bearbeitung, 5–9 Werktage Laufzeit (5–10 Werktage Lieferzeit), 100% versandkostenfrei.',
      },
      ...supportedRegions.map((region) => ({
        '@type': 'OfferShippingDetails',
        '@id': `https://weteextees.com/shipping-policy#shipping-${region.country.toLowerCase()}`,
        'shippingDestination': {
          '@type': 'DefinedRegion',
          'addressCountry': region.country,
        },
        'shippingRate': {
          '@type': 'MonetaryAmount',
          'value': 0,
          'currency': region.currency,
        },
        'deliveryTime': {
          '@type': 'ShippingDeliveryTime',
          'handlingTime': {
            '@type': 'QuantitativeValue',
            'minValue': 0,
            'maxValue': 1,
            'unitCode': 'DAY',
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 5,
            'maxValue': 9,
            'unitCode': 'DAY',
          },
          'cutoffTime': region.cutoff,
          'businessDays': [
            'https://schema.org/Monday',
            'https://schema.org/Tuesday',
            'https://schema.org/Wednesday',
            'https://schema.org/Thursday',
            'https://schema.org/Friday',
          ],
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <ShippingPolicyClient />
    </>
  );
}

