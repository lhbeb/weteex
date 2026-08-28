"use client";

import React from 'react';
import Link from 'next/link';
import { Clock, Mail, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export default function ShippingPolicyClient() {
  const { isGerman } = useLocale();

  const timeline = isGerman ? [
    ['Auftragsbestätigung', 'Unmittelbar nach Zahlungseingang und Prüfung'],
    ['Vorbereitung & Schutzverpackung', '1–2 Werktage für Qualitätsprüfung und transportsichere Verpackung'],
    ['Übergabe an Fachspedition', 'Versicherter Transport mit lückenloser Sendungsverfolgung'],
    ['Voraussichtliche Lieferzeit', '2–5 Werktage nach Versandfreigabe'],
  ] : [
    ['Order Confirmation', 'Immediately upon successful payment and verification'],
    ['Inspection & Protective Packaging', '1–2 business days for quality control and heavy-duty padding'],
    ['Carrier Dispatch', 'Insured freight transport with end-to-end live tracking'],
    ['Estimated Delivery Window', '2–5 business days following dispatch'],
  ];

  const policySections = isGerman ? [
    {
      title: 'Versandkosten & Transportversicherung',
      items: [
        'Kostenloser Standard- und Speditionsversand nach Deutschland, in die EU und die USA',
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
  ] : [
    {
      title: 'Free Shipping & 100% Transit Insurance',
      items: [
        'Free insured freight delivery to the United States, Germany, EU, and international destinations',
        'Every shipment is 100% fully insured against loss, theft, or in-transit damage',
        'Delivered via premier logistics carriers specialized in delicate furniture handling',
      ],
    },
    {
      title: 'Live Tracking & Delivery Notifications',
      items: [
        'You will receive an automated dispatch email with your carrier tracking number upon pickup',
        'Real-time shipment milestones are viewable on our Track Order portal anytime',
        'Carriers provide delivery appointment notifications prior to final arrival',
        'Transparent 24/7 status assistance from our customer care team',
      ],
    },
    {
      title: 'Delivery Address & Access Requirements',
      items: [
        'Please provide an accurate street address (including apartment, suite, or gate codes)',
        'Ensure that hallways, entry doors, and elevators accommodate your furniture dimensions',
        'Notify us ahead of time if specific freight delivery instructions or liftgates are needed',
        'A signature by an adult recipient may be requested upon final delivery',
      ],
    },
    {
      title: 'Receiving & Quality Inspection',
      items: [
        'Our furniture pieces arrive packaged with multi-layered shock absorption and reinforced corners',
        'Please perform a visual check of outer cartons upon delivery driver handover',
        'In the rare event of visible package distress, note it on the carrier receipt',
        'Should an item be damaged, contact our 24/7 support within 48 hours with photos for a prompt replacement',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F8F5] py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <section className="mb-10 rounded-2xl bg-gradient-to-r from-[#1D2E24] to-[#142019] px-6 py-8 text-[#F6F8F5] sm:px-8 sm:py-10 shadow-lg border border-[#D1A966]/20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D1A966]/30 bg-[#1D2E24] px-3.5 py-1.5 text-sm font-semibold text-[#D1A966]">
            <Truck className="h-4 w-4" />
            {isGerman ? 'Fachspedition & Möbellogistik' : 'Specialized Freight Logistics'}
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl text-[#F6F8F5]">
            {isGerman ? 'Versandrichtlinien & Lieferzeiten' : 'Shipping Policy & Delivery Estimates'}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#F6F8F5]/85 sm:text-lg">
            {isGerman
              ? 'Weteextees organisiert einen zuverlässigen, versicherten Versand und spezialisierte Schutzverpackungen für moderne Stühle, Tische und Möbelstücke.'
              : 'Weteextees ensures reliable, 100% insured freight shipping and reinforced packaging for modern chairs, solid wood tables, and designer furniture.'}
          </p>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <Clock className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? '100% Versicherter Versand' : '100% Insured Delivery'}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Jede Möbellieferung ist vollständig gegen Transportschäden versichert und verfügt über eine lückenlose Sendungsverfolgung.'
                : 'Every furniture piece is fully covered against transit damages with real-time tracking.'}
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <PackageCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? 'Schutzverpackung' : 'Heavy-Duty Packaging'}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Empfindliche Holzoberflächen, Rattan und Polster werden in mehrlagigen Polstern und stabilen Kartonagen geschützt.'
                : 'Delicate woods, natural rattan, and stone surfaces are packed in multi-layer reinforced cartons.'}
            </p>
          </div>
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-5 shadow-sm">
            <ShieldCheck className="mb-4 h-6 w-6 text-[#1D2E24]" />
            <h2 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? 'Zuverlässiger Service' : '24/7 Support & Care'}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Unser Kundenservice steht Ihnen während des gesamten Lieferprozesses mit Rat und Tat zur Seite.'
                : 'Our customer support team assists you across every step of your shipment from dispatch to delivery.'}
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1E2621]">
                {isGerman ? 'Ablauf & Lieferzeiten' : 'Timeline & Delivery Speeds'}
              </h2>
              <p className="mt-2 text-sm text-[#5C6B61]">
                {isGerman
                  ? 'Die Lieferzeit beträgt in der Regel 2 bis 5 Werktage. Tracking-Details erhalten Sie per E-Mail nach Versandübergabe.'
                  : 'Average transit time is 2 to 5 business days. Tracking credentials are sent by email upon carrier handover.'}
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-[#D1A966] px-3.5 py-1 text-sm font-bold text-[#142019]">
              {isGerman ? 'Kostenloser Standardversand' : 'Free Insured Shipping'}
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
          <h2 className="text-2xl font-bold text-[#1E2621]">
            {isGerman ? 'Fragen zum Versand?' : 'Questions About Your Delivery?'}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5C6B61]">
            {isGerman
              ? 'Haben Sie Fragen zu Abmessungen, Lieferterminen oder der Sendungsverfolgung? Unser Serviceteam hilft Ihnen gerne:'
              : 'Have questions about sizing, delivery schedules, or tracking status? Our customer service team is ready to help:'}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <MapPin className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">
                {isGerman ? 'Deutschland, EU & USA' : 'United States, Germany & EU'}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Mail className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">contact@weteextees.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Clock className="h-5 w-5 text-[#1D2E24]" />
              <span className="text-sm font-medium text-[#1E2621]">
                {isGerman ? '24/7 Live-Chat verfügbar' : '24/7 Live Chat Support'}
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1D2E24] px-5 py-3 text-sm font-semibold text-[#F6F8F5] transition hover:bg-[#142019]"
          >
            {isGerman ? 'Kundenservice kontaktieren' : 'Contact Customer Support'}
          </Link>
        </section>
      </div>
    </main>
  );
}
