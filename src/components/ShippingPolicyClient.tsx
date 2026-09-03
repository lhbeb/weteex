"use client";

import React from 'react';
import Link from 'next/link';
import {
  Clock,
  Mail,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Building2,
  CheckCircle2,
  Globe,
  RefreshCw,
} from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export default function ShippingPolicyClient() {
  const { isGerman } = useLocale();

  const destinationTable = [
    {
      country: isGerman ? 'Deutschland (DE)' : 'Germany (DE)',
      flag: '🇩🇪',
      carrier: isGerman ? 'DHL Spedition / Möbel-Fachspedition' : 'DHL Freight / Specialized Logistics',
      cost: isGerman ? '0,00 € (Kostenlos)' : '€0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
    {
      country: isGerman ? 'Vereinigte Staaten (US)' : 'United States (US)',
      flag: '🇺🇸',
      carrier: isGerman ? 'FedEx Freight / UPS Ground Freight' : 'FedEx Freight / UPS Ground Freight',
      cost: isGerman ? '0,00 $ (Kostenlos)' : '$0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
    {
      country: isGerman ? 'Österreich (AT)' : 'Austria (AT)',
      flag: '🇦🇹',
      carrier: isGerman ? 'DHL Freight / Post AT' : 'DHL Freight / Post AT',
      cost: isGerman ? '0,00 € (Kostenlos)' : '€0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
    {
      country: isGerman ? 'Frankreich (FR)' : 'France (FR)',
      flag: '🇫🇷',
      carrier: isGerman ? 'Geodis / DHL Spedition' : 'Geodis / DHL Freight',
      cost: isGerman ? '0,00 € (Kostenlos)' : '€0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
    {
      country: isGerman ? 'Niederlande & Belgien (NL/BE)' : 'Netherlands & Belgium (NL/BE)',
      flag: '🇳🇱',
      carrier: isGerman ? 'PostNL Freight / DHL' : 'PostNL Freight / DHL',
      cost: isGerman ? '0,00 € (Kostenlos)' : '€0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
    {
      country: isGerman ? 'Italien & Spanien (IT/ES)' : 'Italy & Spain (IT/ES)',
      flag: '🇮🇹',
      carrier: isGerman ? 'BRT Spedition / SEUR Freight' : 'BRT / SEUR Freight',
      cost: isGerman ? '0,00 € (Kostenlos)' : '€0.00 (Free)',
      handling: isGerman ? '0–1 Werktage' : '0–1 Business Days',
      transit: isGerman ? '5–9 Werktage' : '5–9 Business Days',
      total: isGerman ? '5–10 Werktage' : '5–10 Business Days',
    },
  ];

  const warehouses = [
    {
      name: isGerman ? 'warehouse DE (Deutschland & EU)' : 'warehouse DE (Germany & EU Fulfillment)',
      address: 'Hochalmstraße 10, 81825 München, Bavaria, Germany',
      countryCode: 'DE',
      flag: '🇩🇪',
    },
    {
      name: isGerman ? 'US Warehouse (Vereinigte Staaten)' : 'US Warehouse (United States Fulfillment)',
      address: '900 AZ-66, Peach Springs, Arizona 86434, United States',
      countryCode: 'US',
      flag: '🇺🇸',
    },
  ];

  const timelineSteps = isGerman
    ? [
        {
          step: '01',
          title: 'Bestellung & Annahmeschluss',
          time: 'Bis 23:00 Uhr (Mo–Fr)',
          description:
            'Bestellungen, die montags bis freitags vor 23:00 Uhr (MEZ / Berlin) eingehen, werden noch am selben Tag für die Kommissionierung freigegeben.',
        },
        {
          step: '02',
          title: 'Prüfung & Schutzverpackung',
          time: '0–1 Werktage Bearbeitung',
          description:
            'Jedes Möbelstück wird auf Maßhaltigkeit und Finish geprüft. Empfindliche Oberflächen und Kanten werden mit mehrlagigen Dämpfungsmaterialien und verstärkten Eckschonern transportsicher verpackt.',
        },
        {
          step: '03',
          title: 'Übergabe an Spedition & Tracking',
          time: 'Versandbestätigung & Live-Tracking',
          description:
            'Nach Übergabe an den Logistikpartner (DHL Freight, FedEx, UPS) erhalten Sie sofort eine automatisierte E-Mail mit Ihrer Sendungsverfolgungsnummer und dem Tracking-Link.',
        },
        {
          step: '04',
          title: 'Transport & Zustellung',
          time: '5–9 Werktage Regellaufzeit (5–10 Tage Gesamt)',
          description:
            'Der Transport erfolgt 100% versichert direkt an die Lieferadresse des Kunden. Bei Speditionssendungen kündigt der Zusteller das Lieferfenster vorab per E-Mail oder telefonisch an.',
        },
      ]
    : [
        {
          step: '01',
          title: 'Order Placement & Cutoff',
          time: '11:00 PM (DE/EU) / 2:00 PM (US)',
          description:
            'Orders placed Monday through Friday before 11:00 PM (CET / Berlin) or 2:00 PM (EST / US) are verified and processed on the same business day.',
        },
        {
          step: '02',
          title: 'Inspection & Protective Packing',
          time: '0–1 Business Days Handling',
          description:
            'Each chair, table, and furniture piece undergoes strict quality verification and is packed with shock-absorbing corners and heavy-duty protective cartons.',
        },
        {
          step: '03',
          title: 'Carrier Handover & Tracking',
          time: 'Automated Dispatch Notice',
          description:
            'Upon dispatch with our logistics partner (DHL Freight, FedEx, UPS), an automated email containing your tracking number and real-time tracking link is sent.',
        },
        {
          step: '04',
          title: 'Transit & Final Delivery',
          time: '5–9 Business Days Transit (5–10 Days Total)',
          description:
            'Your shipment travels 100% insured directly to your destination. The carrier coordinates the delivery window ahead of arrival.',
        },
      ];

  const policySections = isGerman
    ? [
        {
          title: '1. Versandkosten & Gebühren',
          items: [
            'Wir bieten 100 % kostenlosen versicherten Standard- und Speditionsversand für alle Produkte nach Deutschland, in die gesamte EU sowie in die USA.',
            'Es fallen keinerlei versteckte Bearbeitungsgebühren, Verpackungszuschläge oder Treibstoffzuschläge an.',
            'Der auf der Produktseite angezeigte Endpreis ist der vollständige Gesamtpreis inklusive Steuern und Transportversicherung.',
          ],
        },
        {
          title: '2. Bearbeitungszeit, Laufzeit & Annahmeschluss (Google Merchant Konformität)',
          items: [
            'Bestellannahmeschluss (Order Cut-off): Deutschland & EU: 23:00 Uhr (11:00 PM GMT+01:00 MEZ Berlin) | USA: 14:00 Uhr (2:00 PM GMT-07:00 MST Phoenix), jeweils Montag bis Freitag.',
            'Bearbeitungszeit (Handling Time): 0 bis 1 Werktage (Montag bis Freitag). Bestellungen vor dem Annahmeschluss werden noch am selben Werktag bearbeitet.',
            'Transportdauer (Transit Time): 5 bis 9 Werktage (Montag bis Freitag).',
            'Gesamte Lieferzeit: 5 bis 10 Werktage ab erfolgreicher Bestellung (konform mit den Einstellungen in Google Merchant Center: 5–10 business days).',
          ],
        },
        {
          title: '3. Logistikpartner & Transport',
          items: [
            'Die Auslieferung erfolgt über renommierte Logistikpartner wie DHL Freight, FedEx Ground Freight, UPS sowie spezialisierte Möbelspeditionen.',
            'Schwere und sperrige Möbelstücke werden über zertifizierte Speditionen auf Paletten oder in Schutzverpackungen transportiert.',
            'Speditionssendungen werden vor der Anlieferung avisiert, damit eine reibungslose Übergabe gewährleistet ist.',
          ],
        },
        {
          title: '4. Sendungsverfolgung (Tracking)',
          items: [
            'Sobald Ihre Bestellung an die Spedition übergeben wurde, senden wir Ihnen eine Versandbestätigung mit Tracking-Nummer per E-Mail.',
            'Sie können den aktuellen Lieferstatus jederzeit über unser Portal zur Sendungsverfolgung (/track) abrufen.',
            'Bei Fragen zum Transportverlauf unterstützt Sie unser Kundenservice montags bis freitags von 09:00 bis 17:00 Uhr.',
          ],
        },
        {
          title: '5. Transportschäden & Verlustversicherung',
          items: [
            'Jede Sendung von Weteextees ist während des gesamten Transports zu 100 % gegen Beschädigung, Verlust und Diebstahl versichert.',
            'Bitte überprüfen Sie die Außenverpackung bei der Annahme auf sichtbare Mängel und lassen Sie diese gegebenenfalls vom Fahrer quittieren.',
            'Sollte ein Artikel beschädigt eintreffen, kontaktieren Sie uns bitte innerhalb von 48 Stunden mit Fotos unter contact@weteextees.com. Wir veranlassen umgehend eine kostenlose Ersatzlieferung oder eine 100 %ige Rückerstattung.',
          ],
        },
        {
          title: '6. Adressänderungen & Stornierungen',
          items: [
            'Solange Ihre Bestellung noch nicht an das Transportunternehmen übergeben wurde, können Sie Adressänderungen oder Stornierungen kostenlos vornehmen.',
            'Bitte kontaktieren Sie uns hierfür schnellstmöglich per E-Mail an contact@weteextees.com oder über den Live-Chat.',
            'Nach Übergabe an die Spedition kann die Lieferadresse über das Carrier-Tracking angepasst werden.',
          ],
        },
      ]
    : [
        {
          title: '1. Shipping Rates & Pricing Policy',
          items: [
            'We provide 100% Free Insured Standard & Freight Delivery on all products to the United States, Germany, and all supported European Union destinations.',
            'Zero hidden handling fees, zero crating charges, and zero freight surcharges at checkout.',
            'The price you see on the product page is your final price, fully inclusive of all shipping and transit insurance.',
          ],
        },
        {
          title: '2. Handling Time, Transit Time & Cutoff (Google Merchant Compliant)',
          items: [
            'Order Cutoff Time: United States: 2:00 PM (14:00 GMT-07:00 Mountain Standard Time - Phoenix) | Germany & EU: 11:00 PM (23:00 GMT+01:00 CET Berlin), Monday through Friday.',
            'Handling / Processing Time: 0 to 1 business days (Monday to Friday). Orders placed before cutoff are processed the same business day.',
            'Transit Time: 5 to 9 business days (Monday to Friday).',
            'Total Estimated Delivery Time: 5 to 10 business days from order placement (strictly matching Google Merchant Center settings: 5–10 business days).',
          ],
        },
        {
          title: '3. Shipping Carriers & Logistics Methods',
          items: [
            'Shipments are handled through premier logistics providers including DHL Freight, FedEx Ground Freight, UPS, and specialized furniture carriers.',
            'Heavy or delicate furniture items are packed in reinforced wooden crates or multi-wall corrugated cartons with high-density foam edge guards.',
            'For oversized freight deliveries, the carrier contacts the recipient in advance to confirm an arrival appointment.',
          ],
        },
        {
          title: '4. Live Order Tracking & Notifications',
          items: [
            'Upon carrier dispatch, an automated email containing your carrier tracking number and direct tracking link is sent to you.',
            'You can monitor real-time shipping milestones 24/7 on our Order Tracking page (/track).',
            'Our customer support team is available Mon-Fri 09:00-17:00 to provide direct carrier liaison and status updates.',
          ],
        },
        {
          title: '5. Transit Insurance & Damage Protection',
          items: [
            'Every shipment is 100% covered against in-transit loss, damage, or handling defects at no additional expense to the customer.',
            'We encourage inspecting outer packaging upon delivery. Note any visible distress directly on the carrier bill of lading.',
            'In the rare case of damage, notify contact@weteextees.com within 48 hours with order photos for an immediate free replacement or 100% full refund.',
          ],
        },
        {
          title: '6. Address Corrections & Cancellations',
          items: [
            'You may request address corrections or cancel your order free of charge before the item has been picked and dispatched.',
            'Please contact our support team immediately via email at contact@weteextees.com or through Live Chat.',
            'Once in transit, address rerouting requests may be submitted directly to the freight carrier.',
          ],
        },
      ];

  return (
    <main className="min-h-screen bg-[#F6F8F5] py-10 sm:py-16 text-[#1E2621]">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#5C6B61]">
          <Link href="/" className="hover:text-[#1D2E24] transition-colors">
            {isGerman ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#1D2E24]">
            {isGerman ? 'Versandrichtlinien' : 'Shipping Policy'}
          </span>
        </nav>

        {/* Hero Section */}
        <section className="mb-10 rounded-2xl bg-gradient-to-r from-[#1D2E24] to-[#142019] px-6 py-8 text-[#F6F8F5] sm:px-10 sm:py-12 shadow-lg border border-[#D1A966]/20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D1A966]/30 bg-[#1D2E24]/80 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#D1A966]">
            <Truck className="h-4 w-4" />
            {isGerman ? 'Versicherter Speditionsversand & Google Merchant Konformität' : '100% Insured Freight Logistics · Google Merchant Compliant'}
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-[#F6F8F5]">
            {isGerman ? 'Versandrichtlinien & Lieferzeiten' : 'Shipping Policy & Delivery Estimates'}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#F6F8F5]/85 sm:text-base md:text-lg">
            {isGerman
              ? 'Transparente Versandbedingungen für Weteextees Möbel, Stühle und Tische. Kostenloser versicherter Transport, 0–1 Werktage Bearbeitungszeit und 5–9 Werktage Regellaufzeit (5–10 Werktage Gesamtlieferzeit) nach Deutschland, in die EU und die USA.'
              : 'Transparent shipping and delivery terms for Weteextees modern furniture, chairs, and solid wood pieces. Free insured shipping, 0–1 business days handling, and 5–9 business days transit (5–10 business days total delivery) to the United States, Germany, and Europe.'}
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 pt-6 border-t border-[#D1A966]/20">
            <div className="rounded-xl bg-white/5 p-3.5 backdrop-blur-sm border border-white/10">
              <span className="block text-xs uppercase tracking-wider text-[#D1A966] font-semibold">
                {isGerman ? 'Versandkosten' : 'Shipping Cost'}
              </span>
              <span className="mt-1 block text-lg sm:text-xl font-bold text-white">
                {isGerman ? '0,00 € (Kostenlos)' : 'Free ($0.00)'}
              </span>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 backdrop-blur-sm border border-white/10">
              <span className="block text-xs uppercase tracking-wider text-[#D1A966] font-semibold">
                {isGerman ? 'Bearbeitung' : 'Handling Time'}
              </span>
              <span className="mt-1 block text-lg sm:text-xl font-bold text-white">
                {isGerman ? '0–1 Werktage' : '0–1 Business Days'}
              </span>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 backdrop-blur-sm border border-white/10">
              <span className="block text-xs uppercase tracking-wider text-[#D1A966] font-semibold">
                {isGerman ? 'Laufzeit' : 'Transit Time'}
              </span>
              <span className="mt-1 block text-lg sm:text-xl font-bold text-white">
                {isGerman ? '5–9 Werktage' : '5–9 Business Days'}
              </span>
            </div>
            <div className="rounded-xl bg-white/5 p-3.5 backdrop-blur-sm border border-white/10">
              <span className="block text-xs uppercase tracking-wider text-[#D1A966] font-semibold">
                {isGerman ? 'Gesamtdauer' : 'Total Delivery'}
              </span>
              <span className="mt-1 block text-lg sm:text-xl font-bold text-white">
                {isGerman ? '5–10 Werktage' : '5–10 Business Days'}
              </span>
            </div>
          </div>
        </section>

        {/* Destination & Delivery Breakdown Table (Google Merchant Center Alignment) */}
        <section className="mb-10 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 pb-5 border-b border-gray-100 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D2E24] mb-1">
                <Globe className="h-4 w-4 text-[#D1A966]" />
                {isGerman ? 'Lieferländer & Laufzeiten Übersicht' : 'Shipping Destinations & Rates Overview'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E2621]">
                {isGerman ? 'Länderübersicht, Speditionen & Laufzeiten' : 'Destination Countries, Carriers & Delivery Speeds'}
              </h2>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#1D2E24]/10 px-3 py-1 text-xs font-bold text-[#1D2E24]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#1D2E24]" />
              {isGerman ? '100% Versandkostenfrei' : '100% Free Shipping'}
            </span>
          </div>

          {/* Responsive Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F6F8F5] text-xs font-bold uppercase tracking-wider text-[#5C6B61]">
                  <th className="py-3.5 px-4 rounded-l-lg">{isGerman ? 'Bestimmungsland' : 'Destination'}</th>
                  <th className="py-3.5 px-4">{isGerman ? 'Logistikpartner' : 'Carrier / Service'}</th>
                  <th className="py-3.5 px-4">{isGerman ? 'Versandkosten' : 'Shipping Cost'}</th>
                  <th className="py-3.5 px-4">{isGerman ? 'Bearbeitung (Handling)' : 'Handling Time'}</th>
                  <th className="py-3.5 px-4">{isGerman ? 'Regellaufzeit (Transit)' : 'Transit Time'}</th>
                  <th className="py-3.5 px-4 rounded-r-lg">{isGerman ? 'Gesamtdauer (GMC)' : 'Total Delivery (GMC)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[#1E2621]">
                {destinationTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-4 font-semibold whitespace-nowrap">
                      <span className="mr-2 text-base">{row.flag}</span>
                      {row.country}
                    </td>
                    <td className="py-4 px-4 text-[#5C6B61] whitespace-nowrap">{row.carrier}</td>
                    <td className="py-4 px-4 font-bold text-[#1D2E24] whitespace-nowrap">{row.cost}</td>
                    <td className="py-4 px-4 text-[#5C6B61] whitespace-nowrap">{row.handling}</td>
                    <td className="py-4 px-4 text-[#5C6B61] whitespace-nowrap">{row.transit}</td>
                    <td className="py-4 px-4 font-bold text-[#1E2621] whitespace-nowrap">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-[#5C6B61] leading-relaxed">
            {isGerman
              ? '* Werktage entsprechen Montag bis Freitag (ausgenommen gesetzliche Feiertage). Alle Angaben spiegeln exakt die in unserem Google Merchant Center hinterlegte Versandrichtlinie (0–1 Werktage Bearbeitung, 5–9 Werktage Laufzeit, 5–10 Werktage Gesamtlieferzeit) wider.'
              : '* Business days are defined as Monday through Friday, excluding public holidays. All timeframes strictly reflect our active Google Merchant Center shipping policy (0–1 handling days, 5–9 transit days, 5–10 business days total delivery).'}
          </p>
        </section>

        {/* Ship-From Locations (Google Merchant Center Alignment) */}
        <section className="mb-10 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D1A966]">
              {isGerman ? 'Verifizierte Versandstandorte' : 'Ship-From Fulfillment Locations'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2621] mt-1">
              {isGerman ? 'Standorte & Warenlager' : 'Verified Fulfillment Warehouses'}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {warehouses.map((wh, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#DCE5DE] bg-[#F6F8F5] p-5 flex items-start gap-4"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1D2E24] text-[#D1A966]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-[#5C6B61] flex items-center gap-1.5">
                    <span>{wh.flag}</span> {wh.countryCode}
                  </span>
                  <h3 className="text-base font-bold text-[#1E2621] mt-0.5">{wh.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5C6B61] mt-1 leading-relaxed">{wh.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Order & Dispatch Timeline */}
        <section className="mb-10 rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D1A966]">
              {isGerman ? 'Transparenter Ablauf' : 'Fulfillment Process'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E2621] mt-1">
              {isGerman ? 'Schritt-für-Schritt von der Bestellung bis zur Haustür' : 'Step-by-Step Dispatch to Delivery'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timelineSteps.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-[#DCE5DE] bg-[#F6F8F5] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-extrabold text-[#D1A966] bg-[#1D2E24] px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold text-[#1D2E24] bg-white px-2 py-0.5 rounded border border-[#DCE5DE]">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1E2621] text-base mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#5C6B61]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#DCE5DE] bg-white p-6 shadow-sm">
            <ShieldCheck className="mb-4 h-7 w-7 text-[#1D2E24]" />
            <h3 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? '100 % Transportversicherung' : '100% In-Transit Insurance'}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Jedes Möbelstück reist vollständig versichert gegen Transportschäden, Verlust und Bruch. Sollte doch einmal etwas passieren, sorgen wir sofort für Ersatz.'
                : 'Every furniture piece is fully protected against in-transit damage, theft, or handling defects at no additional cost.'}
            </p>
          </div>

          <div className="rounded-xl border border-[#DCE5DE] bg-white p-6 shadow-sm">
            <PackageCheck className="mb-4 h-7 w-7 text-[#1D2E24]" />
            <h3 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? 'Mehrlagige Schutzverpackung' : 'Heavy-Duty Furniture Crating'}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Empfindliches Massivholz, Rattan und Designer-Polster werden in doppelwandigen Kartons mit speziellem Kantenschutz und Stoßdämpfung transportsicher verpackt.'
                : 'Solid hardwood, handwoven rattan, and fine upholstery are packed in double-walled cartons with reinforced edge armor and shock padding.'}
            </p>
          </div>

          <div className="rounded-xl border border-[#DCE5DE] bg-white p-6 shadow-sm">
            <RefreshCw className="mb-4 h-7 w-7 text-[#1D2E24]" />
            <h3 className="text-lg font-bold text-[#1E2621]">
              {isGerman ? '30 Tage Rückgaberecht' : '30-Day Risk-Free Returns'}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#5C6B61]">
              {isGerman
                ? 'Testen Sie Ihre Möbel in Ruhe zu Hause. Sie haben 30 Tage Zeit für eine unkomplizierte Rückgabe mit voller Rückerstattung.'
                : 'Enjoy complete peace of mind with our 30-day return policy and full refund guarantee on unused pieces in original packaging.'}
            </p>
          </div>
        </section>

        {/* Detailed Policy Sections Grid */}
        <section className="grid gap-6 md:grid-cols-2 mb-10">
          {policySections.map((section, idx) => (
            <div key={idx} className="rounded-xl border border-[#DCE5DE] bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#1E2621] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D1A966]"></span>
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[#5C6B61]">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1D2E24]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Need Help / Contact Card */}
        <section className="rounded-2xl border border-[#DCE5DE] bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1E2621]">
              {isGerman ? 'Haben Sie Fragen zu Ihrer Lieferung?' : 'Questions About Your Delivery?'}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5C6B61]">
              {isGerman
                ? 'Unser Support-Team unterstützt Sie gerne bei allen Fragen zu Sendungsverfolgung, Speditionsavisierungen oder Adressänderungen:'
                : 'Our customer support team is available to assist you with tracking updates, carrier logistics, or delivery window questions:'}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <MapPin className="h-5 w-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#5C6B61]">
                  {isGerman ? 'Standorte' : 'Locations'}
                </span>
                <span className="text-xs font-medium text-[#1E2621] mt-0.5 block">
                  USA: Peach Springs, AZ 86434
                  <br />
                  DE: München, Bayern 81825
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Mail className="h-5 w-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#5C6B61]">
                  {isGerman ? 'E-Mail-Support' : 'Email Support'}
                </span>
                <a
                  href="mailto:contact@weteextees.com"
                  className="text-xs font-medium text-[#1D2E24] hover:text-[#D1A966] transition-colors mt-0.5 block"
                >
                  contact@weteextees.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-[#F6F8F5] p-4 border border-[#DCE5DE]">
              <Clock className="h-5 w-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold uppercase text-[#5C6B61]">
                  {isGerman ? 'Kundenservice-Zeiten' : 'Service Hours'}
                </span>
                <span className="text-xs font-medium text-[#1E2621] mt-0.5 block">
                  {isGerman ? 'Mo–Fr 09:00–17:00 Uhr' : 'Mon–Fri 09:00–17:00'}
                  <br />
                  {isGerman ? 'Live-Chat & E-Mail' : 'Live Chat & Email Support'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/track"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D2E24] px-5 py-3 text-sm font-semibold text-[#F6F8F5] transition hover:bg-[#142019]"
            >
              <Truck className="h-4 w-4 text-[#D1A966]" />
              {isGerman ? 'Sendung verfolgen' : 'Track Your Shipment'}
            </Link>
            <Link
              href="/return-policy"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5DE] bg-white px-5 py-3 text-sm font-semibold text-[#1E2621] transition hover:bg-gray-50"
            >
              <RefreshCw className="h-4 w-4 text-[#1D2E24]" />
              {isGerman ? 'Widerruf & Rückgabe' : 'Return Policy'}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE5DE] bg-white px-5 py-3 text-sm font-semibold text-[#1E2621] transition hover:bg-gray-50"
            >
              <Mail className="h-4 w-4 text-[#1D2E24]" />
              {isGerman ? 'Kontakt aufnehmen' : 'Contact Support'}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
