import React from 'react';

const TermsPage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#262626] mb-2">Weteex / Teextees Machinery Terms of Sale</h1>
        <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>
        
        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            Weteex / Teextees is the trading brand used on this website by Gooba Global LTD, a company registered in England and Wales under company number 13107870. By accessing our website or purchasing an excavator, you agree to these Terms of Service.
          </p>

          {/* Section 1: Overview */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">1. Overview</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weteex / Teextees sells excavators and related heavy equipment at competitive prices.</li>
              <li>Machines may be new or used and may be sourced through manufacturers, distributors, equipment suppliers, trade partners, or other lawful channels.</li>
              <li>The seller named on your invoice is Gooba Global LTD unless a listing or written sales agreement expressly states otherwise.</li>
              <li>All purchases made through Weteex / Teextees are processed under these Terms.</li>
            </ul>
          </div>

          {/* Section 2: Account Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">2. Account Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be 18 years or older to use this service.</li>
              <li>You must provide accurate and complete contact, billing, delivery, and business information.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized access or security concerns.</li>
            </ul>
          </div>

          {/* Section 3: Marketplace and Private Seller Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">3. Quotations, Orders, and Machine Availability</h2>
            <p className="mb-4">
              Excavator availability can change quickly. A website listing, conversation, or quotation is not acceptance of an order until we issue written confirmation and receive any required payment or deposit.
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.1 Quotations and Deposits</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Quotations are valid only for the period stated and may exclude delivery, taxes, duties, registration, or optional attachments unless expressly included.</li>
              <li>Any deposit requirements, payment milestones, cancellation terms, and estimated delivery arrangements will be stated before the order is confirmed.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.2 Order Confirmation</h3>
            <p className="mb-2">Before completing an excavator purchase:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Review the full machine description, condition, specification, price, and included equipment.</li>
              <li>Confirm the delivery site, access requirements, unloading responsibility, and any transport charge.</li>
              <li>Ask for any additional documents or inspection information you require before paying.</li>
              <li>Retain the written order confirmation and invoice for your records.</li>
            </ul>
            <p className="mb-4">
              We may reject, refund, or cancel an order if a machine becomes unavailable, material listing information is found to be incorrect, payment cannot be verified, or delivery cannot be arranged safely.
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.3 Buyer Responsibility</h3>
            <p className="mb-2">The buyer is responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Selecting a machine suitable for the intended work and operating environment</li>
              <li>Providing safe and accurate delivery-site and access information</li>
              <li>Ensuring that operators are properly trained and that the machine is used, maintained, insured, and registered as required</li>
            </ul>
            <p>
              Nothing in these Terms limits rights or remedies that cannot lawfully be excluded, including applicable consumer rights.
            </p>
          </div>

          {/* Section 4: Product Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">4. Product Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We aim to provide accurate and detailed product descriptions.</li>
              <li>We sell new and used excavators, with the stated condition identified in the individual listing.</li>
              <li>Hours, year, specification, attachments, service history, and inspection information are based on the records available to us and will be described as accurately as reasonably possible.</li>
              <li>Product availability is not guaranteed until an order is processed.</li>
              <li>Prices may change before order confirmation because of availability, exchange rates, transport costs, taxes, duties, or market conditions.</li>
              <li>We reserve the right to modify, limit, or discontinue any product or listing.</li>
            </ul>
          </div>

          {/* Section 5: Sourcing Transparency */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">5. Condition, Inspection, and Specifications</h2>
            <p className="mb-4">
              Information supplied for an excavator may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Manufacturer and model details</li>
              <li>Year, serial or identification information where available</li>
              <li>Recorded operating hours and stated service history</li>
              <li>Included buckets, attachments, accessories, or documentation</li>
              <li>Known defects, wear, repairs, or cosmetic condition disclosed to us</li>
            </ul>
            <p>
              Buyers should review all available information and may request an independent inspection before purchase where practical.
            </p>
            <p className="mt-2">
              Used machinery will show wear consistent with its age and use. Photographs and videos form part of the description but may not reveal every mark, repair, or mechanical issue.
            </p>
          </div>

          {/* Section 6: Shipping Policy */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">6. Shipping Policy</h2>
            <p className="mb-4">
              Excavators are delivered using suitable heavy-equipment transport. Delivery cost and timing are confirmed for each order based on the machine and destination.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery estimates begin after payment clears and any required checks or preparation are complete.</li>
              <li>Dates are estimates unless we expressly agree a guaranteed date in writing.</li>
              <li>The buyer must provide suitable access, ground conditions, and unloading arrangements.</li>
              <li>Failed delivery, redelivery, storage, permits, escorts, cranes, or specialist unloading may incur additional charges.</li>
              <li>Risk transfers in accordance with the applicable consumer law or the written business sales agreement.</li>
              <li>Inspect the machine on delivery and record visible transport damage on the delivery document before signing.</li>
            </ul>
            <p className="mt-4">
              We are not responsible for delays caused by events outside our reasonable control, but this does not affect statutory consumer rights.
            </p>
          </div>

          {/* Section 7: Payment Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">7. Payment Terms</h2>
            <p className="mb-4">We accept the following payment methods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit and debit cards</li>
              <li>Visa, Mastercard, American Express</li>
              <li>PayPal</li>
              <li>Bank transfer where stated on the invoice</li>
              <li>Other methods expressly offered during checkout</li>
            </ul>
            <p className="mt-4">
              All payments must be received in full before an order is processed.
            </p>
          </div>

          {/* Section 8: Returns and Satisfaction Guarantee */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">8. Returns and Satisfaction Guarantee</h2>
            <p className="mb-4">Return and cancellation rights depend on whether you buy as a consumer or a business and on the written terms agreed for the machine.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>UK consumers purchasing at a distance may have a statutory right to cancel within 14 days after delivery, subject to applicable exceptions.</li>
              <li>After notifying us of cancellation, the consumer must return the machine within the legally applicable period.</li>
              <li>The buyer may be responsible for the direct cost of returning bulky machinery where the law permits and where disclosed before purchase.</li>
              <li>A deduction may be made for diminished value caused by handling beyond what is necessary to establish the machine&apos;s nature, characteristics, and functioning.</li>
              <li>Business purchases are governed by the quotation, invoice, or sales agreement and do not receive consumer cancellation rights.</li>
            </ul>
            <p className="mt-4">
              Please read our Return & Exchange Policy and contact us before arranging any return. Statutory rights for faulty or misdescribed goods are not affected.
            </p>
          </div>

          {/* Section 9: Limitation of Liability */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Gooba Global LTD is not liable for indirect or consequential loss, business interruption, loss of profit, loss of contract, hire costs, or downtime arising from a machine or its use.
            </p>
            <p>
              Nothing excludes liability where exclusion is prohibited by law, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.
            </p>
          </div>

          {/* Section 10: Fraud Prevention and Compliance */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">10. Fraud Prevention and Compliance</h2>
            <p className="mb-4">
              Weteex / Teextees monitors orders for unusual activity to protect customers and the company.
            </p>
            <p className="mb-4">
              We reserve the right to cancel or delay orders suspected of fraud or unauthorized use of payment methods.
            </p>
            <p>
              False information, fraudulent payments, sanctions evasion, unlawful export, or attempted misuse of our services is strictly prohibited.
            </p>
          </div>

          {/* Section 11: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">11. Contact Information</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">Phone:</div>
                <div className="text-gray-600">+19083256283</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Email:</div>
                <div className="text-gray-600">contact@weteextees.com</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">UK Registered Office:</div>
                <div className="text-gray-600">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Registered Company:</div>
                <div className="text-gray-600">Gooba Global LTD · Company number 13107870</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Hours:</div>
                <div className="text-gray-600">Monday to Friday, 9:00 AM to 5:00 PM GMT/BST</div>
                <div className="text-gray-600">Saturday, by appointment</div>
                <div className="text-gray-600">Sunday, Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 
