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
        <h1 className="text-4xl font-bold text-[#262626] mb-2">Weteextees Terms of Service &amp; Sale</h1>
        <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>
        
        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            Welcome to Weteextees. By accessing our website (Weteextees.com) or purchasing authentic antiques, modern furniture, or collectibles, you agree to these Terms of Service.
          </p>

          {/* Section 1: Overview */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">1. Overview</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weteextees specializes in authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces.</li>
              <li>Every piece is curated, cataloged, and described based on verified provenance, vintage characteristics, and specialist assessment.</li>
              <li>All purchases made through Weteextees are processed under these Terms.</li>
            </ul>
          </div>

          {/* Section 2: Account Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">2. Account Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be 18 years or older to use this service and complete transactions.</li>
              <li>You must provide accurate and complete contact, billing, and delivery information.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized access or security concerns.</li>
            </ul>
          </div>

          {/* Section 3: Orders and Product Availability */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">3. Orders, Authenticity, and Item Availability</h2>
            <p className="mb-4">
              Many of our antique and vintage items are one-of-a-kind. Availability is subject to prior sale until we issue written order confirmation and receive cleared payment.
            </p>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.1 Descriptions and Condition Reports</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We make every effort to display colors, textures, patinas, and dimensions accurately.</li>
              <li>Antiques and vintage collectibles inherently exhibit character marks, age-appropriate patina, and historical wear. These are integral attributes of authentic vintage pieces.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">3.2 Order Confirmation</h3>
            <p className="mb-2">Before completing your purchase:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Review the full item description, condition report, measurements, materials, and price.</li>
              <li>Confirm your delivery address, entry clearances, and contact phone number for carrier scheduling.</li>
              <li>Retain the written order confirmation and invoice for your records.</li>
            </ul>
          </div>

          {/* Section 4: Product Terms */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are shown in the indicated store currency and are subject to change prior to order confirmation.</li>
              <li>Payment must be authorized in full via our secure checkout before an order is dispatched.</li>
              <li>We reserve the right to cancel or refund orders where clerical pricing errors or stock conflicts occur.</li>
            </ul>
          </div>

          {/* Section 5: Shipping and Insurance */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">5. Shipping, Packaging, and Insurance</h2>
            <p className="mb-4">
              All items are shipped using specialized protective packing or crating with tracked, insured couriers.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estimated delivery windows begin after payment clearing and packaging preparation.</li>
              <li>The recipient must inspect external packaging upon arrival and report transit damage promptly.</li>
              <li>Please ensure adequate doorway and hallway clearance for large furniture pieces.</li>
            </ul>
          </div>

          {/* Section 6: Returns and Cancellations */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">6. Returns and Cancellations</h2>
            <p className="mb-4">
              Eligible items may be returned within 30 days of delivery in original condition. Please refer to our Return &amp; Refund Policy for step-by-step instructions.
            </p>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Weteextees is not liable for indirect or consequential loss or business interruption.
            </p>
            <p>
              Nothing in these Terms excludes or limits statutory consumer rights that cannot lawfully be restricted.
            </p>
          </div>

          {/* Section 8: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <div className="font-medium text-[#262626] mb-1">Phone:</div>
                <div className="text-gray-600">+44 7533 408378</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Email:</div>
                <div className="text-gray-600">contact@weteextees.com</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Office Address:</div>
                <div className="text-gray-600">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ</div>
              </div>
              <div>
                <div className="font-medium text-[#262626] mb-1">Website:</div>
                <div className="text-gray-600">Weteextees.com</div>
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
