import type { Metadata } from 'next';
import Link from 'next/link';
import {
  RotateCcw,
  RefreshCw,
  Clock,
  CreditCard,
  Building2,
  Mail,
  Phone,
  PackageCheck,
  FileText,
  HelpCircle,
  Banknote,
  Inbox,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | Weteextees',
  description:
    'Return, exchange, and cancellation information for authentic antiques, modern furniture, and vintage collectibles purchased from Weteextees, operated by Gooba Global LTD.',
};

export default function ReturnPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'hasMerchantReturnPolicy': {
          '@type': 'MerchantReturnPolicy',
          'name': 'Weteextees Return & Refund Policy',
          'merchantReturnLink': 'https://weteextees.com/return-policy',
          'applicableCountry': ['GB', 'US'],
          'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
          'merchantReturnDays': 30,
          'returnMethod': 'https://schema.org/ReturnByMail',
          'returnFees': 'https://schema.org/ReturnFeesCustomerResponsibility',
          'restockingFee': 0,
          'refundType': 'https://schema.org/FullRefund',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2E24] tracking-tight">
            Return &amp; Refund Policy
          </h1>
          <p className="text-[#5C6B61] mt-3 text-base sm:text-lg max-w-2xl">
            This policy explains cancellation, return, and refund arrangements for authentic antiques, modern furniture, and vintage collectibles purchased from Weteextees.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#1D2E24] mb-5">Quick Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RotateCcw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Returns</span>
                <span className="text-sm font-bold text-gray-900">30-Day Policy</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <RefreshCw className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Exchanges</span>
                <span className="text-sm font-bold text-gray-900">Subject to Inventory</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Clock className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Notice Window</span>
                <span className="text-sm font-bold text-gray-900">14-Day Notice</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Inbox className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Return Method</span>
                <span className="text-sm font-bold text-gray-900">Tracked Courier / Mail</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <Banknote className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Restocking Fee</span>
                <span className="text-sm font-bold text-gray-900">No Restocking Fee</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <CreditCard className="w-5 h-5 text-[#1D2E24] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Refund Time</span>
                <span className="text-sm font-bold text-gray-900">Within 14 Days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Policy Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#DCE5DE] p-6 sm:p-10 space-y-10 text-gray-700">

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-800">
            <strong className="text-[#1D2E24]">Weteextees</strong> is operated by Gooba Global LTD, company number 13107870. Because antique pieces and fine furniture are delicate and unique, please contact our support team before arranging any return so safe packaging and delivery instructions can be coordinated.
          </p>

          {/* 1. Returns */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">1. Returns Eligibility</h2>
            </div>
            <p>We want you to be delighted with every piece you acquire:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">Transit Damage &amp; Inaccuracies</h3>
                <p className="text-sm text-gray-700">
                  Contact us promptly if an item arrives damaged in transit or materially different from the condition report. We will arrange collection, repair, replacement, or a full refund.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
                <h3 className="font-bold text-[#1D2E24] text-base mb-1">Change of Mind</h3>
                <p className="text-sm text-gray-700">
                  Consumers have 14 days after delivery to notify us of cancellation. Items must be returned in their original condition and protective packaging within 14 days of notice.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Exchanges */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">2. Exchanges</h2>
            </div>
            <p><strong>Exchanges are available where suitable inventory exists.</strong> If you wish to exchange a modern chair or decorative piece for an alternative model or era:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact our curation team prior to returning your item.</li>
              <li>We will confirm replacement availability and guide you through the return process.</li>
              <li>Any difference in price will be calculated and settled before replacement dispatch.</li>
            </ul>
          </div>

          {/* 3. Return Window & Conditions */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">3. Item Condition Requirements</h2>
            </div>
            <p className="font-semibold text-gray-900">Returned pieces must be:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In the exact condition received with all accompanying provenance paperwork or authenticity certificates.</li>
              <li>Packed securely with the original or equivalent protective cushioning and crating.</li>
              <li>Accompanied by proof of purchase (order number or email confirmation).</li>
              <li>Free from post-delivery alterations, marks, or structural modifications.</li>
            </ul>
          </div>

          {/* 4. How to Return */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">4. How to Arrange a Return</h2>
            </div>
            <p>Please contact us to obtain <strong>written return authorisation</strong> before sending any item:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Contact us</strong> at <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a> or call <span className="font-semibold">+44 7533 408378</span>.
              </li>
              <li>
                <strong>Receive return instructions</strong>. We will confirm the return address and any special packaging or courier guidelines.
              </li>
              <li>
                <strong>Secure packing &amp; shipment</strong>. Pack the item securely using tracked and insured shipping.
              </li>
              <li>
                <strong>Inspection and refund</strong>. Upon safe receipt and condition review, your refund is credited within statutory timeframes.
              </li>
            </ol>
          </div>

          {/* 5. Restocking Fee */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">5. Fees &amp; Restocking</h2>
            </div>
            <div className="p-4 rounded-xl bg-[#F6F8F5] border border-[#DCE5DE]">
              <p className="font-medium text-gray-800">
                We do <strong>not</strong> charge restocking fees for eligible returns. For change-of-mind returns, the customer is responsible for direct return shipping costs.
              </p>
            </div>
          </div>

          {/* 6. Refund Processing */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">6. Refund Processing</h2>
            </div>
            <p>Approved refunds are credited directly to your original payment method (Stripe, PayPal, card) within 5–14 business days of receipt and verification.</p>
          </div>

          {/* 7. Need Help */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#1D2E24]" />
              <h2 className="text-2xl font-bold text-[#1D2E24]">7. Customer Care</h2>
            </div>
            <p>Our team is here to assist with any questions regarding your piece:</p>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <Phone className="w-5 h-5 text-[#1D2E24]" />
                  <span>Phone</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>+44 7533 408378</div>
                </div>

                <div className="flex items-center gap-2 font-bold text-[#1D2E24] pt-2">
                  <Mail className="w-5 h-5 text-[#1D2E24]" />
                  <span>Email</span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] hover:underline font-semibold">contact@weteextees.com</a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#1D2E24]">
                  <Building2 className="w-5 h-5 text-[#1D2E24]" />
                  <span>Registered Company</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-2">
                  <div>
                    <strong className="text-gray-900 block">Gooba Global LTD · 13107870</strong>
                    71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Footer */}
          <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] p-6 sm:p-8 rounded-xl shadow-md mt-8 border border-[#D1A966]/20">
            <h3 className="text-xl font-bold mb-2 text-[#D1A966]">Our Promise</h3>
            <p className="text-sm sm:text-base text-[#F6F8F5]/85 leading-relaxed">
              We describe every antique piece, modern furniture item, and collectible accurately and resolve questions with transparency and care.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#F6F8F5]/70">Have a question about your piece?</span>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#D1A966] text-[#142019] font-bold text-sm hover:bg-[#DEBC80] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
