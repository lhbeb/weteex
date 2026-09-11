import type { Metadata } from 'next';
import { STORE_FAQS_DE } from '@/lib/storeFaqs';
import FaqPageClient from '@/components/FaqPageClient';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen (FAQ) | Frequently Asked Questions | Weteextees',
  description:
    'Answers to essential questions regarding insured freight shipping, product quality, payment, and returns at Weteextees.',
  alternates: {
    canonical: 'https://weteextees.com/frequently-asked-questions',
  },
};

export default function FrequentlyAskedQuestionsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: STORE_FAQS_DE.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageClient />
    </>
  );
}
