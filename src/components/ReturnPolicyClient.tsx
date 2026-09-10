"use client";
import React from 'react';
import Link from 'next/link';
import { RotateCcw, RefreshCw, Clock, CreditCard, Building2, Mail, MessageSquare, PackageCheck, HelpCircle, Banknote, Inbox, ShieldCheck, CheckCircle2, } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';
export default function ReturnPolicyClient() {
        return (<div className="min-h-screen flex flex-col bg-[#F6F8F5] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D1A966]/30 bg-[#1D2E24] px-3.5 py-1.5 text-xs font-semibold text-[#D1A966] mb-3">
            <ShieldCheck className="h-4 w-4"/>
            {'30-Day Risk-Free Returns Policy'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2E24] tracking-tight">
            {'Return & Refund Policy (30 Days)'}
          </h1>
          <p className="text-[#5C6B61] mt-3 text-base sm:text-lg max-w-2xl">
            {'Find complete information regarding our 30-day return policy, statutory cancellations, and hassle-free refund process at Weteextees.'}
          </p>
        </div>

        {/* Quick Summary Highlights */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#1D2E24] mb-5">
            {'Policy Highlights at a Glance'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RotateCcw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Return Window'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {'30 Calendar Days'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Inbox className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Return Shipping Cost'}
                </span>
                <span className="text-sm font-bold text-[#1D2E24]">
                  {'Free ($0.00)'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Banknote className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Restocking Fee'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {'$0.00 (Zero Fee)'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <CreditCard className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Refund Processing'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {'5 Business Days'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <PackageCheck className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Return Label'}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {'In the Box, Free'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RefreshCw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5"/>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {'Exchanges'}
                </span>
                <span className="text-sm font-bold text-[#1D2E24]">
                  {'Accepted (Free)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Policy Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-10 space-y-10 text-gray-700">
          <p className="text-lg leading-relaxed text-gray-800">
            {(<>
                At <strong className="text-[#1D2E24]">Weteextees</strong>, your complete satisfaction is our highest priority. If a furniture piece does not fit your space or aesthetic expectations, we provide a smooth, 100% free 30-day return process.
              </>)}
          </p>

          {/* Section 1 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'1. 30-Day Return Window, Exchanges & Statutory Rights'}
              </h2>
            </div>
            <p>
              {'We accept returns for both defective and non-defective products, as well as free exchanges, within 30 calendar days of delivery:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D1A966]"/>
                  {'100% Free Returns & Exchanges'}
                </h3>
                <p className="text-sm text-gray-700">
                  {'Return shipping by mail or freight carrier is 100% free. A prepaid return label is included in the package or provided digitally. Free exchanges are accepted.'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D1A966]"/>
                  {'30-Day Window (Defective & Non-Defective)'}
                </h3>
                <p className="text-sm text-gray-700">
                  {'You may return items in new condition (original packaging) within 30 days of receipt. Damaged or defective items receive immediate free replacement.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'2. Return Eligibility & Condition (New Only)'}
              </h2>
            </div>
            <p className="font-semibold text-gray-900">
              {'To qualify for a 100% full refund, please ensure:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(<>
                  <li>Items must be in new, unused condition with no signs of wear, stains, or assembly damage.</li>
                  <li>Furniture must be packed securely in its original protective packaging with corner padding.</li>
                  <li>Include your packing slip or order confirmation number inside the return shipment.</li>
                  <li>No unauthorized structural modifications or third-party repairs.</li>
                </>)}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'3. How to Initiate a Return (By Mail / Carrier)'}
              </h2>
            </div>
            <p>{'Follow these simple steps to complete your return:'}</p>
            <ol className="list-decimal pl-6 space-y-3">
              {(<>
                  <li>
                    <strong>Use Prepaid Label in Package or Request Online</strong>: Use the free return label included inside the package, or contact <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> / Live Chat (Mon–Fri 09:00–17:00).
                  </li>
                  <li>
                    <strong>Secure Packaging</strong>: Repack the furniture piece securely in its original carton with edge protection.
                  </li>
                  <li>
                    <strong>Carrier Handover / Drop-off</strong>: Drop off at the carrier postal point or hand over during scheduled freight pickup.
                  </li>
                  <li>
                    <strong>Inspection &amp; 100% Full Refund</strong>: Once received and inspected at our warehouse, your full refund is processed within 5 business days to your original payment method.
                  </li>
                </>)}
            </ol>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'4. Restocking Fees & Costs'}
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <p className="font-semibold text-gray-900">
                {'We charge $0.00 restocking fees (No cost / 0%) and $0.00 return shipping fees.'}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {'You will always receive a 100% full refund of the purchase price paid.'}
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'5. Refund Processing Time (5 Days)'}
              </h2>
            </div>
            <p>
              {'Refunds are automatically issued to your original payment method (Credit Card, Stripe, PayPal) within 5 business days following receipt and inspection at our fulfillment warehouse.'}
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#1D2E24]"/>
              <h2 className="text-2xl font-bold text-[#1D2E24]">
                {'6. Customer Support & Returns Hubs'}
              </h2>
            </div>
            <p>
              {'Our support team is available Mon–Fri 09:00–17:00 to assist with your return:'}
            </p>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <MessageSquare className="w-5 h-5 text-[#1D2E24]"/>
                  <span>{'Live Chat'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>{'Monday to Friday, 9:00 AM – 5:00 PM'}</div>
                </div>

                <div className="flex items-center gap-2 font-bold text-[#1D2E24] pt-2">
                  <Mail className="w-5 h-5 text-[#1D2E24]"/>
                  <span>{'Email'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <Building2 className="w-5 h-5 text-[#1D2E24]"/>
                  <span>{'Locations & Returns Hubs'}</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-2">
                  <div>
                    <strong className="text-gray-900 block">🇺🇸 USA &amp; International:</strong>
                    900 AZ-66, Peach Springs, AZ 86434, United States
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Footer */}
          <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] p-6 sm:p-8 rounded-xl shadow-md mt-8 border border-[#D1A966]/20">
            <h3 className="text-xl font-bold mb-2 text-[#D1A966]">
              {'Our Quality & Satisfaction Promise'}
            </h3>
            <p className="text-sm sm:text-base text-[#F6F8F5]/85 leading-relaxed">
              {'Your happiness with your home space is our ultimate mission. If you ever have any questions about delivery, assembly, or returns, our team is at your disposal Monday through Friday from 09:00 to 17:00.'}
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#F6F8F5]/70">
                {'Have questions about a piece?'}
              </span>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D1A966] text-[#142019] font-bold text-sm hover:bg-[#DEBC80] transition-colors">
                {'Contact Support'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
