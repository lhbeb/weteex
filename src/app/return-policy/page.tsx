import type { Metadata } from 'next';
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
  FileText,
  HelpCircle,
  Banknote,
  Inbox,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung & Rückgaberichtlinie | Weteextees',
  description:
    'Informationen zum gesetzlichen Widerrufsrecht, Rückgabe und Erstattungsrichtlinien für moderne Möbel, Stühle und Tische von Weteextees.',
};

export default function ReturnPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'hasMerchantReturnPolicy': {
          '@type': 'MerchantReturnPolicy',
          'name': 'Weteextees Widerrufsbelehrung & Rückgaberichtlinie',
          'merchantReturnLink': 'https://weteextees.com/return-policy',
          'applicableCountry': ['DE', 'EU'],
          'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
          'merchantReturnDays': 30,
          'returnMethod': 'https://schema.org/ReturnByMail',
          'returnFees': 'https://schema.org/ReturnFeesCustomerResponsibility',
          'restockingFee': 0,
          'refundType': 'https://schema.org/FullRefund',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2E24] tracking-tight">
            Widerrufsbelehrung &amp; Rückgaberichtlinie
          </h1>
          <p className="text-[#5C6B61] mt-3 text-base sm:text-lg max-w-2xl">
            Hier finden Sie alle Informationen zu Ihrem 30-tägigen Rückgaberecht, dem gesetzlichen Widerruf sowie zur unkomplizierten Rückabwicklung bei Weteextees.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#1D2E24] mb-5">Überblick auf einen Blick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RotateCcw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Rückgabefrist</span>
                <span className="text-sm font-bold text-gray-900">30 Tage Rückgaberecht</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RefreshCw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Umtausch</span>
                <span className="text-sm font-bold text-gray-900">Nach Verfügbarkeit</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Clock className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Widerrufsfrist</span>
                <span className="text-sm font-bold text-gray-900">14 Tage gesetzlich</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Inbox className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Rücksendemethode</span>
                <span className="text-sm font-bold text-gray-900">Spedition / Paket</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Banknote className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Wiedereinlagerung</span>
                <span className="text-sm font-bold text-gray-900">0 € Gebühren</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <CreditCard className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Erstattungsdauer</span>
                <span className="text-sm font-bold text-gray-900">Innerhalb 5–14 Tagen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Policy Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-10 space-y-10 text-gray-700">

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-800">
            Wir bei <strong className="text-[#1D2E24]">Weteextees</strong> möchten, dass Sie mit Ihren neuen Möbelstücken rundum zufrieden sind. Sollte ein Modell doch nicht in Ihr Raumkonzept passen, können Sie Ihre Bestellung unkompliziert retournieren.
          </p>

          {/* 1. Returns */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">1. Rückgabebedingungen &amp; Widerrufsrecht</h2>
            </div>
            <p>Verbrauchern steht ein gesetzliches Widerrufsrecht von 14 Tagen zu, das wir freiwillig auf insgesamt 30 Tage erweitern:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">Transportschaden oder Abweichung</h3>
                <p className="text-sm text-gray-700">
                  Sollte ein Artikel beschädigt geliefert werden oder ein Defekt vorliegen, organisieren wir die kostenlose Abholung und erstatten den vollen Kaufpreis oder liefern Ersatz.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">30 Tage Rückgaberecht</h3>
                <p className="text-sm text-gray-700">
                  Sie können unbenutzte Artikel im Originalzustand innerhalb von 30 Tagen nach Erhalt an uns zurücksenden.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Return Window & Conditions */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">2. Voraussetzungen für die Rückgabe</h2>
            </div>
            <p className="font-semibold text-gray-900">Für eine reibungslose Rückerstattung beachten Sie bitte:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Die Möbelstücke müssen sich im Originalzustand ohne Gebrauchsspuren befinden.</li>
              <li>Bitte verpacken Sie die Ware transportsicher, idealerweise in der Originalverpackung mit Kantenschutz.</li>
              <li>Legen Sie den Lieferschein oder die Bestellnummer bei.</li>
              <li>Keine nachträglichen Modifikationen oder Eigenreparaturen an den Artikeln.</li>
            </ul>
          </div>

          {/* 4. How to Return */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">3. Ablauf einer Retoure</h2>
            </div>
            <p>So melden Sie Ihre Rückgabe schnell und unkompliziert an:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Kundenservice kontaktieren</strong>: Schreiben Sie uns an <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> oder nutzen Sie unseren <span className="font-semibold">24/7 Live-Chat</span>.
              </li>
              <li>
                <strong>Rücksendeanweisungen erhalten</strong>: Wir stellen Ihnen das Retourenetikett oder die Abholvereinbarung zur Verfügung.
              </li>
              <li>
                <strong>Sichere Verpackung &amp; Versand</strong>: Übergeben Sie das Paket an den Paketdienst oder halten Sie die Möbel für die Spedition bereit.
              </li>
              <li>
                <strong>Prüfung &amp; Erstattung</strong>: Nach Eingang und kurzer Qualitätsprüfung erstatten wir den Betrag unverzüglich.
              </li>
            </ol>
          </div>

          {/* 5. Restocking Fee */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">4. Gebühren &amp; Wiedereinlagerung</h2>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <p className="font-medium text-gray-800">
                Wir berechnen <strong>keine</strong> Wiedereinlagerungsgebühren (Restocking Fee: 0 €).
              </p>
            </div>
          </div>

          {/* 6. Refund Processing */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">5. Rückerstattung des Kaufpreises</h2>
            </div>
            <p>Erstattungen erfolgen automatisch auf das ursprünglich verwendete Zahlungsmittel (Kreditkarte, Stripe, PayPal etc.) innerhalb von 5–14 Werktagen nach Wareneingang.</p>
          </div>

          {/* 7. Need Help */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">6. Kundenservice &amp; Rückfragen</h2>
            </div>
            <p>Unser Serviceteam hilft Ihnen bei allen Fragen zur Rückabwicklung:</p>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <MessageSquare className="w-5 h-5 text-[#1D2E24]" />
                  <span>Live-Chat</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>24/7 Online-Sofort-Hilfe</div>
                </div>

                <div className="flex items-center gap-2 font-bold text-[#1D2E24] pt-2">
                  <Mail className="w-5 h-5 text-[#1D2E24]" />
                  <span>E-Mail</span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <Building2 className="w-5 h-5 text-[#1D2E24]" />
                  <span>Geschäftsanschrift</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-2">
                  <div>
                    <strong className="text-gray-900 block">Weteextees</strong>
                    Hochalmstraße 10, 81825 München, Bayern, Deutschland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Footer */}
          <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] p-6 sm:p-8 rounded-xl shadow-md mt-8 border border-[#D1A966]/20">
            <h3 className="text-xl font-bold mb-2 text-[#D1A966]">Unser Qualitätsversprechen</h3>
            <p className="text-sm sm:text-base text-[#F6F8F5]/85 leading-relaxed">
              Ihre Zufriedenheit steht für uns an erster Stelle. Sollten Sie Fragen zu Ihrer Lieferung oder Rückgabe haben, steht Ihnen unser Kundenservice 24/7 über den Live-Chat zur Verfügung.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#F6F8F5]/70">Haben Sie Fragen zu einem Artikel?</span>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D1A966] text-[#142019] font-bold text-sm hover:bg-[#DEBC80] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
