'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { CheckCircle, Mail, Clock, Package, ArrowLeft, Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { trackPixelEvent } from '@/lib/pixel';
import { CART_STORAGE_KEY, clearCart } from '@/utils/cart';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const sessionId = searchParams.get('session_id');
  const isStaticSuccess = !sessionId;
  const isSuccessful = isStaticSuccess || orderDetails?.status === 'paid';

  useEffect(() => {
    // Non-Stripe returns use cart data for Purchase tracking before clearing checkout state.
    // Use sessionStorage to prevent duplicate fires on page refresh
    const alreadyTracked = sessionStorage.getItem('purchase_tracked');
    if (!alreadyTracked) {
      try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
          const cartItem = JSON.parse(stored);
          const product = cartItem?.product;
          if (product) {
            trackPixelEvent('Purchase', {
              value: product.price || 0,
              currency: product.currency || 'USD',
              content_ids: [product.slug || product.id || ''],
              content_name: product.title || '',
              content_type: 'product',
              num_items: cartItem.quantity || 1,
            });
            sessionStorage.setItem('purchase_tracked', '1');
          }
        }
      } catch (e) {
        console.error('Purchase pixel error:', e);
      }
    }

    // PayPal and other redirect flows only reach this route after provider success.
    if (!sessionId) {
      clearCart();
      return;
    }

    // Verify payment in background (but don't block UI)
    const verifyInBackground = async () => {
      try {
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });

        if (response.ok) {
          const data = await response.json();
          setOrderDetails(data);

          // Meta Pixel Purchase Event (Stripe flow — only if not already tracked)
          if (data.status === 'paid' && !alreadyTracked) {
            trackPixelEvent('Purchase', {
              value: data.amount ? data.amount / 100 : 0,
              currency: data.currency ? data.currency.toUpperCase() : 'USD',
              content_ids: data.orderId ? [data.orderId] : [],
              content_type: 'product'
            });
            sessionStorage.setItem('purchase_tracked', '1');
          }
        } else {
          console.warn('⚠️ Payment verification failed, falling back to pending UI');
          setOrderDetails({ status: 'pending' });
        }
      } catch (error) {
        console.error('❌ Background verification error:', error);
        setOrderDetails({ status: 'pending' });
      }
    };

    verifyInBackground();
  }, [searchParams, sessionId]);

  // Always show success (Stripe only redirects here if payment succeeded)
  return (
    <div className="min-h-screen bg-[#F6F8F5] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#DCE5DE] p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-[#1D2E24] rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-[#D1A966]" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E2621] mb-4">
            {isSuccessful ? 'Vielen Dank für Ihre Bestellung!' : 'Zahlungsbestätigung ausstehend...'}
          </h1>

          <p className="text-lg text-[#5C6B61] mb-8 leading-relaxed">
            {isSuccessful
              ? 'Ihre Zahlung wurde erfolgreich erfasst und Ihre Bestellung wird nun von unserem Logistikteam bearbeitet. Sie erhalten in Kürze eine Bestätigungs-E-Mail.' 
              : 'Ihre Zahlung wird aktuell geprüft. Sobald die Bestätigung vorliegt, senden wir Ihnen Ihre Bestelldetails per E-Mail zu.'}
          </p>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-[#F6F8F5] rounded-xl p-6 mb-8 border border-[#DCE5DE]">
              <p className="text-sm text-gray-500 mb-2">Bestellnummer</p>
              <p className="text-lg font-mono font-semibold text-[#1E2621] mb-4">
                {orderDetails.orderId || orderDetails.sessionId}
              </p>
              {orderDetails.amount && (
                <p className="text-2xl font-bold text-[#1D2E24]">
                  {((orderDetails.amount / 100)).toFixed(2).replace('.', ',')} €
                </p>
              )}
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-[#F6F8F5] rounded-xl p-6 mb-8 border border-[#DCE5DE]">
            <h2 className="text-xl font-semibold text-[#1E2621] mb-4">
              Wie geht es weiter?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#1D2E24] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#D1A966]" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-[#1E2621]">Auftragsbearbeitung</h3>
                  <p className="text-sm text-[#5C6B61]">Ihre Möbel werden innerhalb von 24–48 Stunden transportsicher verpackt</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#1D2E24] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#D1A966]" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-[#1E2621]">E-Mail-Bestätigung &amp; Sendungsnummer</h3>
                  <p className="text-sm text-[#5C6B61]">Sie erhalten eine E-Mail mit allen Bestelldetails und der Sendungsverfolgung</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#1D2E24] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Package className="w-4 h-4 text-[#D1A966]" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-[#1E2621]">Versicherte Zustellung</h3>
                  <p className="text-sm text-[#5C6B61]">Die Lieferung erfolgt in der Regel innerhalb von 3–7 Werktagen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#F6F8F5] rounded-xl p-6 mb-8 border border-[#DCE5DE]">
            <h3 className="font-semibold text-[#1E2621] mb-2">Haben Sie Fragen?</h3>
            <p className="text-sm text-[#5C6B61] mb-3">
              Unser Kundenservice steht Ihnen jederzeit gerne zur Verfügung:
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-gray-700">
                📧 <a href="mailto:contact@weteextees.com" className="text-[#1D2E24] hover:text-[#D1A966] font-medium">
                  contact@weteextees.com
                </a>
              </p>
              <p className="text-gray-700">
                💬 <span className="text-[#1D2E24] font-medium">24/7 Live-Chat-Support verfügbar</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1D2E24] hover:bg-[#142019] text-[#F6F8F5] font-semibold rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2 text-[#D1A966]" />
              Weiter einkaufen
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#5C6B61]">
            {isSuccessful
              ? 'Sie erhalten eine Bestätigungs-E-Mail, sobald unser Team Ihre Bestellung bearbeitet hat.' 
              : 'Wir informieren Sie per E-Mail, sobald Ihre Zahlung verbucht wurde.'}
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function LoadingState() {
  return (
    <div className="min-h-screen bg-[#F6F8F5] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-[#DCE5DE] p-8 md:p-12 text-center">
          <div className="mx-auto w-20 h-20 bg-[#F6F8F5] rounded-full flex items-center justify-center mb-6">
            <Loader2 className="w-12 h-12 text-[#1D2E24] animate-spin" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E2621] mb-4">
            Wird geladen...
          </h1>
          <p className="text-lg text-[#5C6B61]">
            Bitte haben Sie einen Moment Geduld.
          </p>
        </div>
      </div>
    </div>
  );
}

// Main export with Suspense boundary
export default function ThankYouPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ThankYouContent />
    </Suspense>
  );
}
