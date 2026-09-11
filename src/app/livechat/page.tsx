'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ShieldCheck, Zap, HeartHandshake, MessageCircle } from 'lucide-react';

export default function LiveChatPage() {
  const [siteUrl, setSiteUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSiteUrl(window.location.origin);
      // Small delay for entrance animation
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, []);

  const chatSrc = `https://chatapppay-rust.vercel.app/livechat?color=%231D2E24&siteUrl=${encodeURIComponent(siteUrl || 'https://www.weteextees.com')}`;

  return (
    <div className="min-h-[calc(100vh-140px)] w-full flex flex-col lg:flex-row bg-[#F6F8F5] overflow-hidden">
      
      {/* Left Column: Creative Branding & Copy */}
      <div className="relative w-full lg:w-5/12 xl:w-1/2 bg-[#1D2E24] text-white p-6 sm:p-8 lg:p-16 flex flex-col justify-between overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#D1A966]/20 to-transparent blur-3xl" />
          <div className="absolute top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tl from-[#DCE5DE]/10 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div>
            <Link
              href="/"
              className="group mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#F6F8F5]/80 transition-colors hover:text-white sm:mb-12"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Zurück zum Shop
            </Link>

            <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F6F8F5]/90 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Mitarbeiter online
              </div>
              
              <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:mb-6 lg:text-6xl">
                Wir sind hier, <br className="hidden lg:block" />um Ihnen zu helfen.
              </h1>
              
              <p className="mb-6 max-w-md text-base font-light leading-relaxed text-[#F6F8F5]/80 sm:mb-12 sm:text-lg md:text-xl">
                Haben Sie eine Frage zu einem Produkt, dem Versand oder Ihrer letzten Bestellung? Chatten Sie direkt und in Echtzeit mit unserem engagierten Support-Team.
              </p>

              <a
                href="#live-chat"
                className="flex w-fit items-center gap-2 text-sm font-semibold text-[#D1A966] lg:hidden"
                aria-label="Scroll down to live chat"
              >
                Live-Chat unten
                <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={`mt-auto hidden gap-6 transition-all duration-700 delay-200 lg:grid ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-lg backdrop-blur-sm">
                <Zap className="w-5 h-5 text-[#D1A966]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Sofortige Antworten</h3>
                <p className="text-sm text-[#F6F8F5]/70">Keine Warteschleifen. Verbinden Sie sich sofort mit einem Mitarbeiter.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-lg backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-[#D1A966]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Sicher & Privat</h3>
                <p className="text-sm text-[#F6F8F5]/70">Ihr Chat ist vollständig verschlüsselt und wird von Weteextees sicher verarbeitet.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 shadow-lg backdrop-blur-sm">
                <HeartHandshake className="w-5 h-5 text-[#D1A966]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Echte Menschen</h3>
                <p className="text-sm text-[#F6F8F5]/70">Wir verwenden keine frustrierenden Bots. Chatten Sie mit echten Experten, die sich kümmern.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Chat Widget */}
      <div id="live-chat" className="relative flex w-full scroll-mt-4 items-center justify-center p-3 sm:p-6 md:p-8 lg:w-7/12 lg:p-12 xl:w-1/2">
        {/* Abstract background blobs for right side */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#DCE5DE]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#D1A966]/20 rounded-full blur-3xl" />

        <div className={`relative z-10 flex h-[75svh] min-h-[560px] w-full max-w-[500px] flex-col overflow-hidden rounded-2xl border border-[#DCE5DE] bg-white shadow-2xl shadow-[#1D2E24]/10 transition-all duration-700 delay-300 sm:h-[700px] sm:max-h-[80vh] sm:rounded-3xl ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          <div className="bg-[#F6F8F5] border-b border-[#DCE5DE] p-4 flex items-center justify-between z-20">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[#1D2E24]/10 flex items-center justify-center text-[#1D2E24]">
                  <MessageCircle className="w-5 h-5" />
               </div>
               <div>
                 <h2 className="font-semibold text-[#1D2E24] text-sm">Weteextees Live-Support</h2>
                 <p className="text-xs text-[#5C6B61]">Wir antworten in der Regel in wenigen Minuten</p>
               </div>
             </div>
          </div>
          
          <iframe
            src={chatSrc}
            title="Weteextees Live Chat Support"
            className="w-full flex-grow border-none block"
            allow="clipboard-write; camera; microphone"
          />
        </div>
      </div>

    </div>
  );
}
