import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Mail, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Machinery Shipping Policy | Weteex / Teextees',
  description:
    'Delivery policy for excavators purchased from Weteex / Teextees, including heavy-equipment transport, site access, unloading, inspection, and delivery estimates.',
};

const timeline = [
  ['Order confirmation', 'After cleared payment and required checks'],
  ['Machine preparation', 'Estimated individually for each excavator'],
  ['Transport scheduling', 'Based on machine size and destination'],
  ['Estimated delivery', 'Confirmed in writing before dispatch'],
];

const policySections = [
  {
    title: 'Delivery Pricing',
    items: [
      'Transport is quoted for each excavator and delivery destination',
      'The quotation states whether delivery is included in the machine price',
      'Special permits, escorts, cranes, or unloading services may cost extra',
    ],
  },
  {
    title: 'Order Tracking',
    items: [
      'Dispatch confirmation is sent when the machine leaves its collection point',
      'Carrier or driver updates are provided when available',
      'Estimated delivery timing is confirmed before dispatch',
      'Delays outside our reasonable control are communicated promptly',
    ],
  },
  {
    title: 'Delivery Site Requirements',
    items: [
      'The buyer must provide an accurate delivery address and contact person',
      'The site must have suitable access, clearance, and ground conditions',
      'The buyer must disclose access restrictions before transport is booked',
      'Safe unloading equipment and personnel must be available if not included',
    ],
  },
  {
    title: 'Delivery Inspection & Safety',
    items: [
      'Suitable specialist transport is used for heavy machinery',
      'Inspect the excavator before signing the delivery document',
      'Record visible transport damage on the delivery document immediately',
      'Contact us promptly with photographs if damage is discovered',
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
        'name': 'Machinery Shipping Policy | Weteex / Teextees',
        'description':
          'Weteex / Teextees delivery policy for excavators and related heavy equipment.',
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
            'maxValue': 10,
            'unitCode': 'DAY',
          },
          'transitTime': {
            '@type': 'QuantitativeValue',
            'minValue': 1,
            'maxValue': 20,
            'unitCode': 'DAY',
          },
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f8fc] py-12 sm:py-16">
      {/* Schema.org OfferShippingDetails Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto max-w-5xl px-4">
        <section className="mb-10 rounded-2xl bg-[#01428a] px-6 py-8 text-[#f1f6fb] sm:px-8 sm:py-10 shadow-lg">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f1f6fb]/10 bg-[#01428a]/25 px-3.5 py-1.5 text-sm font-semibold text-[#d8941a]">
            <Truck className="h-4 w-4" />
            Specialist Excavator Delivery
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Shipping Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#f1f6fb]/80 sm:text-lg">
            Weteex / Teextees, operated by Gooba Global LTD (company number 13107870), coordinates specialist heavy-equipment transport with clear delivery quotations, realistic timing, and site-access requirements confirmed before dispatch.
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#01428a]/10 bg-white p-5 shadow-sm">
            <Clock className="mb-4 h-6 w-6 text-[#01428a]" />
            <h2 className="text-lg font-bold text-[#262626]">Confirmed Scheduling</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Delivery is scheduled after cleared payment, machine preparation, and confirmation that the destination can safely receive the excavator.
            </p>
          </div>
          <div className="rounded-xl border border-[#01428a]/10 bg-white p-5 shadow-sm">
            <PackageCheck className="mb-4 h-6 w-6 text-[#01428a]" />
            <h2 className="text-lg font-bold text-[#262626]">Clear Transport Pricing</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The applicable delivery charge, or confirmation that delivery is included, is provided before your order is finalised.
            </p>
          </div>
          <div className="rounded-xl border border-[#01428a]/10 bg-white p-5 shadow-sm">
            <ShieldCheck className="mb-4 h-6 w-6 text-[#01428a]" />
            <h2 className="text-lg font-bold text-[#262626]">Specialist Transport</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Excavators are moved using transport appropriate to their dimensions, weight, destination, and unloading requirements.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-[#01428a]/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#262626]">Delivery Timelines</h2>
              <p className="mt-2 text-sm text-gray-600">Delivery timing varies by <strong>machine, preparation requirements, destination, permits, and carrier availability</strong>. Your estimated schedule is confirmed in writing before dispatch.</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-[#d8941a] px-3.5 py-1 text-sm font-semibold text-[#01428a]">
              Delivery dates are estimates unless guaranteed in writing
            </span>
          </div>

          <div className="mt-6 divide-y divide-gray-100">
            {timeline.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-[#262626]">{label}</span>
                <span className="text-sm font-medium text-gray-700 sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {policySections.map((section) => (
            <div key={section.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#262626]">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#01428a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-[#01428a]/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-[#262626]">Need Help With Shipping?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
            If you have questions about an excavator delivery, site access, unloading, or an existing transport booking, reach out to our support team:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#f4f8fc] p-4">
              <MapPin className="h-5 w-5 text-[#01428a]" />
              <span className="text-sm font-medium text-[#262626]">United Kingdom</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#f4f8fc] p-4">
              <Mail className="h-5 w-5 text-[#01428a]" />
              <span className="text-sm font-medium text-[#262626]">contact@weteextees.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#f4f8fc] p-4">
              <Clock className="h-5 w-5 text-[#01428a]" />
              <span className="text-sm font-medium text-[#262626]">Mon-Fri, 9 AM-5 PM GMT/BST</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#01428a] px-5 py-3 text-sm font-semibold text-[#f1f6fb] transition hover:bg-[#002b59]"
          >
            Contact Support
          </Link>
        </section>
      </div>
    </main>
  );
}
