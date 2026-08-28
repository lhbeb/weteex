"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageSquare, MapPin, Instagram } from 'lucide-react';
import { useLocale } from '@/context/LocaleContext';

const Footer = () => {
  const { t, isGerman } = useLocale();

  return (
    <footer className="bg-[#142019] text-[#F6F8F5] border-t border-[#1D2E24]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/weteex-machines-logo.svg"
                alt="Weteextees"
                width={224}
                height={42}
                className="h-auto w-36 sm:w-40"
              />
            </Link>
            <p className="mb-4 text-[#DCE5DE]">
              {t('footer.aboutText')}
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 shrink-0 text-[#D1A966] mr-2" />
                <span className="text-[#DCE5DE]">
                  <span className="font-semibold text-white">Chat support:</span> 24/7
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#D1A966] mr-2" />
                <a href="mailto:contact@weteextees.com" className="hover:text-[#D1A966] transition-colors duration-300">
                  contact@weteextees.com
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-[#D1A966] mr-2" />
                <a
                  href="https://www.instagram.com/weteextees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D1A966] transition-colors duration-300"
                >
                  Instagram: @weteextees
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-[#D1A966] mr-2 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.72 1.37-.07 2.59-.97 3.03-2.27.29-.75.35-1.57.34-2.38V.02z" />
                </svg>
                <a
                  href="https://www.tiktok.com/@weteexteesdotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D1A966] transition-colors duration-300"
                >
                  TikTok: @weteexteesdotcom
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-[#D1A966] mr-2 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.154-1.498-.697-2.435-2.887-2.435-4.646 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                <a
                  href="https://www.pinterest.com/weteexteesdotcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D1A966] transition-colors duration-300"
                >
                  Pinterest: @weteexteesdotcom
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 shrink-0 text-[#D1A966] mr-2 mt-1" />
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <span className="block font-semibold text-white">{isGerman ? 'Standorte & Logistik' : 'Locations & Logistics'}</span>
                  <div className="text-[#DCE5DE]">
                    <span className="text-white font-medium">🇩🇪 {isGerman ? 'Deutschland (Zentrale):' : 'Germany (HQ):'}</span> Hochalmstraße 10, 81825 München, Bayern
                  </div>
                  <div className="text-[#DCE5DE]">
                    <span className="text-white font-medium">🇺🇸 {isGerman ? 'USA (Standort & Logistik):' : 'USA (Location & Logistics):'}</span> 900 AZ-66, Peach Springs, AZ 86434
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D1A966] mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2 text-[#DCE5DE]">
              <li><Link href="/" className="hover:text-[#D1A966] transition-colors duration-300">{isGerman ? 'Startseite' : 'Home'}</Link></li>
              <li><Link href="/#collection" className="hover:text-[#D1A966] transition-colors duration-300">{t('nav.allCollections')}</Link></li>
              <li><Link href="/#furniture-antiques" className="hover:text-[#D1A966] transition-colors duration-300">{t('nav.featured')}</Link></li>
              <li><Link href="/track" className="hover:text-[#D1A966] transition-colors duration-300">{t('nav.trackOrder')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#D1A966] transition-colors duration-300">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D1A966] mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-[#DCE5DE]">
              <li><Link href="/privacy-policy" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.terms')}</Link></li>
              <li><Link href="/about" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.about')}</Link></li>
              <li><Link href="/frequently-asked-questions" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.faq')}</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.returns')}</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.shipping')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.contact')}</Link></li>
              <li><Link href="/cookies" className="hover:text-[#D1A966] transition-colors duration-300">{t('footer.cookies')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#DCE5DE]/15 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center">
              <Image
                src="/secure-checkout.png"
                alt="Sichere Zahlung"
                width={400}
                height={64}
                className="h-16 w-auto max-w-full object-contain brightness-110 contrast-110"
              />
            </div>

            <p className="text-center text-[#DCE5DE]/80 text-sm">© {new Date().getFullYear()} Weteextees. {t('common.rightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
