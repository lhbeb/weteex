"use client";

import React from 'react';
import Link from 'next/link';
import AboutNotifier from '@/components/AboutNotifier';
import {
  Users,
  Shield,
  Heart,
  Zap,
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
import { useLocale } from '@/context/LocaleContext';

export default function AboutPageClient() {
  const { isGerman } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F5]">
      <AboutNotifier />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] text-[#F6F8F5] py-16 border-b border-[#D1A966]/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#F6F8F5]">
            {isGerman ? 'Über Weteextees' : 'About Weteextees'}
          </h1>
          <p className="text-xl text-[#F6F8F5]/90 leading-relaxed max-w-3xl mx-auto">
            {isGerman
              ? 'Weteextees ist Ihre Adresse für handverlesene moderne Stühle, edle Massivholz- und Rattanmöbel, Designtische und zeitlose Wohnkultur. Wir verbinden Designliebhaber mit meisterhafter Handwerkskunst.'
              : 'Weteextees is your premier destination for handcrafted modern chairs, luxury solid wood & natural rattan furniture, designer tables, and timeless home aesthetics. We connect design enthusiasts with masterful craftsmanship.'}
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
              <h2 className="mt-4 text-2xl font-bold text-[#1E2621]">
                {isGerman ? 'Standorte in Deutschland & USA' : 'Locations in Germany & USA'}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-gray-700">
              <p>
                {isGerman
                  ? 'Weteextees ist ein spezialisierter Online-Shop für hochwertige moderne Möbelstücke, ergonomische Sitzmöbel und langlebige Design-Esstische für den europäischen und US-amerikanischen Markt.'
                  : 'Weteextees operates specialized furniture commerce delivering ergonomic seating, solid wood dining tables, and artisanal home accents across North America and Europe.'}
              </p>
              <p>
                {isGerman ? (
                  <>
                    Unsere Standorte befinden sich in der <strong>Hochalmstraße 10, 81825 München, Bayern, Deutschland</strong> sowie in <strong>900 AZ-66, Peach Springs, AZ 86434, USA</strong>. Alle Möbelstücke werden sorgfältig geprüft und transportsicher versendet.
                  </>
                ) : (
                  <>
                    Our operations are located at <strong>Hochalmstraße 10, 81825 Munich, Bavaria, Germany</strong> and <strong>900 AZ-66, Peach Springs, AZ 86434, USA</strong>. Every piece undergoes meticulous inspection before insured freight dispatch.
                  </>
                )}
              </p>
              <Link href="/contact" className="inline-flex font-semibold text-[#1D2E24] hover:text-[#D1A966] hover:underline">
                {isGerman ? 'Kontakt zu unserem Serviceteam' : 'Connect with our Customer Care Team'}
              </Link>
            </div>
          </div>
        </section>

        {/* How We Curate */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#1E2621]">
              {isGerman ? 'Unsere Philosophie & Qualitätsanspruch' : 'Our Philosophy & Standards of Craftsmanship'}
            </h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            {isGerman
              ? 'Wir glauben, dass ein schönes Zuhause auf der perfekten Harmonie zwischen natürlicher Materialästhetik, erstklassiger Ergonomie und handwerklicher Präzision beruht. Jedes Möbelstück in unserem Sortiment wird mit größter Sorgfalt ausgewählt.'
              : 'We believe that exceptional living spaces stem from the harmony of authentic raw materials, ergonomic comfort, and precision craftsmanship. Each piece in our collection is curated to endure and inspire.'}
          </p>

          <div className="space-y-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] border-l-4 border-l-[#1D2E24]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1D2E24] text-[#D1A966] rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">
                    {isGerman ? 'Moderne Esszimmerstühle & Sessel' : 'Modern Dining & Accent Chairs'}
                  </h3>
                  <p className="text-gray-700">
                    {isGerman
                      ? 'Ergonomische, formschöne Stühle mit Stoffbezügen, Bouclé-Polsterung und massiven Holzgestellen für höchsten Sitzkomfort.'
                      : 'Ergonomically contoured chairs with premium upholstery, textured bouclé, and solid hardwood frames engineered for supreme seating comfort.'}
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">
                    {isGerman ? 'Naturrattan & Massivholz' : 'Natural Rattan & Solid Hardwoods'}
                  </h3>
                  <p className="text-gray-700">
                    {isGerman
                      ? 'Handgeflochtene Wiener-Geflecht- und Rattan-Elemente, kombiniert mit Eichen-, Akazien- und Walnussholz für natürliche Eleganz.'
                      : 'Handwoven cane and natural rattan weaves combined with solid oak, acacia, and walnut for enduring organic warmth.'}
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">
                    {isGerman ? 'Esstische & Couchtische' : 'Dining & Statement Coffee Tables'}
                  </h3>
                  <p className="text-gray-700">
                    {isGerman
                      ? 'Hochwertige Tische aus massivem Holz, Marmor und Keramik, die zum Mittelpunkt jedes Wohn- und Essbereichs werden.'
                      : 'Centerpiece tables crafted from solid timbers, natural marble, and durable ceramics tailored to modern living.'}
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">
                    {isGerman ? 'Transparente Produktangaben' : 'Transparent Specifications'}
                  </h3>
                  <p className="text-gray-700">
                    {isGerman
                      ? 'Detaillierte Maßangaben, Materialbeschreibungen und hochauflösende Fotografien für jedes einzelne Möbelstück.'
                      : 'Comprehensive dimensions, fabric compositions, care instructions, and high-fidelity product imagery.'}
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
                  <h3 className="text-xl font-bold text-[#1E2621] mb-2">
                    {isGerman ? 'Sicherer & versicherter Versand' : '100% Insured Freight Transport'}
                  </h3>
                  <p className="text-gray-700">
                    {isGerman
                      ? 'Spezialverpackung und zuverlässige Logistikpartner stellen sicher, dass Ihre Bestellung unversehrt bei Ihnen eintrifft.'
                      : 'Heavy-duty specialized packaging and tracked logistics ensure your pieces arrive in pristine condition.'}
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
          <h2 className="text-3xl font-bold mb-4 text-[#D1A966]">
            {isGerman ? 'Unsere Mission' : 'Our Mission'}
          </h2>
          <p className="text-xl text-[#F6F8F5]/90 mb-4">
            {isGerman
              ? 'Wohnräume mit zeitlos schönen, langlebigen und stilvollen Möbeln zu bereichern, die durch Qualität und Ästhetik begeistern.'
              : 'Enriching living spaces with timeless, durable, and inspiring furniture pieces defined by character and quality.'}
          </p>
          <p className="text-lg text-[#F6F8F5]/85">
            {isGerman
              ? 'Vom einzelnen Esszimmerstuhl bis zur kompletten Essgruppe garantieren wir erstklassige Verarbeitung, faire Preise und einen zuvorkommenden Kundenservice.'
              : 'From standalone statement dining chairs to complete dining sets, we guarantee unmatched craftsmanship, direct pricing, and attentive support.'}
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Sparkles className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">
              {isGerman ? 'Was uns auszeichnet' : 'What Sets Us Apart'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Package className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">
                  {isGerman ? 'Kuratierte Auswahl' : 'Curated Catalog'}
                </h3>
              </div>
              <p className="text-gray-700">
                {isGerman
                  ? 'Jedes Modell wird hinsichtlich Verarbeitung, Stabilität und Designästhetik gründlich geprüft.'
                  : 'Every item is rigorously evaluated for structural integrity, joinery precision, and aesthetics.'}
              </p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">
                  {isGerman ? 'Genaue Details' : 'Exact Specifications'}
                </h3>
              </div>
              <p className="text-gray-700">
                {isGerman
                  ? 'Wir nennen Materialien, Holzarten, Abmessungen und Pflegehinweise klar und verständlich.'
                  : 'We publish precise dimensions, wood grains, fabric weights, and easy care guidelines.'}
              </p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">
                  {isGerman ? 'Faire Direktpreise' : 'Direct Transparent Pricing'}
                </h3>
              </div>
              <p className="text-gray-700">
                {isGerman
                  ? 'Durch den Verzicht auf Zwischenhändler bieten wir erstklassige Designmöbel zu attraktiven Preisen an.'
                  : 'By eliminating middleman markups, we deliver luxury craftsmanship directly to your home at accessible value.'}
              </p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">
                  {isGerman ? 'Rundum-Service' : 'Dedicated Support'}
                </h3>
              </div>
              <p className="text-gray-700">
                {isGerman
                  ? 'Von der Beratung bis zur sicheren Speditionslieferung sind wir jederzeit für Sie erreichbar.'
                  : 'From personalized pre-purchase design advice to delivery scheduling, our team is always on standby.'}
              </p>
            </div>

            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE] md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="h-6 w-6 text-[#1D2E24]" />
                <h3 className="text-xl font-bold text-[#1E2621]">
                  {isGerman ? 'Langlebige Materialien' : 'Sustainable & Durable Materials'}
                </h3>
              </div>
              <p className="text-gray-700">
                {isGerman
                  ? 'Massivholz und Naturgeflecht sind nachhaltige Werkstoffe, die über viele Jahre Freude bereiten.'
                  : 'Solid hardwood and natural plant-based rattan ensure longevity and timeless beauty that outlasts fast-furniture cycles.'}
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#D1A966] rounded-xl">
              <Heart className="h-8 w-8 text-[#142019]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2621]">
              {isGerman ? 'Unsere Werte' : 'Core Values'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Shield className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">
                {isGerman ? 'Qualität' : 'Quality'}
              </h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Award className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">
                {isGerman ? 'Handwerk' : 'Craft'}
              </h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Users className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">
                {isGerman ? 'Vertrauen' : 'Trust'}
              </h3>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 text-center border border-[#DCE5DE]">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#D1A966]">
                <Zap className="h-8 w-8 text-[#142019]" />
              </div>
              <h3 className="font-bold text-[#1E2621] text-lg">
                {isGerman ? 'Design' : 'Design'}
              </h3>
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="bg-gradient-to-r from-[#1D2E24] to-[#142019] rounded-2xl shadow-lg p-10 mb-12 text-[#F6F8F5] border border-[#D1A966]/20">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#D1A966]">
            {isGerman ? 'Unser Versprechen' : 'Our Promise to You'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">100%</div>
              <div className="text-[#F6F8F5]/80 text-sm">
                {isGerman ? 'Geprüfte Qualität' : 'Quality Inspected'}
              </div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">DE &amp; US</div>
              <div className="text-[#F6F8F5]/80 text-sm">
                {isGerman ? 'München & Arizona' : 'Munich & Arizona'}
              </div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">
                {isGerman ? 'Kostenlos' : 'Free'}
              </div>
              <div className="text-[#F6F8F5]/80 text-sm">
                {isGerman ? 'Versicherter Versand' : 'Insured Delivery'}
              </div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl font-bold mb-2 text-[#D1A966]">
                {isGerman ? '30 Tage' : '30 Days'}
              </div>
              <div className="text-[#F6F8F5]/80 text-sm">
                {isGerman ? 'Rückgaberecht' : 'Returns Guarantee'}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#DCE5DE] p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#1D2E24]/10 rounded-xl">
              <MessageSquare className="h-8 w-8 text-[#1D2E24]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E2621]">
              {isGerman ? 'Kontakt & Unternehmensangaben' : 'Contact & Company Credentials'}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">
                  {isGerman ? 'Standorte & Logistik' : 'Locations & Logistics'}
                </div>
              </div>
              <div className="text-gray-600 ml-8 text-sm">
                <div>🇩🇪 <strong>Deutschland:</strong> Hochalmstraße 10, 81825 München</div>
                <div className="mt-1">🇺🇸 <strong>USA:</strong> 900 AZ-66, Peach Springs, AZ 86434</div>
              </div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">
                  {isGerman ? 'Marke & Online-Shop' : 'Brand & Online Store'}
                </div>
              </div>
              <div className="text-gray-600 ml-8">Weteextees · Weteextees.com</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">
                  {isGerman ? 'Live-Chat' : 'Live Chat'}
                </div>
              </div>
              <div className="ml-8 text-gray-600">
                {isGerman ? '24/7 Online-Sofort-Chat verfügbar' : '24/7 Instant Live Chat Available'}
              </div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">
                  {isGerman ? 'E-Mail:' : 'Email:'}
                </div>
              </div>
              <div className="text-gray-600 ml-8">contact@weteextees.com</div>
            </div>
            <div className="bg-[#F6F8F5] rounded-xl p-6 border border-[#DCE5DE]">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-[#1D2E24]" />
                <div className="font-medium text-[#1E2621]">
                  {isGerman ? 'Servicezeiten:' : 'Support Hours:'}
                </div>
              </div>
              <div className="text-gray-600 ml-8 space-y-1">
                <div>{isGerman ? 'Live-Chat: 24/7 besetzt' : 'Live Chat: 24/7 Availability'}</div>
                <div>{isGerman ? 'E-Mail-Support: Antwort innerhalb von 24 Std.' : 'Email Support: Replies within 24h'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
