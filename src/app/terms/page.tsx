import React from 'react';

const TermsPage = () => {
  const currentDate = new Date().toLocaleDateString('de-DE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-2">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="text-gray-600 mb-8">Stand: {currentDate}</p>
        
        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            Willkommen bei Weteextees. Mit dem Zugriff auf unsere Website (Weteextees.com) oder dem Kauf von modernen Möbeln, Stühlen und Wohnaccessoires erklären Sie sich mit den nachfolgenden Allgemeinen Geschäftsbedingungen einverstanden.
          </p>

          {/* Section 1: Overview */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">1. Geltungsbereich &amp; Anbieter</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weteextees bietet handverlesene moderne Esszimmerstühle, Rattan- und Massivholzmöbel, Tische und Einrichtungsgegenstände über den Online-Shop an.</li>
              <li>Vertragspartner ist Weteextees mit Standorten in der Hochalmstraße 10, 81825 München, Bayern, Deutschland sowie 900 AZ-66, Peach Springs, AZ 86434, USA.</li>
              <li>Für alle Bestellungen über diesen Online-Shop gelten ausschließlich die hier vorliegenden AGB in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.</li>
            </ul>
          </div>

          {/* Section 2: Account Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">2. Vertragsschluss &amp; Bestellvorgang</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Die Präsentation der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine unverbindliche Aufforderung zur Bestellung dar.</li>
              <li>Durch Anklicken des Buttons &bdquo;Jetzt kaufen&ldquo; bzw. &bdquo;Weiter zur Zahlung&ldquo; geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Artikel ab.</li>
              <li>Die Bestätigung des Bestelleingangs erfolgt unmittelbar nach dem Absenden durch eine automatisierte E-Mail.</li>
            </ul>
          </div>

          {/* Section 3: Orders and Product Availability */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">3. Preise, Beschaffenheit &amp; Verfügbarkeit</h2>
            <p className="mb-4">
              Alle angegebenen Preise sind Endpreise in Euro (€) inklusive der gesetzlichen Mehrwertsteuer.
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.1 Produktbeschreibungen &amp; Naturmaterialien</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Wir bemühen uns um eine möglichst originalgetreue Darstellung von Farben, Holzmaserungen und Texturen.</li>
              <li>Da Holz und Naturrattan Naturmaterialien sind, können leichte Farb- und Strukturabweichungen auftreten. Diese sind Ausdruck natürlicher Qualität und kein Mangel.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.2 Zahlungsbedingungen</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Ihnen stehen die im Bestellprozess angegebenen sicheren Zahlungsmethoden (Kreditkarte, Stripe, PayPal etc.) zur Verfügung.</li>
              <li>Der Rechnungsbetrag ist mit Vertragsschluss sofort fällig.</li>
            </ul>
          </div>

          {/* Section 4: Shipping */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">4. Lieferung, Versand &amp; Transportversicherung</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Der Standardversand für Möbelstücke und Stühle ist kostenlos in ganz Deutschland und der EU.</li>
              <li>Die Lieferung erfolgt per Paketdienst oder spezialisierter Möbelspedition mit lückenloser Sendungsverfolgung.</li>
              <li>Die Regellieferzeit beträgt 3 bis 7 Werktage nach Zahlungseingang und Auftragsbestätigung.</li>
              <li>Jede Sendung ist während des Transports zu 100 % versichert.</li>
            </ul>
          </div>

          {/* Section 5: Widerruf */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">5. Widerrufsrecht &amp; Rückgabe</h2>
            <p className="mb-4">
              Verbrauchern steht das gesetzliche 14-tägige Widerrufsrecht zu, welches wir auf ein 30-tägiges Rückgaberecht erweitern. Details entnehmen Sie bitte unserer Widerrufsbelehrung &amp; Rückgaberichtlinie.
            </p>
          </div>

          {/* Section 6: Gewährleistung & Haftung */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">6. Gesetzliche Gewährleistung &amp; Haftung</h2>
            <p className="mb-4">
              Es gelten die gesetzlichen Gewährleistungsrechte. Für Schäden haften wir nach den gesetzlichen Bestimmungen.
            </p>
          </div>

          {/* Section 7: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">7. Kontakt &amp; Kundenservice</h2>
            <p className="mb-4">
              Bei Fragen zu diesen AGB oder zu Ihrer Bestellung erreichen Sie uns unter:
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
              <div>
                <div className="font-medium text-[#262626] mb-1">Website:</div>
                <div className="text-gray-600">Weteextees.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 
