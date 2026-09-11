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
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export default function ReturnPolicyClient() {
  const { isGerman } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D1A966]/30 bg-[#1D2E24] px-3.5 py-1.5 text-xs font-semibold text-[#D1A966] mb-3">
            <ShieldCheck className="h-4 w-4" />
            {isGerman ? '30 Tage risikofreie Rückgabe & Google Merchant Konformität' : '30-Day Risk-Free Returns Policy'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2E24] tracking-tight">
            {isGerman ? 'Widerrufsbelehrung & Rückgaberichtlinie' : 'Return & Refund Policy (30 Days)'}
          </h1>
          <p className="text-[#5C6B61] mt-3 text-base sm:text-lg max-w-2xl">
            {isGerman
              ? 'Hier finden Sie alle Informationen zu Ihrem 30-tägigen Rückgaberecht, dem gesetzlichen Widerruf sowie zur unkomplizierten Rückabwicklung bei Weteextees.'
              : 'Find complete information regarding our 30-day return policy, statutory cancellations, and hassle-free refund process at Weteextees.'}
          </p>
        </div>

        {/* Quick Summary Highlights */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#1D2E24] mb-5">
            {isGerman ? 'Rückgaberichtlinien im Überblick' : 'Policy Highlights at a Glance'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RotateCcw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Rückgabefrist' : 'Return Window'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? '30 Kalendertage' : '30 Calendar Days'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Inbox className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Rücksendegebühr' : 'Return Shipping Cost'}
                </span>
                <span className="text-sm font-bold text-[#1D2E24]">
                  {isGerman ? '0,00 € (Kostenlos)' : 'Free ($0.00)'}
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
                  {isGerman ? '0,00 € (Keine Gebühr)' : '$0.00 (Zero Fee)'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <CreditCard className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Erstattungsdauer' : 'Refund Processing'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? '5 Werktage' : '5 Business Days'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <PackageCheck className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Rücksende-Etikett' : 'Return Label'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {isGerman ? 'Im Paket beiliegend (Kostenlos)' : 'In the Box, Free'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RefreshCw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {isGerman ? 'Umtausch' : 'Exchanges'}
                </span>
                <span className="text-sm font-bold text-[#1D2E24]">
                  {isGerman ? 'Kostenlos möglich' : 'Accepted (Free)'}
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
                Wir bei <strong className="text-[#1D2E24]">Weteextees</strong> möchten, dass Sie mit Ihren neuen Möbelstücken und Stühlen rundum zufrieden sind. Sollte ein Modell doch nicht in Ihr Raumkonzept passen, können Sie Ihre Bestellung unkompliziert und kostenlos innerhalb von 30 Tagen retournieren.
              </>
            ) : (
              <>
                At <strong className="text-[#1D2E24]">Weteextees</strong>, your complete satisfaction is our highest priority. If a furniture piece does not fit your space or aesthetic expectations, we provide a smooth, 100% free 30-day return process.
              </>
            )}
          </p>

          {/* Section 1 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '1. Rückgabebedingungen, Umtausch & Widerrufsrecht' : '1. 30-Day Return Window, Exchanges & Statutory Rights'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Wir akzeptieren Rücksendungen sowohl für mangelhafte (defekte) als auch für einwandfreie (nicht defekte) Artikel sowie kostenlosen Umtausch innerhalb von 30 Kalendertagen ab Zustellung:'
                : 'We accept returns for both defective and non-defective products, as well as free exchanges, within 30 calendar days of delivery:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D1A966]" />
                  {isGerman ? 'Kostenloser Rückversand & Umtausch' : '100% Free Returns & Exchanges'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isGerman
                    ? 'Der Rückversand per Post/Spedition ist für Sie 100% kostenlos. Ein Retourenlabel liegt jedem Paket bei oder wird digital bereitgestellt. Ein Umtausch in eine andere Variante ist kostenfrei möglich.'
                    : 'Return shipping by mail or freight carrier is 100% free. A prepaid return label is included in the package or provided digitally. Free exchanges are accepted.'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D1A966]" />
                  {isGerman ? '30 Tage Bedenkzeit & Mängelhaftung' : '30-Day Window (Defective & Non-Defective)'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isGerman
                    ? 'Sie können Artikel im Neuzustand (Originalverpackung) innerhalb von 30 Tagen nach Erhalt retournieren. Bei Transportschäden oder Defekten veranlassen wir sofort kostenlosen Ersatz.'
                    : 'You may return items in new condition (original packaging) within 30 days of receipt. Damaged or defective items receive immediate free replacement.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '2. Voraussetzungen für die Rückgabe (Neuzustand)' : '2. Return Eligibility & Condition (New Only)'}
              </h2>
            </div>
            <p className="font-semibold text-gray-900">
              {isGerman ? 'Für eine vollständige Rückerstattung beachten Sie bitte:' : 'To qualify for a 100% full refund, please ensure:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {isGerman ? (
                <>
                  <li>Die Möbelstücke müssen sich im unbenutzten Originalzustand (Neuware) ohne Gebrauchsspuren befinden.</li>
                  <li>Bitte verpacken Sie die Ware transportsicher in der Originalverpackung mit dem mitgelieferten Kantenschutz.</li>
                  <li>Legen Sie den Lieferschein oder die Bestellnummer bei.</li>
                  <li>Keine eigenmächtigen baulichen Veränderungen oder Reparaturversuche.</li>
                </>
              ) : (
                <>
                  <li>Items must be in new, unused condition with no signs of wear, stains, or assembly damage.</li>
                  <li>Furniture must be packed securely in its original protective packaging with corner padding.</li>
                  <li>Include your packing slip or order confirmation number inside the return shipment.</li>
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
                {isGerman ? '3. Ablauf einer Retoure (Per Post / Spedition)' : '3. How to Initiate a Return (By Mail / Carrier)'}
              </h2>
            </div>
            <p>{isGerman ? 'So melden Sie Ihre Rückgabe schnell und unkompliziert an:' : 'Follow these simple steps to complete your return:'}</p>
            <ol className="list-decimal pl-6 space-y-3">
              {isGerman ? (
                <>
                  <li>
                    <strong>Rücksendeetikett nutzen oder Service kontaktieren</strong>: Nutzen Sie das der Sendung beiliegende kostenlose Rücksendeetikett oder schreiben Sie an <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> / Live-Chat (Mo–Fr 09:00–17:00 Uhr).
                  </li>
                  <li>
                    <strong>Transportsichere Verpackung</strong>: Verpacken Sie das Möbelstück in der Originalverpackung mit Kantenschutz.
                  </li>
                  <li>
                    <strong>Übergabe an Versanddienstleister</strong>: Geben Sie das Paket bei einer Post-/DHL-Filiale ab oder übergeben Sie es bei Speditionsware zum vereinbarten Abholtermin.
                  </li>
                  <li>
                    <strong>Prüfung &amp; Volle Erstattung</strong>: Nach Eingang und kurzer Qualitätsprüfung erstatten wir den vollständigen Rechnungsbetrag innerhalb von 5 Werktagen auf Ihr ursprüngliches Zahlungsmittel.
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <strong>Use Prepaid Label in Package or Request Online</strong>: Use the free return label included inside the package, or contact <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> / Live Chat (Mon–Fri 09:00–17:00).
                  </li>
                  <li>
                    <strong>Secure Packaging</strong>: Repack the furniture piece securely in its original carton with edge protection.
                  </li>
                  <li>
                    <strong>Carrier Handover / Drop-off</strong>: Drop off at the carrier postal point or hand over during scheduled freight pickup.
                  </li>
                  <li>
                    <strong>Inspection &amp; 100% Full Refund</strong>: Once received and inspected at our warehouse, your full refund is processed within 5 business days to your original payment method.
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
                {isGerman ? '4. Gebühren & Wiedereinlagerung' : '4. Restocking Fees & Costs'}
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <p className="font-semibold text-gray-900">
                {isGerman
                  ? 'Wir berechnen 0,00 € Wiedereinlagerungsgebühren (No Cost / 0 %) und 0,00 € Rücksendekosten.'
                  : 'We charge $0.00 restocking fees (No cost / 0%) and $0.00 return shipping fees.'}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {isGerman
                  ? 'Sie erhalten stets eine 100 %ige Rückerstattung Ihres gezahlten Kaufpreises.'
                  : 'You will always receive a 100% full refund of the purchase price paid.'}
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '5. Rückerstattungsdauer (5 Werktage)' : '5. Refund Processing Time (5 Days)'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Rückerstattungen erfolgen automatisch auf das ursprünglich beim Kauf verwendete Zahlungsmittel (Kreditkarte, Stripe, PayPal etc.) innerhalb von 5 Werktagen nach Eingang der Retoure in unserem Warenlager.'
                : 'Refunds are automatically issued to your original payment method (Credit Card, Stripe, PayPal) within 5 business days following receipt and inspection at our fulfillment warehouse.'}
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {isGerman ? '6. Kundenservice & Rücksende-Hubs' : '6. Customer Support & Returns Hubs'}
              </h2>
            </div>
            <p>
              {isGerman
                ? 'Unser Serviceteam hilft Ihnen bei allen Fragen zur Rückabwicklung:'
                : 'Our support team is available Mon–Fri 09:00–17:00 to assist with your return:'}
            </p>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <MessageSquare className="w-5 h-5 text-[#1D2E24]" />
                  <span>{isGerman ? 'Live-Chat' : 'Live Chat'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>{isGerman ? 'Montag bis Freitag, 09:00 – 17:00 Uhr' : 'Monday to Friday, 9:00 AM – 5:00 PM'}</div>
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
                ? 'Ihre Zufriedenheit steht für uns an erster Stelle. Sollten Sie Fragen zu Ihrer Lieferung oder Rückgabe haben, steht Ihnen unser Kundenservice montags bis freitags von 09:00 bis 17:00 Uhr über den Live-Chat zur Verfügung.'
                : 'Your happiness with your home space is our ultimate mission. If you ever have any questions about delivery, assembly, or returns, our team is at your disposal Monday through Friday from 09:00 to 17:00.'}
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
