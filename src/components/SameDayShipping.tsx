"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Truck, MapPin, Package } from 'lucide-react';

interface SameDayShippingProps {
  fullWidth?: boolean;
  contained?: boolean;
}

const SameDayShipping: React.FC<SameDayShippingProps> = ({ fullWidth = false, contained = false }) => {
  const content = (
    <div className={`w-full ${fullWidth ? '' : 'max-w-7xl'} mx-auto`}>
      {/* Main Banner */}
      <div className="rounded-2xl overflow-hidden shadow-sm mb-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image */}
          <div className="relative min-h-[360px] w-full md:min-h-[400px] md:w-[45%] bg-slate-800">
            <Image
              src="/bg.png"
              alt="Weteextees specialist white-glove shipping"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Section - Content */}
          <div className="md:w-[55%] bg-[#1D2E24] text-[#F6F8F5] p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#D1A966]">
              Versand am selben Werktag
            </h1>

            <p className="text-lg leading-relaxed font-normal mb-12 text-[#F6F8F5]/90">
              Bestellen Sie bis 14:00 Uhr und wir bearbeiten, verpacken und versenden Ihre Bestellung noch am selben Tag. Bei <strong>Weteextees</strong> bieten wir Schnelligkeit und Zuverlässigkeit mit vertrauenswürdigen Lieferpartnern.
            </p>
            <Link
              href="/shipping-policy"
              className="text-[#D1A966] hover:text-[#DEBC80] text-lg underline underline-offset-2 transition-colors font-medium"
            >
              Versandrichtlinien ansehen →
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-4">
            <div className="bg-[#1D2E24] rounded-full p-3 flex-shrink-0">
              <Clock className="w-6 h-6 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-lg mb-2">
                Geprüfte Qualität
              </h3>
              <p className="text-[#5C6B61] text-sm">
                Jedes Möbelstück durchläuft vor dem Versand eine strenge Qualitäts- und Oberflächenkontrolle.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-4">
            <div className="bg-[#1D2E24] rounded-full p-3 flex-shrink-0">
              <Package className="w-6 h-6 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-lg mb-2">
                Sichere Schutzverpackung
              </h3>
              <p className="text-[#5C6B61] text-sm">
                Individuelle Polsterung und verstärkte Kanten schützen edle Hölzer, Rattan und Steinplatten.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-[#DCE5DE] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#5C6B61] text-sm mb-2 font-medium">
            Bereit für Ihr neues Lieblingsstück?
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#1E2621]">
            Entdecken Sie <span className="text-[#1D2E24] underline decoration-[#D1A966] decoration-2">moderne Möbel &amp; zeitlose Designs</span> für Ihr Zuhause
          </p>
        </div>
        <a
          href="#products"
          className="bg-[#D1A966] hover:bg-[#DEBC80] text-[#142019] font-bold py-4 px-10 rounded-xl text-lg transition-colors whitespace-nowrap shadow-sm"
        >
          Alle Möbel ansehen
        </a>
      </div>
    </div>
  );

  if (contained) {
    return (
      <div className="py-8 bg-[#F6F8F5] rounded-xl">
        {content}
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F6F8F5]">
      <div className="container mx-auto px-4">
        {content}
      </div>
    </section>
  );
};

export default SameDayShipping;
