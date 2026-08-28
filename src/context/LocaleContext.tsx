"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import deTranslations from '@/locales/de.json';
import enTranslations from '@/locales/en.json';

export type Locale = 'de' | 'en';
export type Currency = 'EUR' | 'USD';

// Current realistic exchange rate: 1 EUR = 1.085 USD
export const EUR_TO_USD_RATE = 1.085;

interface LocaleContextType {
  locale: Locale;
  currency: Currency;
  setLocale: (locale: Locale) => void;
  setCurrency: (currency: Currency) => void;
  toggleMarket: () => void;
  formatPrice: (priceInEUR: number) => string;
  formatPriceRaw: (priceInEUR: number) => number;
  t: (path: string) => any;
  isGerman: boolean;
  isUS: boolean;
}

const dictionaries: Record<Locale, any> = {
  de: deTranslations,
  en: enTranslations,
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'weteex_locale_pref';
const CURRENCY_STORAGE_KEY = 'weteex_currency_pref';

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('de');
  const [currency, setCurrencyState] = useState<Currency>('EUR');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize locale from localStorage or browser language
  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency | null;

      if (savedLocale && (savedLocale === 'de' || savedLocale === 'en')) {
        setLocaleState(savedLocale);
        if (savedCurrency && (savedCurrency === 'EUR' || savedCurrency === 'USD')) {
          setCurrencyState(savedCurrency);
        } else {
          setCurrencyState(savedLocale === 'de' ? 'EUR' : 'USD');
        }
      } else {
        // Auto detect from browser
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('en') || browserLang.includes('us')) {
          setLocaleState('en');
          setCurrencyState('USD');
        } else {
          setLocaleState('de');
          setCurrencyState('EUR');
        }
      }
    } catch {
      // Fallback default
      setLocaleState('de');
      setCurrencyState('EUR');
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    const newCurrency: Currency = newLocale === 'de' ? 'EUR' : 'USD';
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
      document.cookie = `weteex_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
  }, []);

  const setCurrency = useCallback((newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
    } catch {}
  }, []);

  const toggleMarket = useCallback(() => {
    setLocale(locale === 'de' ? 'en' : 'de');
  }, [locale, setLocale]);

  // Convert and format price from base EUR
  const formatPrice = useCallback((priceInEUR: number): string => {
    if (typeof priceInEUR !== 'number' || isNaN(priceInEUR)) return '';

    if (currency === 'USD') {
      const usdAmount = priceInEUR * EUR_TO_USD_RATE;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(usdAmount);
    }

    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(priceInEUR);
  }, [currency]);

  // Return converted raw number
  const formatPriceRaw = useCallback((priceInEUR: number): number => {
    if (typeof priceInEUR !== 'number' || isNaN(priceInEUR)) return 0;
    if (currency === 'USD') {
      return Number((priceInEUR * EUR_TO_USD_RATE).toFixed(2));
    }
    return Number(priceInEUR.toFixed(2));
  }, [currency]);

  // Translation function using dot notation e.g. "hero.subtitle"
  const t = useCallback((path: string): any => {
    const keys = path.split('.');
    let current: any = dictionaries[locale] || dictionaries.de;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to German
        let fallback: any = dictionaries.de;
        for (const fbKey of keys) {
          if (fallback && typeof fallback === 'object' && fbKey in fallback) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        currency,
        setLocale,
        setCurrency,
        toggleMarket,
        formatPrice,
        formatPriceRaw,
        t,
        isGerman: locale === 'de',
        isUS: locale === 'en',
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
