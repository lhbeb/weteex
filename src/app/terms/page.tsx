"use client";
import React from 'react';
import { useLocale } from '@/context/LocaleContext';
const TermsPage = () => {
        const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (<div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-2">
          {'Terms of Service & Conditions'}
        </h1>
        <p className="text-gray-600 mb-8">
          {`Effective Date: ${currentDate}`}
        </p>

        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            {'Welcome to Weteextees. By accessing or purchasing handcrafted modern furniture, dining chairs, tables, and home accents on Weteextees.com, you agree to the terms and conditions outlined below.'}
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'1. Scope & Contracting Entity'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {(<>
                  <li>Weteextees operates an online storefront offering curated designer dining chairs, natural rattan, solid wood furniture, and tables.</li>
                  <li>The contracting entity is Weteextees, located at 900 AZ-66, Peach Springs, AZ 86434, USA.</li>
                  <li>These Terms apply to all orders, inquiries, and contracts made through Weteextees.com.</li>
                </>)}
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'2. Contract Formation & Ordering'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {(<>
                  <li>Product presentations on the website represent an invitation to purchase rather than a legally binding offer.</li>
                  <li>By clicking &quot;Buy Now&quot; or &quot;Complete Checkout&quot;, you submit a binding order for the selected items.</li>
                  <li>Order confirmation with an itemized summary is sent immediately via automated email upon checkout completion.</li>
                </>)}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'3. Pricing, Materials & Availability'}
            </h2>
            <p className="mb-4">
              {'All prices displayed on the store are inclusive of applicable sales taxes/VAT and include free insured freight delivery.'}
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">
              {'3.1 Natural Materials & Craftsmanship'}
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li>We strive to display exact colors, wood grains, and fabric textures accurately.</li>
                  <li>Because solid wood, natural rattan, and marble are authentic materials, subtle grain variations are natural characteristics of premium craftsmanship.</li>
                </>)}
            </ul>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">
              {'3.2 Secure Payment Terms'}
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {(<>
                  <li>We accept verified payment methods including major credit cards, Stripe, and PayPal with full SSL encryption.</li>
                  <li>Payment is charged at the time of order confirmation.</li>
                </>)}
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'4. Shipping & Insured Freight Delivery'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {(<>
                  <li>Standard freight delivery is free of charge within the United States.</li>
                  <li>Shipments are dispatched via professional freight logistics with real-time end-to-end tracking.</li>
                  <li>Standard transit time is 5–10 business days following order processing.</li>
                  <li>All shipments are 100% insured against loss or transit damage.</li>
                </>)}
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'5. 30-Day Return & Cancellation Policy'}
            </h2>
            <p className="mb-4">
              {'We offer an extended 30-day return policy for all unused furniture in its original condition and packaging. Full instructions can be found in our Returns Policy.'}
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'6. Warranty & Limitation of Liability'}
            </h2>
            <p className="mb-4">
              {'All furniture items come with standard consumer statutory warranties against manufacturing defects. Liability is governed by applicable statutory laws.'}
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">
              {'7. Customer Care & Contact'}
            </h2>
            <p className="mb-4">
              {'For inquiries regarding these terms or your order, contact us anytime:'}
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
export default TermsPage;
