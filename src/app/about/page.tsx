import React from 'react';
import type { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Über uns | Weteextees',
  description:
    'Learn about Weteextees, your premier destination for modern chairs, solid wood tables, and artisanal home furniture with locations in Germany and the USA.',
  alternates: {
    canonical: 'https://weteextees.com/about',
  },
};

export default function AboutPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://weteextees.com/about#webpage',
        'url': 'https://weteextees.com/about',
        'name': 'About Weteextees',
        'description':
          'Weteextees is your destination for modern chairs, tables, and handcrafted luxury furniture.',
        'mainEntity': {
          '@id': 'https://weteextees.com/#organization',
        },
      },
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'description':
          'Specialist in modern chairs, dining tables, solid wood furniture, and luxury home interiors.',
        'address': [
          {
            '@type': 'PostalAddress',
            'streetAddress': 'Hochalmstraße 10',
            'addressLocality': 'München',
            'addressRegion': 'Bayern',
            'postalCode': '81825',
            'addressCountry': 'DE',
          },
          {
            '@type': 'PostalAddress',
            'streetAddress': '900 AZ-66',
            'addressLocality': 'Peach Springs',
            'addressRegion': 'AZ',
            'postalCode': '86434',
            'addressCountry': 'US',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AboutPageClient />
    </>
  );
}
