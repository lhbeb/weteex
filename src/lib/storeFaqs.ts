export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS: readonly StoreFaq[] = [
  {
    question: 'What items does Weteextees specialize in?',
    answer:
      'Weteextees is your premier destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces. Every piece is curated for exceptional craftsmanship, historical character, and design integrity.',
  },
  {
    question: 'How do you verify the authenticity and condition of antiques?',
    answer:
      'Each antique and vintage collectible undergoes careful examination by our specialists. Detailed condition reports, provenance notes, era estimations, and high-resolution photographs are provided on every product page.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Select your desired modern furniture piece, antique, or collectible, review dimensions and details, add it to your cart, and proceed through our secure checkout with your preferred payment method.',
  },
  {
    question: 'Where do you ship and how is delicate furniture handled?',
    answer:
      'We provide secure, insured shipping with specialized protective packaging and white-glove delivery options for large or delicate furniture and antique items. Handling times and delivery estimates are outlined in our Shipping Policy.',
    linkHref: '/shipping-policy',
    linkLabel: 'Read our Shipping Policy',
  },
  {
    question: 'How can I track my delivery?',
    answer:
      'As soon as your piece is prepared and dispatched, tracking details and courier milestone updates are sent to your email. You can also monitor delivery on our Track Order page.',
    linkHref: '/track',
    linkLabel: 'Track your order',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Eligible items may be returned within 30 calendar days of delivery in their original condition and packaging. Full terms and instructions are available in our Return & Refund Policy.',
    linkHref: '/return-policy',
    linkLabel: 'Read our Return & Refund Policy',
  },
  {
    question: 'Can I request an exchange or custom sourcing?',
    answer:
      'If you are seeking a specific era, designer chair, or antique collectible, our support team can assist with alternative available inventory or replacement options.',
  },
  {
    question: 'Is local collection available?',
    answer:
      'Local collection is available for select items by prior arrangement only. Please contact us before traveling so our team can prepare your piece.',
    linkHref: '/local-pickup',
    linkLabel: 'View the Local Pickup Guide',
  },
  {
    question: 'Can I modify or cancel an order?',
    answer:
      'Please contact us immediately. We will do our best to accommodate adjustments before your item has been packed and scheduled for courier dispatch.',
  },
  {
    question: 'How can I contact Weteextees specialists?',
    answer:
      'You can reach our team via our 24/7 live chat, contact form, or direct email at contact@weteextees.com.',
    linkHref: '/contact',
    linkLabel: 'Contact our team',
  },
];
