export interface StoreFaq {
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export const STORE_FAQS: readonly StoreFaq[] = [
  {
    question: 'What machinery does Weteex / Teextees mainly sell?',
    answer:
      'Weteex / Teextees mainly sells AGT mini excavators, compact and 1-ton excavators, and excavator attachments. Available machines may include RATO or Kubota engine options, pilot controls, enclosed cabs, air conditioning, side swing, hydraulic thumbs, and other configurations. Each listing states exactly what is included.',
  },
  {
    question: 'Are your excavators new or pre-owned?',
    answer:
      'Machine condition varies by listing. The stated condition, model information, configuration, and available operating details are shown on the excavator page for review before ordering.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Choose an excavator, review its engine and operator configuration, add it to your cart, and continue to checkout. Confirm the machine, delivery address, total price, and payment instructions before completing your order.',
  },
  {
    question: 'Where do you ship and how long does delivery take?',
    answer:
      'Current shipping destinations, handling times, carriers, and estimated delivery windows are listed in our Shipping Policy. Tracking is provided after an eligible order is dispatched.',
    linkHref: '/shipping-policy',
    linkLabel: 'Read our Shipping Policy',
  },
  {
    question: 'How can I track my order?',
    answer:
      'When your order ships, we send tracking information to the email address used during checkout. You can also use our Track Order page for updates.',
    linkHref: '/track',
    linkLabel: 'Track your order',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Eligible items may be returned within 30 calendar days of delivery. Return eligibility, required condition, postage responsibility, refund timing, and step-by-step instructions are explained in our Return & Exchange Policy.',
    linkHref: '/return-policy',
    linkLabel: 'Read our Return & Exchange Policy',
  },
  {
    question: 'Can I exchange an item?',
    answer:
      'Exchanges may be available for eligible excavators when suitable replacement inventory exists. Contact our support team before operating, transporting, or returning a machine.',
  },
  {
    question: 'Is local pickup available?',
    answer:
      'Collection is available only for eligible excavators and must be arranged with our team in advance. Never travel to a collection location until you receive written confirmation.',
    linkHref: '/local-pickup',
    linkLabel: 'View the Local Pickup Guide',
  },
  {
    question: 'Can I change or cancel an order?',
    answer:
      'Contact us as soon as possible. We will try to help before fulfillment begins, but changes or cancellations cannot be guaranteed after an order has entered processing or shipped.',
  },
  {
    question: 'How can I contact Weteex / Teextees?',
    answer:
      'You can use our contact form, email contact@weteextees.com, or call +44 7533 408378 during published support hours.',
    linkHref: '/contact',
    linkLabel: 'Contact our team',
  },
];
