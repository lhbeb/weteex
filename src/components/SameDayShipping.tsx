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
              Careful White-Glove &amp; Insured Delivery
            </h1>

            <p className="text-lg leading-relaxed font-normal mb-12 text-[#F6F8F5]/90">
              Every antique piece, modern chair, and decorative collectible is carefully inspected, packed with museum-grade protective packaging, and shipped with full transit insurance. At <strong>Weteextees</strong>, the safe arrival of your unique pieces is our utmost priority.
            </p>
            <Link
              href="/shipping-policy"
              className="text-[#D1A966] hover:text-[#DEBC80] text-lg underline underline-offset-2 transition-colors font-medium"
            >
              See our delivery &amp; shipping policy →
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-4">
            <div className="bg-[#1D2E24] rounded-full p-3 flex-shrink-0">
              <Clock className="w-6 h-6 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-lg mb-2">
                Authenticity Guaranteed
              </h3>
              <p className="text-[#5C6B61] text-sm">
                Each piece undergoes thorough provenance and condition verification before dispatch.
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
                Protective Packaging
              </h3>
              <p className="text-[#5C6B61] text-sm">
                Custom cushioning and reinforced crating to safeguard delicate antiques and fine furniture.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#DCE5DE]">
          <div className="flex items-start gap-4">
            <div className="bg-[#1D2E24] rounded-full p-3 flex-shrink-0">
              <Truck className="w-6 h-6 text-[#D1A966]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1E2621] text-lg mb-2">
                Tracked Specialist Logistics
              </h3>
              <p className="text-[#5C6B61] text-sm">
                Direct insured delivery with milestone tracking updates directly to your door.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-[#DCE5DE] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#5C6B61] text-sm mb-2 font-medium">
            Ready to find your next statement piece?
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#1E2621]">
            Discover <span className="text-[#1D2E24] underline decoration-[#D1A966] decoration-2">authentic antiques &amp; modern designs</span> for your space
          </p>
        </div>
        <a
          href="#products"
          className="bg-[#D1A966] hover:bg-[#DEBC80] text-[#142019] font-bold py-4 px-10 rounded-xl text-lg transition-colors whitespace-nowrap shadow-sm"
        >
          Browse All Pieces
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
