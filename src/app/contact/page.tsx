"use client";

import { useState } from 'react';
import { Mail, MessageSquare, MapPin, Building2 } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

export default function ContactPage() {
  const { isGerman } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactReason: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://weteextees.com/contact#webpage',
        'url': 'https://weteextees.com/contact',
        'name': 'Contact Us | Weteextees',
        'description':
          'Contact Weteextees about modern furniture, custom dining tables, designer chairs, and insured delivery.',
        'mainEntity': {
          '@id': 'https://weteextees.com/#organization',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'contactType': 'customer service',
            'email': 'contact@weteextees.com',
            'areaServed': ['DE', 'EU', 'US', 'CA', 'GB'],
            'availableLanguage': ['en', 'de'],
          },
        ],
        'address': [
          {
            '@type': 'PostalAddress',
            'streetAddress': 'Hochalmstraße 10',
            'addressLocality': 'München',
            'addressRegion': 'Bayern',
            'postalCode': '81825',
            'addressCountry': 'DE',
          },
          {
            '@type': 'PostalAddress',
            'streetAddress': '900 AZ-66',
            'addressLocality': 'Peach Springs',
            'addressRegion': 'AZ',
            'postalCode': '86434',
            'addressCountry': 'US',
          },
        ],
      },
    ],
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setError('');
    setShowSuccess(false);
    try {
      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || (isGerman ? 'Nachricht konnte nicht gesendet werden.' : 'Failed to send message.'));
        setIsSending(false);
        return;
      }
      setShowSuccess(true);
      setFormData({ name: '', email: '', contactReason: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setError(isGerman ? 'Nachricht konnte nicht gesendet werden.' : 'Failed to send message.');
    } finally {
      setIsSending(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      {/* Schema.org ContactPage & Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-[#262626] mb-2">
                {isGerman ? 'Kontakt & Kundenservice' : 'Contact & Customer Support'}
              </h1>
              <p className="text-gray-600 mb-8">
                {isGerman
                  ? 'Haben Sie Fragen zu unseren modernen Möbeln, Esstischen, Stühlen, Ihrer Bestellung oder der Speditionslieferung? Unser Kundenservice berät Sie gerne.'
                  : 'Have questions about our modern dining chairs, solid wood tables, your existing order, or insured freight delivery? Our support team is ready to assist you.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {isGerman ? 'Name *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2E24] focus:border-transparent"
                        disabled={isSending}
                        placeholder={isGerman ? 'Vor- und Nachname' : 'First & Last Name'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {isGerman ? 'E-Mail-Adresse *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2E24] focus:border-transparent"
                        disabled={isSending}
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactReason" className="block text-sm font-medium text-gray-700 mb-1">
                        {isGerman ? 'Grund Ihrer Anfrage' : 'Reason for Contact'} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contactReason"
                        name="contactReason"
                        value={formData.contactReason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2E24] focus:border-transparent bg-white"
                        disabled={isSending}
                      >
                        <option value="">{isGerman ? 'Bitte wählen' : 'Please select'}</option>
                        <option value="product-question">{isGerman ? 'Frage zu Möbeln & Stühlen' : 'Furniture & Chairs Inquiry'}</option>
                        <option value="order-inquiry">{isGerman ? 'Frage zu bestehender Bestellung' : 'Existing Order Status'}</option>
                        <option value="track-order">{isGerman ? 'Sendungsverfolgung / Lieferstatus' : 'Shipping & Tracking'}</option>
                        <option value="return-refund">{isGerman ? 'Rückgabe oder Widerruf' : 'Returns & Refunds'}</option>
                        <option value="materials">{isGerman ? 'Material & Maße' : 'Materials & Dimensions'}</option>
                        <option value="partnership">{isGerman ? 'Gewerbliche Kooperationen' : 'Commercial & Wholesale'}</option>
                        <option value="general">{isGerman ? 'Allgemeine Anfrage' : 'General Inquiry'}</option>
                        <option value="other">{isGerman ? 'Sonstiges' : 'Other'}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        {isGerman ? 'Betreff *' : 'Subject *'}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2E24] focus:border-transparent"
                        disabled={isSending}
                        placeholder={isGerman ? 'Worum geht es?' : 'What is your inquiry about?'}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {isGerman ? 'Ihre Nachricht *' : 'Your Message *'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2E24] focus:border-transparent"
                        disabled={isSending}
                        placeholder={isGerman ? 'Beschreiben Sie Ihr Anliegen möglichst genau...' : 'Please describe your inquiry in detail...'}
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full bg-[#D1A966] hover:bg-[#DEBC80] text-[#142019] font-bold py-3 rounded-lg transition-colors duration-300 ${isSending ? 'opacity-60 cursor-not-allowed' : ''}`}
                      disabled={isSending}
                    >
                      {isSending
                        ? (isGerman ? 'Wird gesendet...' : 'Sending...')
                        : (isGerman ? 'Nachricht absenden' : 'Send Message')}
                    </button>
                    {error && (
                      <div className="mt-2 text-red-600 text-sm">{error}</div>
                    )}
                  </form>
                </div>
                {/* Contact Information */}
                <div className="bg-[#F6F8F5] p-6 rounded-lg border border-[#DCE5DE]">
                  <h2 className="text-xl font-bold text-[#1E2621] mb-6">
                    {isGerman ? 'Kontaktdaten' : 'Contact Information'}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Building2 className="h-6 w-6 text-[#1D2E24] mt-1 shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-[#1E2621]">
                          {isGerman ? 'Standorte & Logistik' : 'Locations & Logistics'}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          <span className="font-semibold">🇩🇪 {isGerman ? 'Deutschland:' : 'Germany:'}</span> Hochalmstraße 10, 81825 München, Bavaria
                        </p>
                        <p className="text-gray-600 mt-1">
                          <span className="font-semibold">🇺🇸 {isGerman ? 'USA:' : 'USA:'}</span> 900 AZ-66, Peach Springs, AZ 86434, United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-[#1D2E24] mt-1 shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-[#1E2621]">
                          {isGerman ? 'Marke & Online-Shop' : 'Brand & Online Store'}
                        </h3>
                        <p className="text-gray-600 mt-1">Weteextees · Weteextees.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="h-6 w-6 text-[#1D2E24] mt-1 shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-[#1E2621]">
                          {isGerman ? 'Live-Chat-Support' : 'Instant Live Chat'}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          <span className="font-semibold">{isGerman ? 'Erreichbarkeit:' : 'Availability:'}</span> {isGerman ? 'Montag bis Freitag, 09:00 - 17:00 Uhr' : 'Monday to Friday, 9:00 AM - 5:00 PM'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-[#1D2E24] mt-1 shrink-0" />
                      <div className="ml-4">
                        <h3 className="font-medium text-[#1E2621]">
                          {isGerman ? 'E-Mail' : 'Email'}
                        </h3>
                        <p className="text-gray-600 mt-1">contact@weteextees.com</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-medium text-[#262626] mb-2">
                        {isGerman ? 'Servicezeiten' : 'Customer Support Hours'}
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>{isGerman ? 'Live-Chat & Support: Montag bis Freitag, 09:00 - 17:00 Uhr' : 'Live Chat & Support: Monday to Friday, 9:00 AM - 5:00 PM'}</li>
                        <li>{isGerman ? 'Wochenende: Anfragen werden am nächsten Werktag beantwortet.' : 'Weekends: Inquiries answered the next business day.'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-[#1D2E24] text-white px-6 py-3 rounded-lg shadow-lg">
          {isGerman ? 'Ihre Nachricht wurde erfolgreich versendet!' : 'Your message has been successfully sent!'}
        </div>
      )}
    </div>
  );
}
