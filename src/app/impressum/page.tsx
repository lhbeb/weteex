"use client";

import React from 'react';
import { useLocale } from '@/context/LocaleContext';

const ImpressumPage = () => {
  const { isGerman } = useLocale();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Weteextees",
    "legalName": "Weteextees",
    "url": "https://weteextees.com",
    "logo": "https://weteextees.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Togostraße 1",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "postalCode": "81827",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@weteextees.com",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {isGerman ? 'Impressum (Rechtliche Angaben)' : 'Legal Notice (Impressum)'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {isGerman
              ? 'Angaben gemäß § 5 TMG (Telemediengesetz) und § 55 RStV (Rundfunkstaatsvertrag)'
              : 'Information pursuant to § 5 TMG (German Telemedia Act) and § 55 RStV (Interstate Broadcasting Agreement)'}
          </p>

          {/* Section 1: Company Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '1. Anbieter' : '1. Service Provider'}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Name:' : 'Name:'}
                </div>
                <div className="text-gray-600">Weteextees</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Anschrift:' : 'Address:'}
                </div>
                <div className="text-gray-600">
                  Togostraße 1<br />
                  81827 München-Trudering-Riem<br />
                  Bayern, Deutschland
                </div>
              </div>
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
            </div>
          </div>

          {/* Section 2: Legal Representative */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '2. Gesetzliche Vertretung' : '2. Legal Representative'}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Geschäftsführung / Vertretungsberechtigte:' : 'Management / Authorized Representatives:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? '[Name des Geschäftsführers einzufügen]' : '[Insert Managing Director Name]'}
                </div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Handelsregister:' : 'Commercial Register:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? '[Handelsregisternummer einzufügen]' : '[Insert Commercial Register Number]'}
                </div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Registergericht:' : 'Register Court:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? 'Amtsgericht München' : 'Munich Local Court'}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: VAT Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '3. Umsatzsteuer-ID' : '3. VAT Identification Number'}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:' : 'VAT Identification Number pursuant to § 27 a VAT Act:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? '[USt-IdNr. einzufügen]' : '[Insert VAT ID Number]'}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Dispute Resolution */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '4. Streitbeilegung' : '4. Online Dispute Resolution'}
            </h2>
            <p className="mb-4">
              {isGerman
                ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
                : 'The European Commission provides an online dispute resolution (ODR) platform:'}
            </p>
            <p className="mb-4">
              <a href="https://ec.europa.eu/consumers/odr" className="text-[#1D2E24] hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              {isGerman
                ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                : 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
            </p>
          </div>

          {/* Section 5: Contact */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {isGerman ? '5. Kontakt' : '5. Contact'}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {isGerman ? 'Telefon:' : 'Phone:'}
                </div>
                <div className="text-gray-600">
                  {isGerman ? '[Telefonnummer einzufügen]' : '[Insert Phone Number]'}
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
