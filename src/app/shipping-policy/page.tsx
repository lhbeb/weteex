import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Mail, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Weteextees',
  description:
    'Delivery and handling policy for authentic antiques, modern furniture, and vintage collectibles purchased from Weteextees, including insured transport, protective packaging, and delivery estimates.',
};

const timeline = [
  ['Auftragsbestätigung', 'Unmittelbar nach Zahlungseingang und Überprüfung'],
  ['Vorbereitung & Schutzverpackung', '1–2 Werktage für Qualitätsprüfung und transportsichere Verpackung'],
  ['Übergabe an Fachspedition', 'Versicherter Transport mit lückenloser Sendungsverfolgung'],
  ['Voraussichtliche Lieferzeit', '3–7 Werktage innerhalb Deutschlands und der EU'],
];

const policySections = [
  {
    title: 'Versandkosten & Transportversicherung',
    items: [
      'Der Standardversand für Möbelstücke und Stühle ist kostenlos in ganz Deutschland und der EU',
      'Jede Sendung ist zu 100 % gegen Transportschäden und Verlust versichert',
      'Die Auslieferung erfolgt über renommierte Möbel- und Paketspeditionen',
    ],
  },
  {
    title: 'Sendungsverfolgung & Benachrichtigungen',
    items: [
      'Sie erhalten bei Versand eine E-Mail mit Tracking-Nummer und Link zur Sendungsverfolgung',
      'Bei Speditionslieferungen kündigt der Zusteller den Liefertermin vorab an',
      'Unser Support-Team unterstützt Sie jederzeit bei Fragen zum aktuellen Lieferstatus',
      'Unerwartete witterungsbedingte Verzögerungen werden transparent kommuniziert',
    ],
  },
  {
    title: 'Lieferadresse & Empfang',
    items: [
      'Bitte geben Sie eine vollständige Lieferadresse mit Straße, Hausnummer und Postleitzahl an',
      'Prüfen Sie bei größeren Möbelstücken bitte vorab die Maße von Türen, Fluren und Treppenhäusern',
      'Teilen Sie uns eventuelle Besonderheiten (z.B. Etage, Aufzug) rechtzeitig mit',
      'Die Annahme sollte durch eine volljährige Person erfolgen',
    ],
  },
  {
    title: 'Warenannahme & Schadenskontrolle',
    items: [
      'Unsere Möbel werden in verstärkten Spezialverpackungen geliefert',
      'Bitte prüfen Sie die Verpackung bei Übergabe auf äußere Beschädigungen',
      'Sichtbare Verpackungsschäden bitte direkt auf dem Übergabeschein des Fahrers vermerken',
      'Sollte ein Artikel beschädigt sein, kontaktieren Sie uns bitte innerhalb von 48 Stunden mit Fotos',
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
        'name': 'Versandrichtlinien & Lieferzeiten | Weteextees',
        'description':
          'Versand- und Lieferbedingungen für moderne Möbel, Stühle und Tische von Weteextees mit versichertem Transport und Speditionsversand.',
      },
      {
        '@type': 'OfferShippingDetails',
        '@id': 'https://weteextees.com/shipping-policy#shipping-de',
        'shippingDestination': {
          '@type': 'DefinedRegion',
          'addressCountry': 'DE',
        },
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
            Fachspedition &amp; Möbellogistik
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl text-[#F6F8F5]">
            Versandrichtlinien &amp; Lieferzeiten
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#F6F8F5]/85 sm:text-lg">
            Weteextees organisiert einen zuverlässigen, versicherten Versand und spezialisierte Schutzverpackungen für moderne Stühle, Tische und Möbelstücke.
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <Clock className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">100% Versicherter Versand</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Jede Möbellieferung ist vollständig gegen Transportschäden versichert und verfügt über eine lückenlose Sendungsverfolgung.
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <PackageCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">Schutzverpackung</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Empfindliche Holzoberflächen, Rattan und Polster werden in mehrlagigen Polstern und stabilen Kartonagen geschützt.
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <ShieldCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">Zuverlässiger Service</h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              Unser Kundenservice steht Ihnen während des gesamten Lieferprozesses mit Rat und Tat zur Seite.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1E2621]">Ablauf &amp; Lieferzeiten</h2>
              <p className="mt-2 text-sm text-[#5C6B61]">Die Lieferzeit beträgt in der Regel <strong>3 bis 7 Werktage</strong>. Tracking-Details erhalten Sie per E-Mail nach Versandübergabe.</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-[#D1A966] px-3.5 py-1 text-sm font-bold text-[#142019]">
              Kostenloser Standardversand
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
          <h2 className="text-2xl font-bold text-[#1E2621]">Fragen zum Versand?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5C6B61]">
            Haben Sie Fragen zu Abmessungen, Lieferterminen oder der Sendungsverfolgung? Unser Serviceteam hilft Ihnen gerne:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <MapPin className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">Deutschland &amp; EU</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Mail className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">contact@weteextees.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Clock className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">Mo–Fr, 09:00–17:00 Uhr</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1D2E24] px-5 py-3 text-sm font-semibold text-[#F6F8F5] transition hover:bg-[#142019]"
          >
            Kundenservice kontaktieren
          </Link>
        </section>
      </div>
    </main>
  );
}
