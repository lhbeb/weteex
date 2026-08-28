import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#262626] mb-8">Datenschutzerklärung (DSGVO)</h1>
      
      <div className="prose max-w-none text-gray-700 space-y-8">
        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          Willkommen bei Weteextees (Weteextees.com). Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten wir erheben, wie wir sie verarbeiten und welche Rechte Ihnen gemäß der Datenschutz-Grundverordnung (DSGVO) zustehen.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">1. Verantwortliche Stelle</h2>
          <p className="mb-4">
            Verantwortlicher im Sinne der DSGVO ist:
            <br />
            <strong>Weteextees</strong>
            <br />
            Standort Deutschland: Hochalmstraße 10, 81825 München, Bayern
            <br />
            Standort USA: 900 AZ-66, Peach Springs, AZ 86434, USA
            <br />
            E-Mail: <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:underline">contact@weteextees.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="mb-4">Wir verarbeiten personenbezogene Daten, wenn Sie:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Unsere Website besuchen (Server-Logfiles, IP-Adresse, Browsertyp, aufgerufene Seiten)</li>
            <li>Eine Bestellung aufgeben (Name, Lieferadresse, Rechnungsadresse, E-Mail-Adresse, Zahlungsdaten)</li>
            <li>Unseren Kundenservice oder Live-Chat kontaktieren</li>
          </ul>
          <p className="mb-4">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung oder vorvertraglicher Maßnahmen sowie Art. 6 Abs. 1 lit. f DSGVO zur Wahrung berechtigter Interessen (Betrieb und Sicherheit der Website).
          </p>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">3. Weitergabe von Daten an Dritte</h2>
          <p className="mb-4">
            Eine Weitergabe Ihrer persönlichen Daten erfolgt ausschließlich an Partner, die zur Bestellabwicklung erforderlich sind:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Logistik- und Transportunternehmen</strong> (zur Auslieferung der bestellten Möbel)</li>
            <li><strong>Zahlungsdienstleister</strong> (z.B. Stripe, PayPal zur sicheren Zahlungsabwicklung)</li>
            <li><strong>IT- und Hosting-Dienstleister</strong> zur sicheren Bereitstellung unserer Plattform</li>
          </ul>
          <p>
            Eine Übermittlung zu Werbezwecken an sonstige Dritte findet ausdrücklich nicht statt.
          </p>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">4. Datensicherheit &amp; SSL-Verschlüsselung</h2>
          <p className="mb-4">
            Wir nutzen auf unserer Website moderne SSL-/TLS-Verschlüsselungstechnologien, um die Übertragung Ihrer persönlichen Daten und Bestellungen bestmöglich gegen unbefugte Zugriffe zu schützen.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">5. Ihre Betroffenenrechte</h2>
          <p className="mb-4">Nach den Bestimmungen der DSGVO stehen Ihnen folgende Rechte zu:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Auskunftsrecht (Art. 15 DSGVO)</strong> über die von uns verarbeiteten Daten</li>
            <li><strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> unrichtiger Daten</li>
            <li><strong>Recht auf Löschung (Art. 17 DSGVO)</strong> vorbehaltlich gesetzlicher Aufbewahrungspflichten</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
            <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong></li>
            <li><strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> gegen bestimmte Verarbeitungen</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">6. Kontakt bei Datenschutzfragen</h2>
          <p className="mb-4">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten oder zur Ausübung Ihrer Betroffenenrechte wenden Sie sich bitte an:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <div>
              <div className="font-medium text-[#262626] mb-1">Live-Chat:</div>
              <div className="text-gray-600">24/7 Live-Chat-Support auf der Website</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">E-Mail:</div>
              <div className="text-gray-600">contact@weteextees.com</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">Standorte &amp; Logistik:</div>
              <div className="text-gray-600">🇩🇪 Hochalmstraße 10, 81825 München, Deutschland<br />🇺🇸 900 AZ-66, Peach Springs, AZ 86434, USA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
