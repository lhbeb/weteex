import type { Metadata } from 'next';
import ReturnPolicyClient from '@/components/ReturnPolicyClient';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung & Rückgaberichtlinie | Return Policy | Weteextees',
  description:
    'Information regarding our 30-day return policy, statutory cancellations, and refund process for modern furniture and chairs.',
  alternates: {
    canonical: 'https://weteextees.com/return-policy',
  },
};

export default function ReturnPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'hasMerchantReturnPolicy': {
          '@type': 'MerchantReturnPolicy',
          'name': 'Weteextees Return & Refund Policy',
          'merchantReturnLink': 'https://weteextees.com/return-policy',
          'applicableCountry': ['DE', 'EU', 'US'],
          'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
          'merchantReturnDays': 30,
          'returnMethod': 'https://schema.org/ReturnByMail',
          'returnFees': 'https://schema.org/ReturnFeesCustomerResponsibility',
          'restockingFee': 0,
          'refundType': 'https://schema.org/FullRefund',
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
      <ReturnPolicyClient />
    </>
  );
}
