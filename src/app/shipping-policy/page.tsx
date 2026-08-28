import type { Metadata } from 'next';
import ShippingPolicyClient from '@/components/ShippingPolicyClient';

export const metadata: Metadata = {
  title: 'Versandrichtlinien | Shipping & Delivery Policy | Weteextees',
  description:
    'Free insured freight shipping and protective packaging policy for modern chairs, solid wood tables, and designer furniture.',
  alternates: {
    canonical: 'https://weteextees.com/shipping-policy',
  },
};

export default function ShippingPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://weteextees.com/shipping-policy',
        'url': 'https://weteextees.com/shipping-policy',
        'name': 'Versandrichtlinien & Lieferzeiten | Weteextees',
        'description':
          'Versand- und Lieferbedingungen für moderne Möbel, Stühle und Tische von Weteextees mit versichertem Transport und Speditionsversand.',
      },
      {
        '@type': 'OfferShippingDetails',
        '@id': 'https://weteextees.com/shipping-policy#shipping-de',
        'shippingDestination': [
          {
            '@type': 'DefinedRegion',
            'addressCountry': 'DE',
          },
          {
            '@type': 'DefinedRegion',
            'addressCountry': 'US',
          },
        ],
        'deliveryTime': {
          '@type': 'ShippingDeliveryTime',
          'handlingTime': {
            '@type': 'QuantitativeValue',
            'minValue': 1,
            'maxValue': 2,
            'unitCode': 'DAY',
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 2,
            'maxValue': 5,
            'unitCode': 'DAY',
          },
        },
      },
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
