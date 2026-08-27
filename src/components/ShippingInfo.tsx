import React from 'react';
import { MapPin, Truck, RefreshCw } from 'lucide-react';
import { getMarket, getDeliveryRange } from '@/lib/markets';

interface ShippingInfoProps {
  className?: string;
  targetMarket?: string | null;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ className = '', targetMarket }) => {
  const market = getMarket(targetMarket);
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
              <p className="text-sm font-medium text-[#5C6B61]">Versand aus</p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">
                {market.shipsFrom} {market.shipsFromFlag}
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
              <p className="text-sm font-medium text-[#5C6B61]">Voraussichtliche Lieferung</p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">Zustellung bis {deliveryRange}</p>
              <p className="mt-1 text-sm text-[#5C6B61]">{market.freeShippingText}</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1D2E24] text-[#D1A966]">
              <RefreshCw className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#5C6B61]">Rückgabe &amp; Widerruf</p>
              <p className="mt-1 text-sm font-semibold text-[#1E2621]">{market.returnsText}</p>
              <p className="mt-1 text-sm text-[#5C6B61]">Kostenfreie Retourenabwicklung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
