"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSuccess(true);
      setEmail('');

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#1D2E24] py-16 px-4 border-y border-[#D1A966]/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D1A966]/20 backdrop-blur-sm rounded-full p-3 border border-[#D1A966]/30">
              <Mail className="h-8 w-8 text-[#D1A966]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#F6F8F5] mb-4">
            Get Exclusive Decor &amp; Antique Updates
          </h2>

          <p className="text-lg md:text-xl text-[#F6F8F5]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be first to discover rare antique arrivals, handcrafted modern furniture collections, unique vintage collectibles, and curated seasonal offers.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-[#DCE5DE] bg-[#F6F8F5] text-[#1E2621] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D1A966] focus:ring-offset-2 focus:ring-offset-[#1D2E24] transition-all duration-200"
                  disabled={isSubmitting || isSuccess}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="bg-[#D1A966] text-[#142019] hover:bg-[#DEBC80] disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px] shadow-lg shadow-black/10"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#142019]"></div>
                    Signing Up...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="h-5 w-5 text-[#142019]" />
                    You&apos;re In!
                  </>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="flex justify-center mt-3">
                <p className="text-red-300 font-semibold bg-white/10 px-4 py-1.5 rounded-md text-sm shadow-sm backdrop-blur-sm border border-red-300/20">
                  {error}
                </p>
              </div>
            )}

            {isSuccess && (
              <div className="flex justify-center mt-3">
                <p className="text-[#DEBC80] font-semibold bg-white/10 px-4 py-1.5 rounded-md text-sm shadow-sm backdrop-blur-sm border border-[#D1A966]/30">
                  Thanks for subscribing! Check your email for confirmation.
                </p>
              </div>
            )}
          </form>

          <p className="text-[#F6F8F5]/60 text-sm mt-6">
            Curated inspiration for collectors and interior enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 
