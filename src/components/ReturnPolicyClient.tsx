"use client";

import React from 'react';
import Link from 'next/link';
import {
  RotateCcw,
  RefreshCw,
  Clock,
  CreditCard,
  Building2,
  Mail,
  MessageSquare,
  PackageCheck,
  HelpCircle,
  Banknote,
  Inbox,
} from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export default function ReturnPolicyClient() {
  const { isGerman } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2E24] tracking-tight">
            {isGerman ? 'Widerrufsbelehrung & Rückgaberichtlinie' : 'Return & Refund Policy (30 Days)'}
          </h1>
          <p className="text-[#5C6B61] mt-3 text-base sm:text-lg max-w-2xl">
            {isGerman
              ? 'Hier finden Sie alle Informationen zu Ihrem 30-tägigen Rückgaberecht, dem gesetzlichen Widerruf sowie zur unkomplizierten Rückabwicklung bei Weteextees.'
              : 'Find complete information regarding our 30-day return policy, statutory cancellations, and hassle-free refund process at Weteextees.'}
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#1D2E24] mb-5">
            {isGerman ? 'Überblick auf einen Blick' : 'Policy Highlights at a Glance'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RotateCcw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Rückgabefrist' : 'Return Window'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? '30 Tage Rückgaberecht' : '30 Calendar Days'}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RefreshCw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Umtausch' : 'Exchanges'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? 'Nach Verfügbarkeit' : 'Subject to stock'}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Clock className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Widerrufsfrist' : 'Statutory Period'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? '14 Tage gesetzlich' : '14 Days Minimum'}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Inbox className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Rücksendemethode' : 'Return Method'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? 'Spedition / Paket' : 'Freight Pickup / Mail'}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Banknote className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Wiedereinlagerung' : 'Restocking Fee'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? '0 € Gebühren' : '$0.00 (Free)'}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <CreditCard className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Erstattungsdauer' : 'Refund Timing'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? 'Innerhalb 5–14 Tagen' : 'Within 5–10 Days'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Policy Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-10 space-y-10 text-gray-700">
          <p className="text-lg leading-relaxed text-gray-800">
            {isGerman ? (
              <>
                Wir bei <strong className="text-[#1D2E24]">Weteextees</strong> möchten, dass Sie mit Ihren neuen Möbelstücken rundum zufrieden sind. Sollte ein Modell doch nicht in Ihr Raumkonzept passen, können Sie Ihre Bestellung unkompliziert retournieren.
              </>
            ) : (
              <>
                At <strong className="text-[#1D2E24]">Weteextees</strong>, your complete satisfaction is our highest priority. If a furniture piece does not fit your room layout or aesthetic expectations, we provide a smooth 30-day return process.
              </>
            )}
          </p>

          {/* Section 1 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '1. Rückgabebedingungen & Widerrufsrecht' : '1. 30-Day Return Guarantee & Statutory Cancellation'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Verbrauchern steht ein gesetzliches Widerrufsrecht von 14 Tagen zu, das wir freiwillig auf insgesamt 30 Tage erweitern:'
                : 'We provide an extended 30-day satisfaction guarantee across all purchases:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">
                  {isGerman ? 'Transportschaden oder Abweichung' : 'Transit Damage or Defect'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isGerman
                    ? 'Sollte ein Artikel beschädigt geliefert werden oder ein Defekt vorliegen, organisieren wir die kostenlose Abholung und erstatten den vollen Kaufpreis oder liefern Ersatz.'
                    : 'If an item arrives damaged or defective, we coordinate a complimentary freight pickup and provide a prompt replacement or 100% full refund.'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">
                  {isGerman ? '30 Tage Rückgaberecht' : '30-Day Change of Mind'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isGerman
                    ? 'Sie können unbenutzte Artikel im Originalzustand innerhalb von 30 Tagen nach Erhalt an uns zurücksenden.'
                    : 'You may return any unused furniture item in its original packaging and condition within 30 days of delivery.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '2. Voraussetzungen für die Rückgabe' : '2. Return Eligibility & Condition'}
              </h2>
            </div>
            <p className="font-semibold text-gray-900">
              {isGerman ? 'Für eine reibungslose Rückerstattung beachten Sie bitte:' : 'To qualify for a full refund, please ensure:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {isGerman ? (
                <>
                  <li>Die Möbelstücke müssen sich im Originalzustand ohne Gebrauchsspuren befinden.</li>
                  <li>Bitte verpacken Sie die Ware transportsicher, idealerweise in der Originalverpackung mit Kantenschutz.</li>
                  <li>Legen Sie den Lieferschein oder die Bestellnummer bei.</li>
                  <li>Keine nachträglichen Modifikationen oder Eigenreparaturen an den Artikeln.</li>
                </>
              ) : (
                <>
                  <li>Items must be in new, unused condition with no signs of wear, stains, or assembly damage.</li>
                  <li>Furniture must be packed securely in its original protective packaging with corner padding.</li>
                  <li>Include your packing slip or order number inside the return shipment.</li>
                  <li>No unauthorized structural modifications or third-party repairs.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '3. Ablauf einer Retoure' : '3. How to Initiate a Return'}
              </h2>
            </div>
            <p>{isGerman ? 'So melden Sie Ihre Rückgabe schnell und unkompliziert an:' : 'Follow these simple steps:'}</p>
            <ol className="list-decimal pl-6 space-y-3">
              {isGerman ? (
                <>
                  <li>
                    <strong>Kundenservice kontaktieren</strong>: Schreiben Sie uns an <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> oder nutzen Sie unseren <span className="font-semibold">24/7 Live-Chat</span>.
                  </li>
                  <li>
                    <strong>Rücksendeanweisungen erhalten</strong>: Wir stellen Ihnen das Retourenetikett oder die Speditionsabholung zur Verfügung.
                  </li>
                  <li>
                    <strong>Sichere Verpackung &amp; Übergabe</strong>: Übergeben Sie das Paket an den Transporteur oder halten Sie die Möbel für die Spedition bereit.
                  </li>
                  <li>
                    <strong>Prüfung &amp; Erstattung</strong>: Nach Eingang und kurzer Qualitätsprüfung erstatten wir den Betrag unverzüglich.
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <strong>Contact Support</strong>: Email <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> or message our <span className="font-semibold">24/7 Live Chat</span> with your order number.
                  </li>
                  <li>
                    <strong>Receive Return Authorization &amp; Label</strong>: We will generate your prepaid return label or arrange freight pickup appointment.
                  </li>
                  <li>
                    <strong>Package &amp; Handover</strong>: Hand over the parcel to the carrier or prepare the pallet for freight carrier pickup.
                  </li>
                  <li>
                    <strong>Inspection &amp; Refund</strong>: Upon arrival at our hub and inspection, your refund is issued immediately.
                  </li>
                </>
              )}
            </ol>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '4. Gebühren & Wiedereinlagerung' : '4. Restocking Fees'}
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <p className="font-medium text-gray-800">
                {isGerman
                  ? 'Wir berechnen keine Wiedereinlagerungsgebühren (Restocking Fee: 0 €).'
                  : 'We charge zero restocking fees (Restocking Fee: $0.00).'}
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '5. Rückerstattung des Kaufpreises' : '5. Refund Processing Time'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Erstattungen erfolgen automatisch auf das ursprünglich verwendete Zahlungsmittel (Kreditkarte, Stripe, PayPal etc.) innerhalb von 5–14 Werktagen nach Wareneingang.'
                : 'Refunds are automatically issued to your original payment method (Credit Card, Stripe, PayPal) within 5–10 business days following hub inspection.'}
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '6. Kundenservice & Rückfragen' : '6. Customer Support & Returns Hubs'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Unser Serviceteam hilft Ihnen bei allen Fragen zur Rückabwicklung:'
                : 'Our support team is on standby 24/7 to assist with your return:'}
            </p>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <MessageSquare className="w-5 h-5 text-[#1D2E24]" />
                  <span>{isGerman ? 'Live-Chat' : 'Live Chat'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>{isGerman ? '24/7 Online-Sofort-Hilfe' : '24/7 Instant Live Support'}</div>
                </div>

                <div className="flex items-center gap-2 font-bold text-[#1D2E24] pt-2">
                  <Mail className="w-5 h-5 text-[#1D2E24]" />
                  <span>{isGerman ? 'E-Mail' : 'Email'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <Building2 className="w-5 h-5 text-[#1D2E24]" />
                  <span>{isGerman ? 'Standorte & Rücksende-Hubs' : 'Locations & Returns Hubs'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-2">
                  <div>
                    <strong className="text-gray-900 block">🇩🇪 Deutschland / EU:</strong>
                    Hochalmstraße 10, 81825 München, Bayern, Deutschland
                  </div>
                  <div>
                    <strong className="text-gray-900 block">🇺🇸 USA &amp; International:</strong>
                    900 AZ-66, Peach Springs, AZ 86434, United States
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Footer */}
          <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] p-6 sm:p-8 rounded-xl shadow-md mt-8 border border-[#D1A966]/20">
            <h3 className="text-xl font-bold mb-2 text-[#D1A966]">
              {isGerman ? 'Unser Qualitätsversprechen' : 'Our Quality & Satisfaction Promise'}
            </h3>
            <p className="text-sm sm:text-base text-[#F6F8F5]/85 leading-relaxed">
              {isGerman
                ? 'Ihre Zufriedenheit steht für uns an erster Stelle. Sollten Sie Fragen zu Ihrer Lieferung oder Rückgabe haben, steht Ihnen unser Kundenservice 24/7 über den Live-Chat zur Verfügung.'
                : 'Your happiness with your home space is our ultimate mission. If you ever have any questions about delivery, assembly, or returns, our team is at your disposal 24/7.'}
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#F6F8F5]/70">
                {isGerman ? 'Haben Sie Fragen zu einem Artikel?' : 'Have questions about a piece?'}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D1A966] text-[#142019] font-bold text-sm hover:bg-[#DEBC80] transition-colors"
              >
                {isGerman ? 'Kontakt aufnehmen' : 'Contact Support'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
