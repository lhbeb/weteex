import React from 'react';

const CookiesPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#262626] mb-8">Cookie-Richtlinie</h1>
      
      <div className="prose max-w-none text-gray-700 space-y-8">
        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          Diese Cookie-Richtlinie erläutert, wie Weteextees (Weteextees.com) Cookies und ähnliche Technologien einsetzt, um Ihnen ein optimales Einkaufserlebnis zu ermöglichen.
        </p>

        {/* What Are Cookies */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, grundlegende Funktionen des Shops (wie den Warenkorb) bereitzustellen und die Website-Nutzung zu optimieren.
          </p>
        </div>

        {/* Types of Cookies We Use */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Arten der von uns verwendeten Cookies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#262626] mb-2">Technisch notwendige Cookies</h3>
              <p>
                Diese Cookies sind für den grundlegenden Betrieb des Online-Shops unerlässlich. Sie ermöglichen beispielsweise den Warenkorb, den sicheren Bezahlvorgang und die Seitennavigation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#262626] mb-2">Funktionale Cookies</h3>
              <p>
                Diese Cookies speichern Ihre bevorzugten Einstellungen wie Währung oder Sprachauswahl, um Ihren nächsten Besuch komfortabler zu gestalten.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#262626] mb-2">Analyse- und Performance-Cookies</h3>
              <p>
                Mit Hilfe dieser Cookies erfassen wir anonymisierte Daten über die Nutzung unserer Website, um unser Produktangebot und die Ladezeiten stetig zu verbessern.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Management */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Verwaltung und Deaktivierung von Cookies</h2>
          <p className="mb-4">Sie können die Speicherung von Cookies in Ihren Browser-Einstellungen steuern:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Bereits gespeicherte Cookies auf Ihrem Gerät löschen</li>
            <li>Das Setzen von Cookies grundsätzlich blockieren</li>
            <li>Sich vor dem Setzen eines Cookies benachrichtigen lassen</li>
          </ul>
          <p>
            Bitte beachten Sie, dass bei der Deaktivierung technisch notwendiger Cookies bestimmte Funktionen des Online-Shops (z.B. der Bestellabschluss) beeinträchtigt sein können.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Kontakt</h2>
          <p className="mb-4">
            Haben Sie Fragen zu unserer Cookie-Richtlinie? Kontaktieren Sie uns gerne:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <div>
              <div className="font-medium text-[#262626] mb-1">Live-Chat:</div>
              <div className="text-gray-600">24/7 Live-Chat auf der Website</div>
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

export default CookiesPage; 
