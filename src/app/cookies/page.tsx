"use client";
import React from 'react';
import { useLocale } from '@/context/LocaleContext';
const CookiesPage = () => {
        return (<div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {'Cookie & Tracking Policy'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {'This Cookie Policy explains how Weteextees (Weteextees.com) utilizes cookies, local storage, and similar web technologies to ensure an optimal shopping and browsing experience.'}
          </p>

          {/* What Are Cookies */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'What Are Cookies?'}
            </h2>
            <p>
              {'Cookies are small text files stored on your browser or device when you visit a website. They allow the store to maintain your cart contents, remember your currency preferences, and facilitate seamless navigation.'}
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'Categories of Cookies We Use'}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {'Strictly Necessary Essential Cookies'}
                </h3>
                <p>
                  {'These cookies are required for fundamental site operations, including maintaining cart items, SSL checkout security, and routing.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {'Functional & Preference Cookies'}
                </h3>
                <p>
                  {'These cookies remember essential storefront preferences in English and USD.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">
                  {'Performance & Anonymous Analytics'}
                </h3>
                <p>
                  {'We collect aggregated, anonymized performance metrics to optimize page load speeds, catalog rendering, and checkout stability.'}
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'Managing & Disabling Cookies'}
            </h2>
            <p className="mb-4">
              {'You have full control over cookie settings within your web browser:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li>Clear existing cookies and local cache directly in your browser settings.</li>
                  <li>Configure your browser to block third-party or all non-essential cookies.</li>
                  <li>Set notifications before any cookie is stored on your device.</li>
                </>)}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'Contact Us'}
            </h2>
            <p className="mb-4">
              {'Have questions regarding our cookie practices? Feel free to contact us:'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {'Live Chat:'}
                </div>
                <div className="text-gray-600">
                  {'Mo-Fr 09:00-17:00 Instant Live Chat Support'}
                </div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {'Email:'}
                </div>
                <div className="text-gray-600">contact@weteextees.com</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {'Locations & Logistics:'}
                </div>
                <div className="text-gray-600">
                  🇺🇸 900 AZ-66, Peach Springs, AZ 86434, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
export default CookiesPage;
