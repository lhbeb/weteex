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
  MessageSquare,
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
          'Antiques and modern furniture retailer providing authentic antiques and unique decorative pieces.',
        'email': 'contact@weteextees.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Hochalmstraße 10',
          'addressLocality': 'München',
          'addressRegion': 'Bayern',
          'postalCode': '81825',
          'addressCountry': 'DE',
        },
        'contactPoint': [
          {
            '@type': 'ContactPoint',
            'contactType': 'customer service',
            'email': 'contact@weteextees.com',
            'areaServed': ['DE', 'EU', 'GB', 'US'],
            'availableLanguage': ['en', 'de'],
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
          <h1 className="text-5xl font-bold mb-6 text-[#F6F8F5]">Über Weteextees</h1>
          <p className="text-xl text-[#F6F8F5]/90 leading-relaxed max-w-3xl mx-auto">
            Weteextees ist Ihre Adresse für handverlesene moderne Stühle, edle Massivholz- und Rattanmöbel, Designtische und zeitlose Wohnkultur. Wir verbinden Designliebhaber mit meisterhafter Handwerkskunst.
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
              <h2 className="mt-4 text-2xl font-bold text-[#1E2621]">Standort München</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-gray-700">
              <p>
                Weteextees ist ein spezialisierter Online-Shop für hochwertige moderne Möbelstücke, ergonomische Sitzmöbel und langlebige Design-Esstische.
              </p>
              <p>
                Unsere Geschäftsanschrift befindet sich in der Hochalmstraße 10, 81825 München, Bayern, Deutschland. Alle Möbelstücke werden sorgfältig geprüft und transportsicher versendet.
              </p>
              <Link href="/contact" className="inline-flex font-semibold text-[#1D2E24] hover:text-[#D1A966] hover:underline">
                Kontakt zu unserem Serviceteam
              </Link>
            </div>
          </div>
        </section>

        {/* How We Curate */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#1E2621]">Unsere Philosophie &amp; Qualitätsanspruch</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            Wir glauben, dass ein schönes Zuhause auf der perfekten Harmonie zwischen natürlicher Materialästhetik, erstklassiger Ergonomie und handwerklicher Präzision beruht. Jedes Möbelstück in unserem Sortiment wird mit größter Sorgfalt ausgewählt.
          </p>

          <div className="space-y-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Moderne Esszimmerstühle &amp; Sessel</h3>
                  <p className="text-gray-700">
                    Ergonomische, formschöne Stühle mit Stoffbezügen, Bouclé-Polsterung und massiven Holzgestellen für höchsten Sitzkomfort.
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Naturrattan &amp; Massivholz</h3>
                  <p className="text-gray-700">
                    Handgeflochtene Wiener-Geflecht- und Rattan-Elemente, kombiniert mit Eichen-, Akazien- und Walnussholz für natürliche Eleganz.
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Esstische &amp; Couchtische</h3>
                  <p className="text-gray-700">
                    Hochwertige Tische aus massivem Holz, Marmor und Keramik, die zum Mittelpunkt jedes Wohn- und Essbereichs werden.
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Transparente Produktangaben</h3>
                  <p className="text-gray-700">
                    Detaillierte Maßangaben, Materialbeschreibungen und hochauflösende Fotografien für jedes einzelne Möbelstück.
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">Sicherer &amp; versicherter Versand</h3>
                  <p className="text-gray-700">
                    Spezialverpackung und zuverlässige Logistikpartner stellen sicher, dass Ihre Bestellung unversehrt bei Ihnen eintrifft.
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
          <h2 className="text-3xl font-bold mb-4 text-[#D1A966]">Unsere Mission</h2>
          <p className="text-xl text-[#F6F8F5]/90 mb-4">
            Wohnräume mit zeitlos schönen, langlebigen und stilvollen Möbeln zu bereichern, die durch Qualität und Ästhetik begeistern.
          </p>
          <p className="text-lg text-[#F6F8F5]/85">
            Vom einzelnen Esszimmerstuhl bis zur kompletten Essgruppe garantieren wir erstklassige Verarbeitung, faire Preise und einen zuvorkommenden Kundenservice.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Sparkles className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">Was uns auszeichnet</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Kuratierte Auswahl</h3>
              </div>
              <p className="text-gray-700">Jedes Modell wird hinsichtlich Verarbeitung, Stabilität und Designästhetik gründlich geprüft.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Genaue Details</h3>
              </div>
              <p className="text-gray-700">Wir nennen Materialien, Holzarten, Abmessungen und Pflegehinweise klar und verständlich.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Faire Direktpreise</h3>
              </div>
              <p className="text-gray-700">Durch den Verzicht auf Zwischenhändler bieten wir erstklassige Designmöbel zu attraktiven Preisen an.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Rundum-Service</h3>
              </div>
              <p className="text-gray-700">Von der Beratung bis zur sicheren Speditionslieferung sind wir jederzeit für Sie erreichbar.</p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">Langlebige Materialien</h3>
              </div>
              <p className="text-gray-700">Massivholz und Naturgeflecht sind nachhaltige Werkstoffe, die über viele Jahre Freude bereiten.</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Heart className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">Unsere Werte</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Shield className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Qualität</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Award className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Handwerk</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Users className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Vertrauen</h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Zap className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">Design</h3>
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] rounded-2xl shadow-lg p-10 mb-12 text-[#F6F8F5] border border-[#D1A966]/20">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#D1A966]">Unser Versprechen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">100%</div>
              <div className="text-[#F6F8F5]/80 text-sm">Geprüfte Qualität</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">DE</div>
              <div className="text-[#F6F8F5]/80 text-sm">Standort München</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">Kostenlos</div>
              <div className="text-[#F6F8F5]/80 text-sm">Versicherter Versand</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">30 Tage</div>
              <div className="text-[#F6F8F5]/80 text-sm">Rückgaberecht</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1D2E24]/10 rounded-xl">
              <MessageSquare className="h-8 w-8 text-[#1D2E24]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E2621]">Kontakt &amp; Impressum-Angaben</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Geschäftsanschrift</div>
              </div>
              <div className="text-gray-600 ml-8">Hochalmstraße 10, 81825 München, Bayern, Deutschland</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Marke &amp; Online-Shop</div>
              </div>
              <div className="text-gray-600 ml-8">Weteextees · Weteextees.com</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Live-Chat</div>
              </div>
              <div className="ml-8 text-gray-600">
                24/7 Online-Sofort-Chat verfügbar
              </div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">E-Mail:</div>
              </div>
              <div className="text-gray-600 ml-8">contact@weteextees.com</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">Bürozeiten:</div>
              </div>
              <div className="text-gray-600 ml-8 space-y-1">
                <div>Montag bis Freitag, 09:00 bis 17:00 Uhr (MEZ)</div>
                <div>Live-Chat: Rund um die Uhr (24/7) besetzt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
