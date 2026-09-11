"use client";

import React from 'react';
import { MapPin, Truck, RefreshCw } from 'lucide-react';
import { getMarket, getDeliveryRange } from '@/lib/markets';
import { useLocale } from '@/context/LocaleContext';

interface ShippingInfoProps {
  className?: string;
  targetMarket?: string | null;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ className = '', targetMarket }) => {
  const { isGerman } = useLocale();
  const market = getMarket(isGerman ? 'eu' : 'us');
  const deliveryRange = getDeliveryRange(market);

  return (
    <div className={`overflow-hidden rounded-[24px] border border-[#DCE5DE] bg-white ${className}`}>
      <div className="grid grid-cols-1 divide-y divide-[#DCE5DE] md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#5C6B61]">
                {isGerman ? 'Versand aus' : 'Ships from'}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">
                {isGerman ? 'Deutschland / EU 🇩🇪' : 'United States & Germany 🇺🇸 🇩🇪'}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
              <Truck className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#5C6B61]">
                {isGerman ? 'Voraussichtliche Lieferung' : 'Estimated Delivery'}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">
                {isGerman ? `Zustellung bis ${deliveryRange}` : `Delivery by ${deliveryRange}`}
              </p>
              <p className="mt-1 text-sm text-[#5C6B61]">
                {isGerman ? 'Kostenloser Standardversand' : 'Free Insured Freight Delivery'}
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
              <RefreshCw className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#5C6B61]">
                {isGerman ? 'Rückgabe & Widerruf' : 'Returns & Guarantee'}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">
                {isGerman ? '30 Tage Rückgaberecht' : '30-Day Money-Back Guarantee'}
              </p>
              <p className="mt-1 text-sm text-[#5C6B61]">
                {isGerman ? 'Kostenfreie Retourenabwicklung' : 'Free & Easy 30-Day Returns'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
