import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Mail, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Weteextees',
  description:
    'Delivery and handling policy for authentic antiques, modern furniture, and vintage collectibles purchased from Weteextees, including insured transport, protective packaging, and delivery estimates.',
};

const timeline = [
  ['Order confirmation', 'Immediate after cleared payment and verification'],
  ['Item preparation & crating', '1–3 business days for delicate packing and inspection'],
  ['Courier dispatch & tracking', 'Direct tracked delivery with insured couriers'],
  ['Estimated delivery window', '3–7 business days (UK & regional), confirmed in writing'],
];

const policySections = [
  {
    title: 'Delivery Pricing & Insurance',
    items: [
      'Standard shipping rates or free delivery promotions are stated clearly at checkout',
      'All antique furniture and fragile collectibles are fully insured against transit loss or damage',
      'White-glove room-of-choice delivery options may be selected or quoted upon request',
    ],
  },
  {
    title: 'Order Tracking & Notifications',
    items: [
      'A shipping confirmation email with tracking links is provided upon courier collection',
      'Milestone updates and courier delivery window estimates are provided directly',
      'Contact our team anytime to check the status of your specialty shipment',
      'Unexpected weather or transit delays are communicated promptly',
    ],
  },
  {
    title: 'Delivery Access & Receiving',
    items: [
      'The buyer must provide a valid delivery address, contact phone number, and access details',
      'Please check door, hallway, and staircase clearances for large furniture pieces before delivery',
      'Notify us in advance of any building access codes, gate restrictions, or elevator requirements',
      'An adult recipient must be available to sign for high-value antique deliveries',
    ],
  },
  {
    title: 'Delivery Inspection & Care',
    items: [
      'Our items are packed with reinforced museum-grade crating and cushioned wraps',
      'Inspect outer packaging and your item upon arrival before signing courier paperwork',
      'Note any obvious exterior box damage on the driver delivery note immediately',
      'Contact our support team within 48 hours with photos if any damage is discovered',
    ],
  },
];

export default function ShippingPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://weteextees.com/shipping-policy',
        'url': 'https://weteextees.com/shipping-policy',
        'name': 'Shipping & Delivery Policy | Weteextees',
        'description':
          'Weteextees shipping and delivery policy for authentic antiques, modern furniture, and collectibles.',
      },
      {
        '@type': 'OfferShippingDetails',
        '@id': 'https://weteextees.com/shipping-policy#shipping-gb',
        'shippingDestination': {
          '@type': 'DefinedRegion',
          'addressCountry': 'GB',
        },
        'deliveryTime': {
          '@type': 'ShippingDeliveryTime',
          'handlingTime': {
            '@type': 'QuantitativeValue',
            'minValue': 1,
            'maxValue': 3,
            'unitCode': 'DAY',
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 2,
            'maxValue': 7,
            'unitCode': 'DAY',
          },
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F6F8F5] py-12 sm:py-16">
      {/* Schema.org OfferShippingDetails Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto max-w-5xl px-4">
        <section className="mb-10 rounded-2xl bg-gradient-to-r from-[#1D2E24] to-[#142019] px-6 py-8 text-[#F6F8F5] sm:px-8 sm:py-10 shadow-lg border border-[#D1A966]/20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D1A966]/30 bg-[#1D2E24] px-3.5 py-1.5 text-sm font-semibold text-[#D1A966]">
            <Truck className="h-4 w-4" />
            Specialist Antique &amp; Furniture Shipping
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl text-[#F6F8F5]">
            Shipping &amp; Delivery Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#F6F8F5]/85 sm:text-lg">
            Weteextees, operated by Gooba Global LTD (company number 13107870), coordinates insured, white-glove packaging and tracked delivery for our antiques, modern furniture, and one-of-a-kind collectibles.
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <Clock className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">Insured Transit</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Every shipment is fully insured with direct courier milestone tracking from our studio to your door.
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <PackageCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">Museum-Grade Packing</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Fragile antiques, glassware, and fine furniture are cushioned in multi-layer protective crating.
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <ShieldCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">Dedicated Care</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Our specialists coordinate delivery schedules and provide direct customer support throughout transit.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1E2621]">Delivery Timelines</h2>
              <p className="mt-2 text-sm text-[#5C6B61]">Delivery timing varies by <strong>item size, delicate packaging requirements, and destination</strong>. Tracking details are emailed immediately upon dispatch.</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-[#D1A966] px-3.5 py-1 text-sm font-bold text-[#142019]">
              Fully insured transit on every order
            </span>
          </div>

          <div className="mt-6 divide-y divide-gray-100">
            {timeline.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-[#1E2621]">{label}</span>
                <span className="text-sm font-medium text-gray-700 sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {policySections.map((section) => (
            <div key={section.title} className="rounded-xl border border-[#DCE5DE] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1E2621]">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5C6B61]">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1D2E24]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-[#1E2621]">Need Help With Delivery?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5C6B61]">
            If you have questions about furniture dimensions, access clearance, custom packing, or tracking an active order, contact our team:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <MapPin className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">United Kingdom</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Mail className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">contact@weteextees.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Clock className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">Mon-Fri, 9 AM-5 PM GMT/BST</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1D2E24] px-5 py-3 text-sm font-semibold text-[#F6F8F5] transition hover:bg-[#142019]"
          >
            Contact Support
          </Link>
        </section>
      </div>
    </main>
  );
}
