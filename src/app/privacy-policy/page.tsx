import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#262626] mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none text-gray-700 space-y-8">
        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          Welcome to Weteextees (Weteextees.com). This page explains what personal data we collect, why we use it, how we protect it, and your rights when you browse our website, request condition reports, or place an order for antiques, furniture, or collectibles.
        </p>

        {/* Information We Collect */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information in the following ways:</p>

          <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">Information You Provide</h3>
          <p className="mb-4">You may provide personal information when you:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Create an account</li>
            <li>Inquire about an antique piece, request a condition report, or place an order</li>
            <li>Sign up for our newsletter</li>
            <li>Contact our curation and customer service team</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="mb-4">
            This information may include your name, email address, phone number, billing and delivery address, order correspondence, and payment details processed securely by our payment providers.
          </p>

          <h3 className="text-xl font-bold text-[#262626] mt-6 mb-3">Information Collected Automatically</h3>
          <p className="mb-4">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages viewed</li>
            <li>Time spent on pages</li>
            <li>Cookies and tracking data</li>
          </ul>
          <p>
            This helps us improve your browsing experience and maintain website functionality.
          </p>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Process and fulfill your orders, including provenance documentation and specialized packaging</li>
            <li>Coordinate insured white-glove transport and provide delivery updates</li>
            <li>Respond to condition report inquiries and customer support requests</li>
            <li>Send order confirmations, delivery schedules, and receipts</li>
            <li>Send curated marketing communications with your consent</li>
            <li>Improve our website performance, inventory selection, and user experience</li>
            <li>Prevent fraudulent transactions and protect our customers and platform</li>
          </ul>
        </div>

        {/* Information Sharing */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We share information only with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Specialist shipping and freight carriers to fulfill deliveries</li>
            <li>Secure payment processors to handle checkout authorizations</li>
            <li>Professional service providers who help operate our platform</li>
            <li>Law enforcement or regulatory authorities where required by applicable law</li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Data Security</h2>
          <p className="mb-4">
            We employ modern industry-standard physical, electronic, and administrative safeguards to protect your personal information against unauthorized access, loss, or alteration.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Your Rights</h2>
          <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal data where retention is not legally required</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-3xl font-bold text-[#262626] mt-10 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or your personal information, please contact our data privacy coordinator:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <div>
              <div className="font-medium text-[#262626] mb-1">Live Support:</div>
              <div className="text-gray-600">24/7 Live Chat Support</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">Email:</div>
              <div className="text-gray-600">contact@weteextees.com</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">Office Address:</div>
              <div className="text-gray-600">Hochalmstraße 10, 81825 München, Bayern, Germany</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">Website:</div>
              <div className="text-gray-600">Weteextees.com</div>
            </div>
            <div>
              <div className="font-medium text-[#262626] mb-1">Hours:</div>
              <div className="text-gray-600">Monday to Friday: 9:00 AM to 5:00 PM GMT/BST</div>
              <div className="text-gray-600">Saturday: by appointment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
