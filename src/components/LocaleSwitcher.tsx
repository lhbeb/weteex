"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLocale, Locale } from '@/context/LocaleContext';
import { ChevronDown, Globe } from 'lucide-react';

interface LocaleSwitcherProps {
  variant?: 'header' | 'footer' | 'compact';
  className?: string;
}

const MARKETS: { locale: Locale; name: string; currency: string; flag: string }[] = [
  { locale: 'de', name: 'Deutschland', currency: 'EUR (€)', flag: '🇩🇪' },
  { locale: 'en', name: 'United States', currency: 'USD ($)', flag: '🇺🇸' },
];

export default function LocaleSwitcher({ variant = 'header', className = '' }: LocaleSwitcherProps) {
  const { locale, setLocale, currency } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentMarket = MARKETS.find(m => m.locale === locale) || MARKETS[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span className="text-xs text-[#DCE5DE]/70 flex items-center gap-1">
          <Globe className="h-3.5 w-3.5" /> Region &amp; Währung:
        </span>
        <div className="flex items-center gap-1.5 bg-[#1D2E24] p-1 rounded-lg border border-white/10 text-xs">
          {MARKETS.map(m => (
            <button
              key={m.locale}
              onClick={() => setLocale(m.locale)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all font-medium ${
                locale === m.locale
                  ? 'bg-[#D1A966] text-[#142019] shadow-sm font-bold'
                  : 'text-[#F6F8F5]/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{m.flag}</span>
              <span>{m.name}</span>
              <span className="opacity-75 text-[10px]">({m.currency})</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 transition-all border border-white/15 text-white shadow-sm"
        aria-label="Select region and currency"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{currentMarket.flag}</span>
        <span className="hidden sm:inline">{currentMarket.name}</span>
        <span className="text-[#D1A966] font-bold">({currency === 'USD' ? '$ USD' : '€ EUR'})</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-52 bg-[#1D2E24] border border-white/15 rounded-xl shadow-xl z-50 py-1.5 text-xs overflow-hidden backdrop-blur-md animate-in fade-in duration-150">
          <div className="px-3 py-1 text-[10px] uppercase font-bold text-white/50 border-b border-white/10">
            Region &amp; Währung wählen
          </div>
          {MARKETS.map(m => (
            <button
              key={m.locale}
              onClick={() => {
                setLocale(m.locale);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors ${
                locale === m.locale
                  ? 'bg-[#D1A966]/20 text-[#D1A966] font-bold'
                  : 'text-[#F6F8F5] hover:bg-white/10'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{m.flag}</span>
                <span>{m.name}</span>
              </span>
              <span className="text-xs font-semibold opacity-90">{m.currency}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
