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
  title: 'About Us | Weteextees',
  description:
    'Learn about Weteextees, your premier destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces.',
};

export default function AboutPage() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://weteextees.com/about#webpage',
        'url': 'https://weteextees.com/about',
        'name': 'About Weteextees',
        'description':
          'Weteextees is your destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces.',
        'mainEntity': {
          '@id': 'https://weteextees.com/#organization',
        },
      },
      {
        '@type': 'OnlineStore',
        '@id': 'https://weteextees.com/#organization',
        'name': 'Weteextees',
        'url': 'https://weteextees.com',
        'description':
          'Antiques and modern furniture retailer operated by Gooba Global LTD, company number 13107870.',
        'email': 'contact@weteextees.com',
        'telephone': ['+447533408378'],
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
            'telephone': '+447533408378',
            'contactType': 'customer service',
            'areaServed': ['GB', 'US', 'EU'],
            'availableLanguage': ['en'],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5]">
      {/* Schema.org AboutPage & OnlineStore Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AboutNotifier />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] py-16 border-b border-[#D1A966]/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#F6F8F5]">About Weteextees</h1>
          <p className="text-xl text-[#F6F8F5]/90 leading-relaxed max-w-3xl mx-auto">
            Weteextees is your destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces. We connect design enthusiasts and collectors with exceptional craftsmanship.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        {/* Company Presence */}
        <section className="mb-12 border-y border-[#DCE5DE] py-9">
          <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1D2E24] text-[#D1A966]">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#1E2621]">Proudly UK-based</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-gray-700">
              <p>
                Weteextees is operated by Gooba Global LTD, a company registered in England and Wales under company number 13107870.
              </p>
              <p>
                Our registered office is 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ. Deliveries and viewings for specialty pieces are arranged with care.
              </p>
              <Link href="/contact" className="inline-flex font-semibold text-[#1D2E24] hover:text-[#D1A966] hover:underline">
                Contact our curation team
              </Link>
            </div>
          </div>
        </section>

        {/* How We Curate */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#1E2621]">Our Philosophy &amp; Curation Approach</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            We believe that extraordinary living spaces are built on a harmonious dialogue between historic character and modern innovation. Every piece in our collection is hand-selected for authenticity, design value, and enduring aesthetic appeal.
          </p>

          <div className="space-y-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Authentic Antiques</h3>
                  <p className="text-gray-700">
                    Rare historical furnishings, carved woodwork, and heritage pieces sourced from vetted estates, collectors, and artisanal workshops with verified provenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Modern Chairs &amp; Furniture</h3>
                  <p className="text-gray-700">
                    Contemporary ergonomic chairs, sleek statement tables, and architectural accent pieces crafted with premium materials and timeless silhouettes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Unique Vintage Collectibles</h3>
                  <p className="text-gray-700">
                    Carefully preserved design artifacts, limited-run collectibles, and retro showpieces that bring history and distinct individuality to your collection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">One-of-a-Kind Decorative Pieces</h3>
                  <p className="text-gray-700">
                    Artistic vases, sculptural lighting, hand-blown glass, ceramics, and handcrafted ornaments designed to elevate any interior aesthetic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Transparent Condition &amp; Provenance</h3>
                  <p className="text-gray-700">
                    We provide high-resolution photography, accurate measurements, era assessments, and comprehensive condition notes for every listed piece.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] rounded-2xl shadow-lg p-10 mb-12 text-[#F6F8F5] text-center border border-[#D1A966]/20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D1A966]/20 text-[#D1A966] rounded-full mb-6">
            <Target className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#D1A966]">Our Mission</h2>
          <p className="text-xl text-[#F6F8F5]/90 mb-4">
            To provide interior lovers, collectors, and discerning homeowners with exceptional antique and modern pieces that inspire and endure.
          </p>
          <p className="text-lg text-[#F6F8F5]/85">
            Whether you are curating a single statement modern chair or searching for a century-old antique heirloom, our commitment is to provide unmatched authenticity, quality, and white-glove customer care.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Sparkles className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Expertly Curated</h3>
              </div>
              <p className="text-gray-700">Every item is individually selected and authenticated by knowledgeable specialists passionate about design and history.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Accurate Details</h3>
              </div>
              <p className="text-gray-700">We disclose historical eras, material compositions, patina, dimensions, and condition characteristics transparently.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Fair Direct Pricing</h3>
              </div>
              <p className="text-gray-700">By streamlining sourcing and operating online, we offer authentic antiques and designer modern furniture at accessible rates.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">White-Glove Support</h3>
              </div>
              <p className="text-gray-700">From pre-purchase consultations to custom protective packing and insured tracked shipping, we ensure peace of mind.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Sustainable Heritage</h3>
              </div>
              <p className="text-gray-700">Investing in authentic vintage and antique furniture preserves heirloom craftsmanship and supports sustainable, circular design.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Heart className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Shield className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Authenticity</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Award className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Artisanship</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Users className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Collector Trust</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Zap className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Design Excellence</h3>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] rounded-2xl shadow-lg p-10 mb-12 text-[#F6F8F5] border border-[#D1A966]/20">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#D1A966]">Company Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">13107870</div>
              <div className="text-[#F6F8F5]/80 text-sm">company number</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">UK</div>
              <div className="text-[#F6F8F5]/80 text-sm">registered company</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">100%</div>
              <div className="text-[#F6F8F5]/80 text-sm">authenticated pieces</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">Curated</div>
              <div className="text-[#F6F8F5]/80 text-sm">furniture &amp; decor</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1D2E24]/10 rounded-xl">
              <Phone className="h-8 w-8 text-[#1D2E24]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E2621]">Contact Information</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">UK Registered Office</div>
              </div>
              <div className="text-gray-600 ml-8">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Company Details</div>
              </div>
              <div className="text-gray-600 ml-8">Gooba Global LTD · Company number 13107870</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Phone</div>
              </div>
              <div className="ml-8 space-y-3 text-gray-600">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-1">
                  <a href="tel:+447533408378" className="whitespace-nowrap hover:text-[#1D2E24] transition-colors">
                    +44 7533 408378
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Email:</div>
              </div>
              <div className="text-gray-600 ml-8">contact@weteextees.com</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Business Hours:</div>
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
