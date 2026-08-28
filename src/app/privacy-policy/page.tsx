"use client";

import React from 'react';
import { useLocale } from '@/context/LocaleContext';

const PrivacyPolicyPage = () => {
  const { isGerman } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {isGerman ? 'Datenschutzerklärung (DSGVO)' : 'Privacy Policy (GDPR & CCPA Compliant)'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {isGerman
              ? 'Willkommen bei Weteextees (Weteextees.com). Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten wir erheben, wie wir sie verarbeiten und welche Rechte Ihnen gemäß der Datenschutz-Grundverordnung (DSGVO) zustehen.'
              : 'Welcome to Weteextees (Weteextees.com). Protecting your privacy and personal data is a top priority for us. This Privacy Policy details the types of information we collect, how it is used and protected, and your rights under GDPR, CCPA, and international data protection standards.'}
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '1. Verantwortliche Stelle' : '1. Data Controller & Entity'}
            </h2>
            <p className="mb-4">
              {isGerman ? 'Verantwortlicher im Sinne der DSGVO ist:' : 'The data controller responsible for operations is:'}
              <br />
              <strong>Weteextees</strong>
              <br />
              {isGerman ? 'Standort Deutschland:' : 'Germany Location:'} Hochalmstraße 10, 81825 München, Bayern
              <br />
              {isGerman ? 'Standort USA:' : 'USA Location:'} 900 AZ-66, Peach Springs, AZ 86434, USA
              <br />
              {isGerman ? 'E-Mail:' : 'Email:'} <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:underline">contact@weteextees.com</a>
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '2. Erhebung und Speicherung personenbezogener Daten' : '2. Collection & Storage of Personal Data'}
            </h2>
            <p className="mb-4">
              {isGerman ? 'Wir verarbeiten personenbezogene Daten, wenn Sie:' : 'We collect and process personal data when you:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li>Unsere Website besuchen (Server-Logfiles, IP-Adresse, Browsertyp, aufgerufene Seiten)</li>
                  <li>Eine Bestellung aufgeben (Name, Lieferadresse, Rechnungsadresse, E-Mail-Adresse, Zahlungsdaten)</li>
                  <li>Unseren Kundenservice oder Live-Chat kontaktieren</li>
                </>
              ) : (
                <>
                  <li>Visit our website (secure server logfiles, IP address, device & browser info, pages viewed)</li>
                  <li>Place an order (full name, shipping address, billing address, email address, payment confirmation)</li>
                  <li>Reach out to our customer care or 24/7 Live Chat support</li>
                </>
              )}
            </ul>
            <p className="mb-4">
              {isGerman
                ? 'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung oder vorvertraglicher Maßnahmen sowie Art. 6 Abs. 1 lit. f DSGVO zur Wahrung berechtigter Interessen (Betrieb und Sicherheit der Website).'
                : 'Data is processed lawfully pursuant to contract fulfillment (order execution), customer support, and legitimate interests in website security and fraud prevention.'}
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '3. Weitergabe von Daten an Dritte' : '3. Sharing Information with Third Parties'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Eine Weitergabe Ihrer persönlichen Daten erfolgt ausschließlich an Partner, die zur Bestellabwicklung erforderlich sind:'
                : 'Your data is only shared with verified service providers strictly necessary to process and deliver your order:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li><strong>Logistik- und Transportunternehmen</strong> (zur Auslieferung der bestellten Möbel)</li>
                  <li><strong>Zahlungsdienstleister</strong> (z.B. Stripe, PayPal zur sicheren Zahlungsabwicklung)</li>
                  <li><strong>IT- und Hosting-Dienstleister</strong> zur sicheren Bereitstellung unserer Plattform</li>
                </>
              ) : (
                <>
                  <li><strong>Freight & Logistics Partners</strong> (to securely deliver your furniture orders to your door)</li>
                  <li><strong>Certified Payment Gateways</strong> (e.g. Stripe, PayPal with full PCI-DSS encryption)</li>
                  <li><strong>Hosting & Security Infrastructure</strong> to maintain platform integrity and SSL safety</li>
                </>
              )}
            </ul>
            <p>
              {isGerman
                ? 'Eine Übermittlung zu Werbezwecken an sonstige Dritte findet ausdrücklich nicht statt.'
                : 'We strictly NEVER sell, rent, or trade your personal data to third-party advertisers.'}
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '4. Datensicherheit & SSL-Verschlüsselung' : '4. Data Security & 256-Bit SSL Encryption'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Wir nutzen auf unserer Website moderne SSL-/TLS-Verschlüsselungstechnologien, um die Übertragung Ihrer persönlichen Daten und Bestellungen bestmöglich gegen unbefugte Zugriffe zu schützen.'
                : 'We employ state-of-the-art 256-bit SSL/TLS encryption across our entire platform to ensure that your checkout credentials and personal information remain completely confidential and tamper-proof.'}
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '5. Ihre Betroffenenrechte' : '5. Your Privacy Rights'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Nach den Bestimmungen der DSGVO stehen Ihnen folgende Rechte zu:'
                : 'Under applicable privacy laws (GDPR, CCPA), you are entitled to:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong> über die von uns verarbeiteten Daten</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> unrichtiger Daten</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong> vorbehaltlich gesetzlicher Aufbewahrungspflichten</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong></li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> gegen bestimmte Verarbeitungen</li>
                </>
              ) : (
                <>
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                  <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data.</li>
                  <li><strong>Right to Restrict or Object:</strong> Restrict or object to specific processing activities.</li>
                  <li><strong>Right to Data Portability:</strong> Obtain and reuse your personal data in a standard format.</li>
                </>
              )}
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '6. Kontakt bei Datenschutzfragen' : '6. Privacy Contact & Inquiries'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten oder zur Ausübung Ihrer Betroffenenrechte wenden Sie sich bitte an:'
                : 'For any privacy-related requests or to exercise your rights, please reach out to:'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Live-Chat:' : 'Live Chat:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? '24/7 Live-Chat-Support auf der Website' : '24/7 Instant Live Chat Support on site'}
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

export default PrivacyPolicyPage;
