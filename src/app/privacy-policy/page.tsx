"use client";
import React from 'react';
import { useLocale } from '@/context/LocaleContext';
const PrivacyPolicyPage = () => {
        return (<div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-8">
          {'Privacy Policy (GDPR & CCPA Compliant)'}
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            {'Welcome to Weteextees (Weteextees.com). Protecting your privacy and personal data is a top priority for us. This Privacy Policy details the types of information we collect, how it is used and protected, and your rights under GDPR, CCPA, and international data protection standards.'}
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'1. Data Controller & Entity'}
            </h2>
            <p className="mb-4">
              {'The data controller responsible for operations is:'}
              <br />
              <strong>Weteextees</strong>
              <br />
              {'USA Location:'} 900 AZ-66, Peach Springs, AZ 86434, USA
              <br />
              {'Email:'} <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:underline">contact@weteextees.com</a>
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'2. Collection & Storage of Personal Data'}
            </h2>
            <p className="mb-4">
              {'We collect and process personal data when you:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li>Visit our website (secure server logfiles, IP address, device & browser info, pages viewed)</li>
                  <li>Place an order (full name, shipping address, billing address, email address, payment confirmation)</li>
                  <li>Reach out to our customer care or Mo-Fr 09:00-17:00 Live Chat support</li>
                </>)}
            </ul>
            <p className="mb-4">
              {'Data is processed lawfully pursuant to contract fulfillment (order execution), customer support, and legitimate interests in website security and fraud prevention.'}
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'3. Sharing Information with Third Parties'}
            </h2>
            <p className="mb-4">
              {'Your data is only shared with verified service providers strictly necessary to process and deliver your order:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li><strong>Freight & Logistics Partners</strong> (to securely deliver your furniture orders to your door)</li>
                  <li><strong>Certified Payment Gateways</strong> (e.g. Stripe, PayPal with full PCI-DSS encryption)</li>
                  <li><strong>Hosting & Security Infrastructure</strong> to maintain platform integrity and SSL safety</li>
                </>)}
            </ul>
            <p>
              {'We strictly NEVER sell, rent, or trade your personal data to third-party advertisers.'}
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'4. Data Security & 256-Bit SSL Encryption'}
            </h2>
            <p className="mb-4">
              {'We employ state-of-the-art 256-bit SSL/TLS encryption across our entire platform to ensure that your checkout credentials and personal information remain completely confidential and tamper-proof.'}
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'5. Your Privacy Rights'}
            </h2>
            <p className="mb-4">
              {'Under applicable privacy laws (GDPR, CCPA), you are entitled to:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
                  <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data.</li>
                  <li><strong>Right to Restrict or Object:</strong> Restrict or object to specific processing activities.</li>
                  <li><strong>Right to Data Portability:</strong> Obtain and reuse your personal data in a standard format.</li>
                </>)}
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'6. Privacy Contact & Inquiries'}
            </h2>
            <p className="mb-4">
              {'For any privacy-related requests or to exercise your rights, please reach out to:'}
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">
                  {'Live Chat:'}
                </div>
                <div className="text-gray-600">
                  {'Mo-Fr 09:00-17:00 Instant Live Chat Support on site'}
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
export default PrivacyPolicyPage;
