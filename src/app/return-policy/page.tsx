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
  title: 'Machinery Return Policy | Weteex / Teextees',
  description:
    'Return and cancellation information for excavators purchased from Weteex / Teextees, operated by Gooba Global LTD.',
};

export default function ReturnPolicyPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'OnlineStore',
    '@id': 'https://weteextees.com/#organization',
    'name': 'Weteex / Teextees',
    'url': 'https://weteextees.com',
    'hasMerchantReturnPolicy': {
      '@type': 'MerchantReturnPolicy',
      'name': 'Weteex / Teextees Machinery Return Policy',
      'merchantReturnLink': 'https://weteextees.com/return-policy',
      'applicableCountry': ['GB'],
      'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
      'merchantReturnDays': 14,
      'returnMethod': 'https://schema.org/ReturnByMail',
      'returnFees': 'https://schema.org/ReturnFeesCustomerResponsibility',
      'restockingFee': 0,
      'refundType': 'https://schema.org/FullRefund',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#01428a] tracking-tight">
            Return & Exchange Policy
          </h1>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl">
            This policy explains cancellation, return, and refund arrangements for excavators purchased from Weteex / Teextees. Your statutory rights are not affected.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-10">
          <h2 className="text-lg font-bold text-[#01428a] mb-5">Quick Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <RotateCcw className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Returns</span>
                <span className="text-sm font-bold text-gray-900">Subject to Eligibility</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <RefreshCw className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Exchanges</span>
                <span className="text-sm font-bold text-gray-900">Subject to Availability</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <Clock className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Return Window</span>
                <span className="text-sm font-bold text-gray-900">14-Day Consumer Notice</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <Inbox className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Return Method</span>
                <span className="text-sm font-bold text-gray-900">Authorised Machinery Transport</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <Banknote className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Restocking Fee</span>
                <span className="text-sm font-bold text-gray-900">No Restocking Fee</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <CreditCard className="w-5 h-5 text-[#01428a] flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Refund Time</span>
                <span className="text-sm font-bold text-gray-900">Within Legal Timeframes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Policy Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 space-y-10 text-gray-700">

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-800">
            <strong className="text-[#01428a]">Weteex / Teextees</strong> is operated by Gooba Global LTD, company number 13107870. Because excavators are large, high-value machines, you must contact us before arranging any return so suitable transport and a return location can be confirmed.
          </p>

          {/* 1. Returns */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">1. Returns</h2>
            </div>
            <p>Return rights depend on whether you purchased as a <strong>consumer or a business</strong> and on the reason for return:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                <h3 className="font-bold text-blue-900 text-base mb-1">Defective & Damaged Items</h3>
                <p className="text-sm text-blue-800">
                  Contact us promptly if an excavator is damaged in transit, faulty, or materially different from its description. We will assess the issue and provide the remedy required by applicable law.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                <h3 className="font-bold text-blue-900 text-base mb-1">Change of Mind</h3>
                <p className="text-sm text-blue-800">
                  UK consumers buying at a distance generally have 14 days after delivery to tell us they wish to cancel, subject to legal exceptions. Business buyers do not have this statutory cooling-off right.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Exchanges */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">2. Exchanges</h2>
            </div>
            <p><strong>Exchanges may be available.</strong> If you need a different excavator or configuration:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us before operating or modifying the machine.</li>
              <li>We will confirm whether a suitable alternative is available and provide written transport instructions.</li>
              <li>Any price difference, transport charge, and timing will be agreed before the exchange proceeds.</li>
            </ul>
          </div>

          {/* 3. Return Window & Conditions */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">3. Return Window and Conditions</h2>
            </div>
            <p>UK consumers purchasing at a distance should notify us of cancellation within <strong>14 calendar days</strong> after delivery and return the machine within the legally applicable period after notice.</p>
            <p className="font-semibold text-gray-900">The excavator must be:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In the condition received and not operated beyond what is reasonably necessary to establish its nature, characteristics, and functioning.</li>
              <li>Accompanied by proof of purchase (order number or confirmation email).</li>
              <li>Free from post-delivery damage, modification, contamination, or excessive wear.</li>
            </ul>
          </div>

          {/* 4. How to Return by Mail */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">4. How to Arrange a Return</h2>
            </div>
            <p>Do not send or transport an excavator without <strong>written return authorisation</strong>. Here&apos;s how it works:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Contact us</strong> at <a href="mailto:contact@weteextees.com" className="text-blue-600 hover:underline font-semibold">contact@weteextees.com</a> or call <span className="font-semibold">+19083256283</span>.
              </li>
              <li>
                <strong>Receive written instructions</strong>. We will confirm eligibility, the return address, and suitable machinery transport requirements.
              </li>
              <li>
                <strong>Arrange safe transport</strong>. For a change-of-mind cancellation, the buyer is responsible for direct return costs where the law permits and where those costs were disclosed before purchase.
              </li>
              <li>
                <strong>Inspection and refund</strong>. We may inspect the returned machine and process any refund within the timeframe required by law.
              </li>
            </ol>
          </div>

          {/* 5. Restocking Fee */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">5. Fees and Diminished Value</h2>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-medium text-gray-800">
                We do <strong>not</strong> apply an arbitrary restocking fee to a valid consumer cancellation. We may make a lawful deduction for diminished value caused by handling or use beyond what is necessary to inspect the machine. Return transport and failed-collection costs may also apply where permitted.
              </p>
            </div>
          </div>

          {/* 6. Refund Processing */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">6. Refund Processing</h2>
            </div>
            <p>Approved refunds are credited to the original payment method unless another method is expressly agreed.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inspection:</strong> We will inspect the excavator after it is returned.</li>
              <li><strong>Refund issued:</strong> Within the timeframe required by applicable law; for UK consumer cancellations this is generally no later than 14 days after receipt of the returned goods or acceptable evidence of return.</li>
            </ul>
          </div>

          {/* 7. Marketplace Sellers */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">7. Business Purchases</h2>
            </div>
            <p>
              Purchases made wholly or mainly for business purposes are governed by the quotation, invoice, and any written sales agreement. Consumer cooling-off rights do not apply to business purchases. Agreed deposits, transport costs, and cancellation charges may be non-refundable.
            </p>
          </div>

          {/* 8. Contact */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#01428a]" />
              <h2 className="text-2xl font-bold text-[#01428a]">8. Need Help?</h2>
            </div>
            <p>Our team is here to assist you with any return or exchange:</p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#01428a]">
                  <Phone className="w-5 h-5 text-[#01428a]" />
                  <span>Phone</span>
                </div>
                <div className="text-sm text-gray-600 pl-7 space-y-1">
                  <div>+19083256283</div>
                </div>

                <div className="flex items-center gap-2 font-bold text-[#01428a] pt-2">
                  <Mail className="w-5 h-5 text-[#01428a]" />
                  <span>Email</span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  <a href="mailto:contact@weteextees.com" className="text-blue-600 hover:underline font-semibold">contact@weteextees.com</a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#01428a]">
                  <Building2 className="w-5 h-5 text-[#01428a]" />
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
          <div className="bg-gradient-to-r from-[#01428a] to-[#00366f] text-white p-6 sm:p-8 rounded-xl shadow-md mt-8">
            <h3 className="text-xl font-bold mb-2">Our Promise</h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              We aim to describe every excavator accurately and resolve legitimate concerns fairly. This policy does not limit any statutory rights that cannot lawfully be excluded.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-gray-300">Have a question about your order?</span>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-[#01428a] font-bold text-sm hover:bg-gray-100 transition-colors"
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
