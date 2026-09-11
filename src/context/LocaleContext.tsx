"use client";

import React, { createContext, useCallback, useContext } from 'react';
import deTranslations from '@/locales/de.json';

export type Locale = 'de' | 'en';
export type Currency = 'EUR' | 'USD';

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

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formatPrice = useCallback((priceInEUR: number): string => {
    if (typeof priceInEUR !== 'number' || Number.isNaN(priceInEUR)) return '';
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(priceInEUR);
  }, []);

  const formatPriceRaw = useCallback((priceInEUR: number): number => {
    if (typeof priceInEUR !== 'number' || Number.isNaN(priceInEUR)) return 0;
    return Number(priceInEUR.toFixed(2));
  }, []);

  const t = useCallback((path: string): any => {
    let current: any = deTranslations;
    for (const key of path.split('.')) {
      if (!current || typeof current !== 'object' || !(key in current)) return path;
      current = current[key];
    }
    return current;
  }, []);

  const noOp = useCallback(() => {}, []);

  return (
    <LocaleContext.Provider value={{
      locale: 'de',
      currency: 'EUR',
      setLocale: noOp,
      setCurrency: noOp,
      toggleMarket: noOp,
      formatPrice,
      formatPriceRaw,
      t,
      isGerman: true,
      isUS: false,
    }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within a LocaleProvider');
  return context;
};
