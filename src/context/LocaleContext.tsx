"use client";

import React, { createContext, useCallback, useContext } from 'react';
import enTranslations from '@/locales/en.json';

export type Locale = 'en';
export type Currency = 'USD';

interface LocaleContextType {
  locale: Locale;
  currency: Currency;
  setLocale: (locale: Locale) => void;
  setCurrency: (currency: Currency) => void;
  toggleMarket: () => void;
  formatPrice: (priceInUSD: number) => string;
  formatPriceRaw: (priceInUSD: number) => number;
  t: (path: string) => any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formatPrice = useCallback((priceInUSD: number): string => {
    if (typeof priceInUSD !== 'number' || Number.isNaN(priceInUSD)) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(priceInUSD);
  }, []);

  const formatPriceRaw = useCallback((priceInUSD: number): number => {
    if (typeof priceInUSD !== 'number' || Number.isNaN(priceInUSD)) return 0;
    return Number(priceInUSD.toFixed(2));
  }, []);

  const t = useCallback((path: string): any => {
    let current: any = enTranslations;
    for (const key of path.split('.')) {
      if (!current || typeof current !== 'object' || !(key in current)) return path;
      current = current[key];
    }
    return current;
  }, []);

  const noOp = useCallback(() => {}, []);

  return (
    <LocaleContext.Provider
      value={{
        locale: 'en',
        currency: 'USD',
        setLocale: noOp,
        setCurrency: noOp,
        toggleMarket: noOp,
        formatPrice,
        formatPriceRaw,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within a LocaleProvider');
  return context;
};
