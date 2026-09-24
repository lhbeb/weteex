import type { Metadata } from 'next';
import ReturnPolicyClient from '@/components/ReturnPolicyClient';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung & Rückgaberichtlinie | Weteextees Deutschland',
  description:
    '30 Tage Rückgaberecht für alle Möbel. Kostenlose Rücksendung, keine Wiedereinlagerungsgebühr, volle Rückerstattung. Widerrufsrecht gemäß § 355 BGB für Bestellungen in Deutschland und der EU.',
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
        'legalName': 'Furniture Network GmbH',
        'url': 'https://weteextees.com',
        'hasMerchantReturnPolicy': {
          '@type': 'MerchantReturnPolicy',
          'name': 'Weteextees Return & Refund Policy',
          'merchantReturnLink': 'https://weteextees.com/return-policy',
          'applicableCountry': 'DE',
          'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
          'merchantReturnDays': 30,
          'returnMethod': 'https://schema.org/ReturnByMail',
          'returnFees': 'https://schema.org/FreeReturn',
          'returnLabelSource': 'https://schema.org/ReturnLabelInTheBox',
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
