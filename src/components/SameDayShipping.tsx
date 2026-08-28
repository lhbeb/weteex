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
      <div className="rounded-2xl overflow-hidden shadow-sm mb-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image */}
          <div className="relative min-h-[200px] w-full md:min-h-[240px] md:w-[40%] bg-slate-800">
            <Image
              src="/versand.png"
              alt="Weteextees versicherter Speditionsversand"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Section - Content */}
          <div className="md:w-[60%] bg-[#1D2E24] text-[#F6F8F5] p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2 text-[#D1A966]">
              Versand am selben Werktag
            </h2>

            <p className="text-sm sm:text-base leading-relaxed font-normal mb-4 text-[#F6F8F5]/90">
              Bestellen Sie bis 14:00 Uhr und wir bearbeiten, verpacken und versenden Ihre Bestellung noch am selben Tag mit zuverlässigen Partnern.
            </p>
            <Link
              href="/shipping-policy"
              className="text-[#D1A966] hover:text-[#DEBC80] text-sm sm:text-base underline underline-offset-2 transition-colors font-medium"
            >
              Versandrichtlinien ansehen →
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-3.5">
            <div className="bg-[#1D2E24] rounded-xl p-2.5 flex-shrink-0">
              <Clock className="w-5 h-5 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-base mb-1">
                Geprüfte Qualität
              </h3>
              <p className="text-[#5C6B61] text-xs sm:text-sm leading-relaxed">
                Jedes Möbelstück durchläuft vor dem Versand eine strenge Qualitäts- und Oberflächenkontrolle.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-3.5">
            <div className="bg-[#1D2E24] rounded-xl p-2.5 flex-shrink-0">
              <Package className="w-5 h-5 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-base mb-1">
                Sichere Schutzverpackung
              </h3>
              <p className="text-[#5C6B61] text-xs sm:text-sm leading-relaxed">
                Individuelle Polsterung und verstärkte Kanten schützen edle Hölzer, Rattan und Steinplatten.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#DCE5DE] flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[#5C6B61] text-xs mb-1 font-medium">
            Bereit für Ihr neues Lieblingsstück?
          </p>
          <p className="text-lg md:text-xl font-bold text-[#1E2621]">
            Entdecken Sie <span className="text-[#1D2E24] underline decoration-[#D1A966] decoration-2">moderne Möbel &amp; zeitlose Designs</span> für Ihr Zuhause
          </p>
        </div>
        <Link
          href="/#collection"
          className="bg-[#D1A966] hover:bg-[#DEBC80] text-[#142019] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap shadow-sm"
        >
          Alle Möbel ansehen
        </Link>
      </div>
    </div>
  );

  if (contained) {
    return (
      <div className="py-6 bg-[#F6F8F5] rounded-xl">
        {content}
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-10 bg-[#F6F8F5]">
      <div className="container mx-auto px-4">
        {content}
      </div>
    </section>
  );
};

export default SameDayShipping;
