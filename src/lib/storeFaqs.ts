export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS_EN: readonly StoreFaq[] = [
  {
    question: 'What furniture does Weteextees specialize in?',
    answer:
      'Weteextees is your premier destination for handcrafted modern dining chairs, natural rattan and solid wood furniture, designer dining tables, and timeless home accents. Each piece is crafted from premium materials for enduring quality.',
  },
  {
    question: 'How do you ensure premium quality and craftsmanship?',
    answer:
      'Every piece undergoes rigorous inspection before dispatch. Comprehensive dimensions, wood varieties, upholstery fabrics, and care instructions are detailed directly on each product page.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Select your desired furniture piece, verify specifications and sizing, and add it to your shopping cart. Follow the streamlined, SSL-encrypted checkout to complete your purchase securely.',
  },
  {
    question: 'Where do you ship, and how is delicate furniture handled?',
    answer:
      'We provide free insured shipping within the United States. Heavy or fragile items are securely packed with reinforced edge protection and transported by experienced logistics partners.',
    linkHref: '/shipping-policy',
    linkLabel: 'View Shipping Policy',
  },
  {
    question: 'How can I track my order delivery?',
    answer:
      'Once your order has been dispatched with our freight carriers, you will receive an email confirmation with your real-time tracking number. You can also monitor your shipment anytime on our Order Tracking page.',
    linkHref: '/track',
    linkLabel: 'Track Shipment',
  },
  {
    question: 'What is your return and refund policy?',
    answer:
      'You can return unused items in their original packaging within 30 calendar days of delivery. For full instructions, please consult our Returns & Refunds Policy page.',
    linkHref: '/return-policy',
    linkLabel: 'View Returns Policy',
  },
  {
    question: 'Can I modify or cancel my order after placing it?',
    answer:
      'Please reach out immediately via our Mo-Fr 09:00-17:00 Live Chat or email. As long as your order has not been picked and handed over to the freight carrier, we will gladly adjust it for you.',
  },
  {
    question: 'How do I reach Weteextees customer support?',
    answer:
      'Our dedicated customer care team is available Mo-Fr 09:00-17:00 via the instant Live Chat on our website or by email at contact@weteextees.com.',
    linkHref: '/contact',
    linkLabel: 'Contact Customer Support',
  },
];

export const STORE_FAQS = STORE_FAQS_EN;

export function getStoreFaqs(): readonly StoreFaq[] {
  return STORE_FAQS_EN;
}
