"use client";

import React from 'react';
import { useLocale } from '@/context/LocaleContext';

const WiderrufsrechtPage = () => {
  const { isGerman } = useLocale();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RefundPolicy",
    "name": isGerman ? "Widerrufsbelehrung (Rückgaberecht)" : "Right of Withdrawal (Return Policy)",
    "refundPolicy": "https://weteextees.com/widerrufsrecht",
    "publisher": {
      "@type": "Organization",
      "name": "Weteextees",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Togostraße 1",
        "addressLocality": "München",
        "postalCode": "81827",
        "addressCountry": "DE"
      },
      "email": "contact@weteextees.com"
    },
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": isGerman ? "de" : "en",
    "refundType": "FullRefund",
    "refundMethod": "OriginalPaymentMethod",
    "refundDays": 30
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {isGerman ? 'Widerrufsbelehrung (Rückgaberecht)' : 'Right of Withdrawal (Return Policy)'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {isGerman
              ? 'Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Wir erweitern dieses gesetzliche Widerrufsrecht auf 30 Tage.'
              : 'You have the right to withdraw from this contract within 14 days without giving any reason. We extend this statutory withdrawal right to 30 days.'}
          </p>

          {/* Section 1: Withdrawal Period */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '1. Widerrufsfrist' : '1. Withdrawal Period'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben.'
                : 'The withdrawal period will expire after 14 days from the day on which you or a third party other than the carrier and indicated by you acquires physical possession of the last good.'}
            </p>
            <p className="mb-4">
              {isGerman
                ? 'Wir gewähren Ihnen zusätzlich eine verlängerte Rückgabefrist von insgesamt 30 Tagen ab Erhalt der Ware.'
                : 'We grant you an additional extended return period of 30 days total from receipt of the goods.'}
            </p>
          </div>

          {/* Section 2: How to Exercise Right */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '2. Ausübung des Widerrufsrechts' : '2. How to Exercise Your Right of Withdrawal'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.'
                : 'To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post, fax or email).'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Kontakt für Widerruf:' : 'Contact for Withdrawal:'}
                </div>
                <div className="text-gray-600">
                  Weteextees<br />
                  Togostraße 1<br />
                  81827 München-Trudering-Riem, Deutschland<br />
                  E-Mail: <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:underline">contact@weteextees.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Withdrawal Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '3. Muster-Widerrufsformular' : '3. Sample Withdrawal Form'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Sie können das beigefügte Muster-Widerrufsformular oder eine andere eindeutige Erklärung verwenden.'
                : 'You may use the attached sample withdrawal form or another unequivocal statement.'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <p className="font-medium text-[#262626]">
                {isGerman ? 'Muster-Widerrufsformular' : 'Sample Withdrawal Form'}
              </p>
              <p className="text-sm text-gray-600">
                {isGerman
                  ? '(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)'
                  : '(If you wish to withdraw from this contract, please fill out this form and send it back.)'}
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  {isGerman ? 'An:' : 'To:'} Weteextees, Togostraße 1, 81827 München-Trudering-Riem, Deutschland
                </p>
                <p>
                  {isGerman ? 'Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)' : 'I/We (*) hereby withdraw from the contract concluded by me/us (*) for the purchase of the following goods (*) / provision of the following service (*)'}
                </p>
                <p>
                  {isGerman ? 'Bestellt am (*) / erhalten am (*)' : 'Ordered on (*) / received on (*)'}
                </p>
                <p>
                  {isGerman ? 'Name des/der Verbraucher(s)' : 'Name of consumer(s)'}
                </p>
                <p>
                  {isGerman ? 'Anschrift des/der Verbraucher(s)' : 'Address of consumer(s)'}
                </p>
                <p>
                  {isGerman ? 'Datum' : 'Date'}
                </p>
                <p>
                  {isGerman ? 'Unterschrift des/der Verbraucher(s)' : 'Signature of consumer(s)'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Consequences of Withdrawal */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '4. Folgen des Widerrufs' : '4. Consequences of Withdrawal'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.'
                : 'If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (except for the supplementary costs arising if you chose a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and not later than 14 days from the day on which we are informed about your decision to withdraw from this contract.'}
            </p>
            <p className="mb-4">
              {isGerman
                ? 'Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.'
                : 'We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise.'}
            </p>
          </div>

          {/* Section 5: Return of Goods */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '5. Rücksendung der Waren' : '5. Return of Goods'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von 14 Tagen absenden.'
                : 'You must send back the goods or hand them over to us without undue delay and in any event not later than 14 days from the day on which you communicate your withdrawal from this contract to us. The deadline is met if you send back the goods before the period of 14 days has expired.'}
            </p>
            <p className="mb-4">
              {isGerman
                ? 'Die Rücksendung erfolgt auf unsere Kosten und Gefahr.'
                : 'The return shipment is at our expense and risk.'}
            </p>
            <p className="mb-4">
              {isGerman
                ? 'Wir übernehmen die Kosten der Rücksendung der Waren.'
                : 'We bear the cost of returning the goods.'}
            </p>
          </div>

          {/* Section 6: Exceptions */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '6. Ausschluss des Widerrufsrechts' : '6. Exclusion of Right of Withdrawal'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind.'
                : 'The right of withdrawal does not exist for contracts for the supply of goods that are not prefabricated and for the manufacture of which an individual choice or determination by the consumer is decisive or that are clearly tailored to the personal needs of the consumer.'}
            </p>
          </div>

          {/* Section 7: Contact */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '7. Kontakt' : '7. Contact'}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'E-Mail:' : 'Email:'}
                </div>
                <div className="text-gray-600">
                  <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:underline">
                    contact@weteextees.com
                  </a>
                </div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Adresse:' : 'Address:'}
                </div>
                <div className="text-gray-600">
                  Weteextees<br />
                  Togostraße 1<br />
                  81827 München-Trudering-Riem<br />
                  Deutschland
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiderrufsrechtPage;
