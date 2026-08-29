"use client";

import React from 'react';
import { useLocale } from '@/context/LocaleContext';

const TermsPage = () => {
  const { isGerman } = useLocale();

  const currentDate = new Date().toLocaleDateString(isGerman ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-2">
          {isGerman ? 'Allgemeine Geschäftsbedingungen (AGB)' : 'Terms of Service & Conditions'}
        </h1>
        <p className="text-gray-600 mb-8">
          {isGerman ? `Stand: ${currentDate}` : `Effective Date: ${currentDate}`}
        </p>

        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            {isGerman
              ? 'Willkommen bei Weteextees. Mit dem Zugriff auf unsere Website (Weteextees.com) oder dem Kauf von modernen Möbeln, Stühlen und Wohnaccessoires erklären Sie sich mit den nachfolgenden Allgemeinen Geschäftsbedingungen einverstanden.'
              : 'Welcome to Weteextees. By accessing or purchasing handcrafted modern furniture, dining chairs, tables, and home accents on Weteextees.com, you agree to the terms and conditions outlined below.'}
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '1. Geltungsbereich & Anbieter' : '1. Scope & Contracting Entity'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {isGerman ? (
                <>
                  <li>Weteextees bietet handverlesene moderne Esszimmerstühle, Rattan- und Massivholzmöbel, Tische und Einrichtungsgegenstände über den Online-Shop an.</li>
                  <li>Vertragspartner ist Weteextees mit Standorten in der Hochalmstraße 10, 81825 München, Bayern, Deutschland sowie 900 AZ-66, Peach Springs, AZ 86434, USA.</li>
                  <li>Für alle Bestellungen über diesen Online-Shop gelten ausschließlich die hier vorliegenden AGB in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</li>
                </>
              ) : (
                <>
                  <li>Weteextees operates an online storefront offering curated designer dining chairs, natural rattan, solid wood furniture, and tables.</li>
                  <li>The contracting entity is Weteextees, with locations at Hochalmstraße 10, 81825 Munich, Germany and 900 AZ-66, Peach Springs, AZ 86434, USA.</li>
                  <li>These Terms apply to all orders, inquiries, and contracts made through Weteextees.com.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '2. Vertragsschluss & Bestellvorgang' : '2. Contract Formation & Ordering'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {isGerman ? (
                <>
                  <li>Die Präsentation der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Bestellung dar.</li>
                  <li>Durch Anklicken des Buttons &bdquo;Jetzt kaufen&ldquo; bzw. &bdquo;Weiter zur Zahlung&ldquo; geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Artikel ab.</li>
                  <li>Die Bestätigung des Bestelleingangs erfolgt unmittelbar nach dem Absenden durch eine automatisierte E-Mail.</li>
                </>
              ) : (
                <>
                  <li>Product presentations on the website represent an invitation to purchase rather than a legally binding offer.</li>
                  <li>By clicking &quot;Buy Now&quot; or &quot;Complete Checkout&quot;, you submit a binding order for the selected items.</li>
                  <li>Order confirmation with an itemized summary is sent immediately via automated email upon checkout completion.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '3. Preise, Beschaffenheit & Verfügbarkeit' : '3. Pricing, Materials & Availability'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen Mehrwertsteuer bzw. aller zutreffenden Steuern.'
                : 'All prices displayed on the store are inclusive of applicable sales taxes/VAT and include free insured freight delivery.'}
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">
              {isGerman ? '3.1 Produktbeschreibungen & Naturmaterialien' : '3.1 Natural Materials & Craftsmanship'}
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li>Wir bemühen uns um eine möglichst originalgetreue Darstellung von Farben, Holzmaserungen und Texturen.</li>
                  <li>Da Holz und Naturrattan Naturmaterialien sind, können leichte Farb- und Strukturabweichungen auftreten. Diese sind Ausdruck natürlicher Qualität und kein Mangel.</li>
                </>
              ) : (
                <>
                  <li>We strive to display exact colors, wood grains, and fabric textures accurately.</li>
                  <li>Because solid wood, natural rattan, and marble are authentic materials, subtle grain variations are natural characteristics of premium craftsmanship.</li>
                </>
              )}
            </ul>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">
              {isGerman ? '3.2 Zahlungsbedingungen' : '3.2 Secure Payment Terms'}
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li>Ihnen stehen die im Bestellprozess angegebenen sicheren Zahlungsmethoden (Kreditkarte, Stripe, PayPal etc.) zur Verfügung.</li>
                  <li>Der Rechnungsbetrag ist mit Vertragsschluss sofort fällig.</li>
                </>
              ) : (
                <>
                  <li>We accept verified payment methods including major credit cards, Stripe, and PayPal with full SSL encryption.</li>
                  <li>Payment is charged at the time of order confirmation.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '4. Lieferung, Versand & Transportversicherung' : '4. Shipping & Insured Freight Delivery'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {isGerman ? (
                <>
                  <li>Der Standardversand für Möbelstücke und Stühle ist kostenlos in ganz Deutschland, der EU und den USA.</li>
                  <li>Die Lieferung erfolgt per Paketdienst oder spezialisierter Möbelspedition mit lückenloser Sendungsverfolgung.</li>
                  <li>Die Regellieferzeit beträgt 2 bis 5 Werktage nach Auftragsbestätigung.</li>
                  <li>Jede Sendung ist während des Transports zu 100 % versichert.</li>
                </>
              ) : (
                <>
                  <li>Standard freight delivery is free of charge to the United States, Germany, the EU, and international destinations.</li>
                  <li>Shipments are dispatched via professional freight logistics with real-time end-to-end tracking.</li>
                  <li>Standard transit time is 2–5 business days following order processing.</li>
                  <li>All shipments are 100% insured against loss or transit damage.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '5. Widerrufsrecht & 30-Tage Rückgabe' : '5. 30-Day Return & Cancellation Policy'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Verbrauchern steht das gesetzliche 14-tägige Widerrufsrecht zu, welches wir auf ein 30-tägiges Rückgaberecht erweitern. Details entnehmen Sie bitte unserer Widerrufsbelehrung & Rückgaberichtlinie.'
                : 'We offer an extended 30-day return policy for all unused furniture in its original condition and packaging. Full instructions can be found in our Returns Policy.'}
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '6. Gesetzliche Gewährleistung & Haftung' : '6. Warranty & Limitation of Liability'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Es gelten die gesetzlichen Gewährleistungsrechte. Für Schäden haften wir nach den gesetzlichen Bestimmungen.'
                : 'All furniture items come with standard consumer statutory warranties against manufacturing defects. Liability is governed by applicable statutory laws.'}
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '7. Kontakt & Kundenservice' : '7. Customer Care & Contact'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Bei Fragen zu diesen AGB oder zu Ihrer Bestellung erreichen Sie uns unter:'
                : 'For inquiries regarding these terms or your order, contact us anytime:'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Live-Chat:' : 'Live Chat:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? 'Live-Chat (Mo-Fr 09:00-17:00)-Support auf der Website' : 'Mo-Fr 09:00-17:00 Instant Live Chat Support on site'}
                </div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'E-Mail:' : 'Email:'}
                </div>
                <div className="text-gray-600">contact@weteextees.com</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Standorte & Logistik:' : 'Locations & Logistics:'}
                </div>
                <div className="text-gray-600">
                  🇩🇪 Hochalmstraße 10, 81825 München, Germany<br />
                  🇺🇸 900 AZ-66, Peach Springs, AZ 86434, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
