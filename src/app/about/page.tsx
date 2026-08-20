import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AboutNotifier from '@/components/AboutNotifier';
import {
  Users,
  Shield,
  Heart,
  Zap,
  CheckCircle2,
  Award,
  Target,
  Sparkles,
  Package,
  Eye,
  DollarSign,
  Leaf,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Weteex / Teextees',
  description:
    'Learn about Weteex / Teextees, a UK-based retailer focused on competitively priced AGT mini excavators, compact machines, and excavator attachments.',
};

export default function AboutPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://weteextees.com/about#webpage',
        'url': 'https://weteextees.com/about',
        'name': 'About Weteex / Teextees',
        'description':
          'Weteex / Teextees is a UK-based retailer focused on competitively priced AGT mini excavators, compact machines, and attachments.',
        'mainEntity': {
          '@id': 'https://weteextees.com/#organization',
        },
      },
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteex / Teextees',
        'url': 'https://weteextees.com',
        'description':
          'Excavator retailer operated by Gooba Global LTD, company number 13107870.',
        'email': 'contact@weteextees.com',
        'telephone': ['+19083256283'],
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '71-75 Shelton Street',
          'addressLocality': 'London',
          'addressRegion': 'Greater London',
          'postalCode': 'WC2H 9JQ',
          'addressCountry': 'GB',
        },
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'telephone': '+19083256283',
            'contactType': 'customer service',
            'areaServed': ['GB'],
            'availableLanguage': ['en'],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f6fb]">
      {/* Schema.org AboutPage & OnlineStore Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AboutNotifier />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#01428a] to-[#01428a] text-[#f1f6fb] py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">About Weteex / Teextees</h1>
          <p className="text-xl text-[#f1f6fb]/85 leading-relaxed max-w-3xl mx-auto">
            Weteex / Teextees is a specialist excavator retailer operated by Gooba Global LTD. We help businesses and contractors compare AGT mini excavators, compact 1-ton machines, attachments, operator features, and clearly presented prices.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        {/* Company Presence */}
        <section className="mb-12 border-y border-[#01428a]/15 py-9">
          <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#01428a] text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#262626]">Proudly UK-based</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-gray-700">
              <p>
                Weteex / Teextees is operated by Gooba Global LTD, a company registered in England and Wales under company number 13107870.
              </p>
              <p>
                Our registered office is 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ. Delivery or collection arrangements for excavators are confirmed individually before purchase.
              </p>
              <Link href="/contact" className="inline-flex font-semibold text-[#01428a] hover:text-[#002b59] hover:underline">
                Contact our sales team
              </Link>
            </div>
          </div>
        </section>

        {/* How We Keep Prices Low */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#01428a]/10 p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#262626]">How We Deliver Competitive Machinery Value</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            Our business model combines focused compact-excavator sourcing, configuration-led comparison, and efficient online sales. That lets buyers compare useful features and pricing without unnecessary showroom overhead.
          </p>

          <div className="space-y-6">
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 border-l-4 border-l-[#01428a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01428a] text-[#f1f6fb] rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Compact excavator focus</h3>
                  <p className="text-gray-700">
                    We concentrate on AGT mini excavators, compact 1-ton machines, and attachments suited to construction, landscaping, property work, and growing equipment fleets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 border-l-4 border-l-[#01428a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01428a] text-[#f1f6fb] rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Competitive purchasing</h3>
                  <p className="text-gray-700">
                    We compare available machines and supplier pricing so each listing can be positioned competitively for its engine, controls, cab, attachments, age, hours, and condition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 border-l-4 border-l-[#01428a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01428a] text-[#f1f6fb] rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Clear machine information</h3>
                  <p className="text-gray-700 mb-2">
                    We aim to state the engine, control system, cab configuration, swing features, attachments, condition, and price clearly so buyers can compare machines confidently.
                  </p>
                  <p className="text-gray-700">
                    Any inspection, testing, servicing, warranty, or refurbishment included with a machine is stated in its individual listing or sales agreement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 border-l-4 border-l-[#01428a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01428a] text-[#f1f6fb] rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Efficient online sales</h3>
                  <p className="text-gray-700">
                    Our online-first approach reduces traditional showroom overhead and allows customers to review available excavators and request delivery information from wherever they are based.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 border-l-4 border-l-[#01428a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#01428a] text-[#f1f6fb] rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#262626] mb-2">Features matched to price</h3>
                  <p className="text-gray-700">
                    We focus on fair margins and transparent configurations, helping customers see exactly which operator and machine features are included at each price point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Private Sellers Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#01428a]/10 p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#01428a]/10 rounded-xl">
              <Users className="h-8 w-8 text-[#01428a]" />
            </div>
            <h2 className="text-3xl font-bold text-[#262626]">How We Select Our Excavators</h2>
          </div>
          <p className="text-gray-700 mb-4 text-lg">
            We work with equipment suppliers and trade partners to identify AGT mini excavators, compact machines, and attachments that balance capability, operator control, configuration, condition, and price.
          </p>
          <p className="text-gray-700 mb-6">
            Before a machine is offered, we gather the available information needed to describe it accurately. Depending on the listing and supplier, this may include:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#f1f6fb] rounded-lg p-4 border border-[#01428a]/10">
              <CheckCircle2 className="h-6 w-6 text-[#01428a] mb-2" />
              <p className="text-gray-700 font-medium">reviewing the stated condition and operating hours</p>
            </div>
            <div className="bg-[#f1f6fb] rounded-lg p-4 border border-[#01428a]/10">
              <Zap className="h-6 w-6 text-[#01428a] mb-2" />
              <p className="text-gray-700 font-medium">checking the available specification and configuration details</p>
            </div>
            <div className="bg-[#f1f6fb] rounded-lg p-4 border border-[#01428a]/10">
              <DollarSign className="h-6 w-6 text-[#01428a] mb-2" />
              <p className="text-gray-700 font-medium">comparing the price with relevant market information</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 bg-[#f1f6fb] rounded-lg p-4 border border-[#01428a]/10">
            The exact checks completed for each excavator are stated in the product listing or confirmed in writing before the sale.
          </p>

          <div className="bg-[#f1f6fb] rounded-lg p-6 border border-[#01428a]/10">
            <h3 className="text-xl font-bold text-[#262626] mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#01428a]" />
              What customers can expect
            </h3>
            <p className="text-gray-700 mb-3">
              Each listing identifies the excavator, its key specifications, its stated condition, its price, and the available delivery arrangements.
            </p>
            <p className="text-gray-700 mb-3">
              Customers can contact our team before ordering to request clarification about a machine, delivery, payment, or the documents included with the sale.
            </p>
            <p className="text-gray-700">
              We recommend that every buyer reviews the complete listing and sales terms and, where appropriate, arranges an independent inspection before purchase.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-[#01428a] to-[#01428a] rounded-2xl shadow-lg p-10 mb-12 text-[#f1f6fb] text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d8941a]/15 rounded-full mb-6">
            <Target className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-[#f1f6fb]/85 mb-4">
            To make capable mini excavators and useful attachments more accessible through competitive pricing, configuration clarity, and responsive machinery sales support.
          </p>
          <p className="text-lg text-[#f1f6fb]/85">
            Whether you prioritise a RATO or Kubota engine option, pilot controls, an enclosed cab, side swing, or a hydraulic thumb, our aim is to help you compare suitable machinery without paying for features you do not need.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#01428a]/10 p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#d8941a] rounded-xl">
              <Sparkles className="h-8 w-8 text-[#01428a]" />
            </div>
            <h2 className="text-3xl font-bold text-[#262626]">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-[#01428a]" />
                <h3 className="text-xl font-bold text-[#262626]">Curated Inventory</h3>
              </div>
              <p className="text-gray-700">We focus on compact excavators and the configurations most relevant to contractors, property professionals, and small machinery fleets.</p>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-6 w-6 text-[#01428a]" />
                <h3 className="text-xl font-bold text-[#262626]">Transparent Product Details</h3>
              </div>
              <p className="text-gray-700">We clearly describe the stated engine, controls, cab, attachments, hours, and condition available for each machine.</p>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-[#01428a]" />
                <h3 className="text-xl font-bold text-[#262626]">Real Value</h3>
              </div>
              <p className="text-gray-700">We compare configuration, supplier pricing, and relevant market information to keep our machinery offers competitive.</p>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-6 w-6 text-[#01428a]" />
                <h3 className="text-xl font-bold text-[#262626]">Customer Focus</h3>
              </div>
              <p className="text-gray-700">Our team provides clear pre-sale information and coordinates suitable delivery arrangements for heavy machinery.</p>
            </div>

            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10 md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-6 w-6 text-[#01428a]" />
                <h3 className="text-xl font-bold text-[#262626]">Practical Equipment Value</h3>
              </div>
              <p className="text-gray-700">Offering suitable used excavators can extend the useful life of heavy equipment while giving buyers a cost-effective alternative to purchasing new.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#01428a]/10 p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#d8941a] rounded-xl">
              <Heart className="h-8 w-8 text-[#01428a]" />
            </div>
            <h2 className="text-3xl font-bold text-[#262626]">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#f1f6fb] rounded-xl p-6 text-center border border-[#01428a]/10">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8941a]">
                <Shield className="h-8 w-8 text-[#01428a]" />
              </div>
              <h3 className="font-bold text-[#262626] text-lg">Integrity</h3>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 text-center border border-[#01428a]/10">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8941a]">
                <Award className="h-8 w-8 text-[#01428a]" />
              </div>
              <h3 className="font-bold text-[#262626] text-lg">Quality</h3>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 text-center border border-[#01428a]/10">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8941a]">
                <Users className="h-8 w-8 text-[#01428a]" />
              </div>
              <h3 className="font-bold text-[#262626] text-lg">Customer Trust</h3>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 text-center border border-[#01428a]/10">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8941a]">
                <Zap className="h-8 w-8 text-[#01428a]" />
              </div>
              <h3 className="font-bold text-[#262626] text-lg">Innovation and continuous improvement</h3>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-[#01428a] to-[#01428a] rounded-2xl shadow-lg p-10 mb-12 text-[#f1f6fb]">
          <h3 className="text-3xl font-bold mb-8 text-center">Company Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#f1f6fb]/10 backdrop-blur-sm rounded-xl border border-[#f1f6fb]/20">
              <div className="text-4xl font-bold mb-2">13107870</div>
              <div className="text-[#f1f6fb]/80 text-sm">company number</div>
            </div>
            <div className="text-center p-6 bg-[#f1f6fb]/10 backdrop-blur-sm rounded-xl border border-[#f1f6fb]/20">
              <div className="text-4xl font-bold mb-2">UK</div>
              <div className="text-[#f1f6fb]/80 text-sm">registered company</div>
            </div>
            <div className="text-center p-6 bg-[#f1f6fb]/10 backdrop-blur-sm rounded-xl border border-[#f1f6fb]/20">
              <div className="text-4xl font-bold mb-2">Excavators</div>
              <div className="text-[#f1f6fb]/80 text-sm">specialist inventory</div>
            </div>
            <div className="text-center p-6 bg-[#f1f6fb]/10 backdrop-blur-sm rounded-xl border border-[#f1f6fb]/20">
              <div className="text-4xl font-bold mb-2">Competitive</div>
              <div className="text-[#f1f6fb]/80 text-sm">pricing approach</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#01428a]/10 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#01428a]/10 rounded-xl">
              <Phone className="h-8 w-8 text-[#01428a]" />
            </div>
            <h3 className="text-2xl font-bold text-[#262626]">Contact Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#01428a]" />
                <div className="font-medium text-[#262626]">UK Registered Office</div>
              </div>
              <div className="text-gray-600 ml-8">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ</div>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#01428a]" />
                <div className="font-medium text-[#262626]">Company Details</div>
              </div>
              <div className="text-gray-600 ml-8">Gooba Global LTD · Company number 13107870</div>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-[#01428a]" />
                <div className="font-medium text-[#262626]">Phone</div>
              </div>
              <div className="ml-8 space-y-3 text-gray-600">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-1">
                  <a href="tel:+19083256283" className="whitespace-nowrap hover:text-[#01428a] transition-colors">
                    +19083256283
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-[#01428a]" />
                <div className="font-medium text-[#262626]">Email:</div>
              </div>
              <div className="text-gray-600 ml-8">contact@weteextees.com</div>
            </div>
            <div className="bg-[#f1f6fb] rounded-xl p-6 border border-[#01428a]/10">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#01428a]" />
                <div className="font-medium text-[#262626]">Business Hours:</div>
              </div>
              <div className="text-gray-600 ml-8 space-y-1">
                <div>Monday to Friday, 9:00 AM to 5:00 PM GMT/BST</div>
                <div>Saturday, by appointment</div>
                <div>Sunday, Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
