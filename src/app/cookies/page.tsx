"use client";

import React from 'react';
import { useLocale } from '@/context/LocaleContext';

const CookiesPage = () => {
  const { isGerman } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {isGerman ? 'Cookie-Richtlinie' : 'Cookie & Tracking Policy'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {isGerman
              ? 'Diese Cookie-Richtlinie erläutert, wie Weteextees (Weteextees.com) Cookies und ähnliche Technologien einsetzt, um Ihnen ein optimales Einkaufserlebnis zu ermöglichen.'
              : 'This Cookie Policy explains how Weteextees (Weteextees.com) utilizes cookies, local storage, and similar web technologies to ensure an optimal shopping and browsing experience.'}
          </p>

          {/* What Are Cookies */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? 'Was sind Cookies?' : 'What Are Cookies?'}
            </h2>
            <p>
              {isGerman
                ? 'Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, grundlegende Funktionen des Shops (wie den Warenkorb) bereitzustellen und die Website-Nutzung zu optimieren.'
                : 'Cookies are small text files stored on your browser or device when you visit a website. They allow the store to maintain your cart contents, remember your currency preferences, and facilitate seamless navigation.'}
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? 'Arten der von uns verwendeten Cookies' : 'Categories of Cookies We Use'}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {isGerman ? 'Technisch notwendige Cookies' : 'Strictly Necessary Essential Cookies'}
                </h3>
                <p>
                  {isGerman
                    ? 'Diese Cookies sind für den grundlegenden Betrieb des Online-Shops unerlässlich. Sie ermöglichen beispielsweise den Warenkorb, den sicheren Bezahlvorgang und die Seitennavigation.'
                    : 'These cookies are required for fundamental site operations, including maintaining cart items, SSL checkout security, and routing.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {isGerman ? 'Funktionale Cookies' : 'Functional & Preference Cookies'}
                </h3>
                <p>
                  {isGerman
                    ? 'Diese Cookies speichern Ihre bevorzugten Einstellungen wie Währung oder Sprachauswahl, um Ihren nächsten Besuch komfortabler zu gestalten.'
                    : 'These cookies remember your selected language (English / German), region, and currency preferences (USD / EUR).'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {isGerman ? 'Analyse- und Performance-Cookies' : 'Performance & Anonymous Analytics'}
                </h3>
                <p>
                  {isGerman
                    ? 'Mit Hilfe dieser Cookies erfassen wir anonymisierte Daten über die Nutzung unserer Website, um unser Produktangebot und die Ladezeiten stetig zu verbessern.'
                    : 'We collect aggregated, anonymized performance metrics to optimize page load speeds, catalog rendering, and checkout stability.'}
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? 'Verwaltung und Deaktivierung von Cookies' : 'Managing & Disabling Cookies'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Sie können die Speicherung von Cookies in Ihren Browser-Einstellungen steuern:'
                : 'You have full control over cookie settings within your web browser:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {isGerman ? (
                <>
                  <li>Bereits gespeicherte Cookies auf Ihrem Gerät löschen</li>
                  <li>Das Setzen von Cookies grundsätzlich blockieren</li>
                  <li>Sich vor dem Setzen eines Cookies benachrichtigen lassen</li>
                </>
              ) : (
                <>
                  <li>Clear existing cookies and local cache directly in your browser settings.</li>
                  <li>Configure your browser to block third-party or all non-essential cookies.</li>
                  <li>Set notifications before any cookie is stored on your device.</li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? 'Kontakt' : 'Contact Us'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Haben Sie Fragen zu unserer Cookie-Richtlinie? Kontaktieren Sie uns gerne:'
                : 'Have questions regarding our cookie practices? Feel free to contact us:'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Live-Chat:' : 'Live Chat:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? 'Live-Chat (Mo-Fr 09:00-17:00) auf der Website' : 'Mo-Fr 09:00-17:00 Instant Live Chat Support'}
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

export default CookiesPage;
