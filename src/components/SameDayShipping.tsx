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
          <div className="relative min-h-[360px] w-full md:min-h-[400px] md:w-[45%]">
            <Image
              src="/rippa-r32pro-rear-counterweight-tracks.webp"
              alt="Weteex / Teextees delivery person"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Section - Content */}
          <div className="md:w-[55%] bg-[#01428a] text-[#f1f6fb] p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#d8941a]">
              Compact Excavator Delivery, Coordinated
            </h1>

            <p className="text-lg leading-relaxed font-normal mb-12">
              Once your compact excavator and delivery requirements are confirmed, we coordinate machine preparation and specialist transport for its dimensions, configuration, and destination. At <strong>Weteex / Teextees</strong>, practical delivery planning is part of every sale.
            </p>
            <Link
              href="/shipping-policy"
              className="text-[#f1f6fb]/80 hover:text-[#f1f6fb] text-lg underline underline-offset-2 transition-colors"
            >
              See our shipping policy →
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#01428a] rounded-full p-3 flex-shrink-0">
              <Clock className="w-6 h-6 text-[#f1f6fb]" />
            </div>
            <div>
              <h3 className="font-bold text-[#262626] text-lg mb-2">
                Configuration Confirmed
              </h3>
              <p className="text-gray-600 text-sm">
                Engine, controls, cab, attachments, and delivery details are confirmed before dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#01428a] rounded-full p-3 flex-shrink-0">
              <Package className="w-6 h-6 text-[#f1f6fb]" />
            </div>
            <div>
              <h3 className="font-bold text-[#262626] text-lg mb-2">
                Business-Focused Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our team helps contractors and businesses choose a suitable compact excavator configuration.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#01428a] rounded-full p-3 flex-shrink-0">
              <Truck className="w-6 h-6 text-[#f1f6fb]" />
            </div>
            <div>
              <h3 className="font-bold text-[#262626] text-lg mb-2">
                Specialist Machine Transport
              </h3>
              <p className="text-gray-600 text-sm">
                Transport is coordinated around machine dimensions, site access, and unloading requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-500 text-sm mb-2">
            Ready to select the right compact excavator?
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#262626]">
            Compare <span className="text-[#01428a]">engine and operator configurations</span> for your work
          </p>
        </div>
        <a
          href="#products"
          className="bg-[#d8941a] hover:bg-[#d8941a]/90 text-[#01428a] font-bold py-4 px-10 rounded-xl text-lg transition-colors whitespace-nowrap"
        >
          Browse Excavators
        </a>
      </div>
    </div>
  );

  if (contained) {
    return (
      <div className="py-8 bg-gray-100 rounded-xl">
        {content}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {content}
      </div>
    </section>
  );
};

export default SameDayShipping;
