"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { getCartCount } from '@/utils/cart';
import type { Product } from '@/types/product';
import ClientOnly from './ClientOnly';
import SearchBar from './SearchBar';

const catalogNavigation = [
  { label: 'Alle Kollektionen', href: '/#products' },
  { label: 'Moderne Stühle & Möbel', href: '/search?query=Moderne%20Stühle%20Möbel' },
  { label: 'Ess- & Couchtische', href: '/search?query=Tische' },
  { label: 'Massivholz & Rattan', href: '/search?query=Rattan' },
  { label: 'Marmor & Keramik', href: '/search?query=Marmor%20Keramik' },
] as const;

const desktopNavLinkClass =
  'relative py-1 text-sm font-bold text-[#f2f5f3] transition-colors duration-200 hover:text-[#D1A966] focus-visible:text-[#D1A966] focus-visible:outline-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#D1A966] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100';

const mobileMenuLinkClass =
  'text-center font-bold text-[#1E2621] transition-colors duration-200 hover:text-[#1D2E24] focus-visible:text-[#1D2E24] focus-visible:outline-none';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const announcementIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we're on the checkout page
  const isCheckoutPage = pathname === '/checkout';

  const announcements = [
    <div
      key="contact-chat"
      className="flex items-center gap-1.5"
    >
      <span>💬</span>
      <span className="font-semibold">Chat support: 24/7</span>
    </div>,
    <a
      key="contact-email"
      href="mailto:contact@weteextees.com"
      className="flex items-center gap-1.5 hover:underline"
    >
      <span>✉️</span>
      <span className="font-semibold">Email: contact@weteextees.com</span>
    </a>,
    <Link
      key="contact-page"
      href="/contact"
      className="flex items-center gap-1.5 hover:underline"
    >
      <span>💬</span>
      <span className="font-semibold">Need help? Contact Us →</span>
    </Link>
  ];

  // Announcement bar animation - auto-rotates contact & inquiry items
  useEffect(() => {
    const startAnnouncementRotation = () => {
      announcementIntervalRef.current = setInterval(() => {
        setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
      }, 4000);
    };

    startAnnouncementRotation();

    return () => {
      if (announcementIntervalRef.current) {
        clearInterval(announcementIntervalRef.current);
      }
    };
  }, [announcements.length]);

  // PRESERVED EXACTLY
  const handleAnnouncementNavigation = (direction: 'prev' | 'next') => {
    if (announcementIntervalRef.current) {
      clearInterval(announcementIntervalRef.current);
    }

    setCurrentAnnouncement(prev => {
      if (direction === 'prev') {
        return prev === 0 ? announcements.length - 1 : prev - 1;
      } else {
        return (prev + 1) % announcements.length;
      }
    });

    // Restart auto-rotation after manual navigation
    setTimeout(() => {
      announcementIntervalRef.current = setInterval(() => {
        setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
      }, 4000);
    }, 100);
  };

  // PRESERVED EXACTLY
  useEffect(() => {
    const updateCartCount = () => {
      if (typeof window !== 'undefined') {
        setCartCount(getCartCount());
      }
    };
    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // PRESERVED EXACTLY
  useEffect(() => {
    const handleScroll = () => {
      // Don't make header sticky on checkout page
      if (pathname === '/checkout') {
        setIsSticky(false);
        return;
      }

      if (typeof window !== 'undefined') {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const promotionalBarHeight = 40;

        if (scrollTop > promotionalBarHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // PRESERVED EXACTLY
  const handleCartClick = () => {
    if (cartCount > 0) {
      router.push('/checkout');
    }
  };

  // PRESERVED EXACTLY
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Announcement bar - Champagne Gold background with deep olive text for contact and inquiries */}
      <div suppressHydrationWarning={true} className="bg-[#D1A966] text-[#142019] py-2 relative overflow-hidden h-[40px] flex items-center">
        <div suppressHydrationWarning={true} className="container mx-auto px-4 flex items-center justify-center relative w-full h-full">
          {/* Announcement Text */}
          <div suppressHydrationWarning={true} className="text-center font-medium px-4 sm:px-14 transition-all duration-500 ease-in-out h-full flex items-center justify-center min-h-[24px]">
            <div key={currentAnnouncement} className="inline-block animate-fade-in text-xs sm:text-sm md:text-base h-full flex items-center">
              {announcements[currentAnnouncement]}
            </div>
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={() => handleAnnouncementNavigation('prev')}
            className="hidden sm:block absolute left-4 p-1 hover:bg-[#1D2E24]/10 rounded-full transition-colors duration-200 z-10 text-[#142019]"
            aria-label="Previous contact announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => handleAnnouncementNavigation('next')}
            className="hidden sm:block absolute right-4 p-1 hover:bg-[#1D2E24]/10 rounded-full transition-colors duration-200 z-10 text-[#142019]"
            aria-label="Next contact announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Header - Two-tier layout */}
      <header
        ref={headerRef}
        suppressHydrationWarning={true}
        className={`transition-all duration-300 ${isSticky
          ? 'fixed top-0 left-0 right-0 z-50'
          : 'relative'
          }`}
      >
        {/* Top Row: Logo, Search, Actions */}
        <div suppressHydrationWarning={true} className="bg-[#142019] text-[#f2f5f3]">
          <div suppressHydrationWarning={true} className="container mx-auto px-4 py-4">
            <div suppressHydrationWarning={true} className="flex items-center justify-between gap-4">
            {/* Weteextees wordmark */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image
                src="/weteex-machines-logo.svg"
                alt="Weteextees"
                width={563}
                height={186}
                priority
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Search Bar */}
            <div suppressHydrationWarning={true} className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div
                suppressHydrationWarning={true}
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center bg-[#24352B] rounded-lg px-4 py-2.5 cursor-pointer transition-shadow hover:shadow-sm border border-white/10"
              >
                <input
                  type="text"
                  placeholder="Moderne Stühle, Tische und Möbel durchsuchen..."
                  className="flex-1 bg-transparent outline-none text-sm text-[#f2f5f3] placeholder-gray-300 cursor-pointer"
                  readOnly
                />
                <Search className="h-5 w-5 text-[#D1A966]" />
              </div>
            </div>

            {/* Right side actions */}
            <div suppressHydrationWarning={true} className="flex items-center gap-3">
              {/* Mobile Search Icon - Only visible when scrolling (isSticky) */}
              {isSticky && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="lg:hidden bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                  aria-label="Produkte suchen"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}

              {/* Help Center Icon - Desktop */}
              <Link
                href="/contact"
                className="hidden sm:flex bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                aria-label="Hilfebereich"
              >
                <Info className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <button
                onClick={handleCartClick}
                className="relative bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                aria-label={`Warenkorb ${cartCount > 0 ? `mit ${cartCount} Artikeln` : '(leer)'}`}
              >
                <ShoppingCart className="h-5 w-5" />
                <ClientOnly>
                  <span className={`absolute -top-2 -right-2 bg-[#F6F8F5] text-[#1D2E24] text-xs rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center font-bold shadow-sm transition-opacity duration-300 ${cartCount > 0 ? 'opacity-100' : 'opacity-0'}`}>
                    {cartCount}
                  </span>
                </ClientOnly>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                aria-label="Menü umschalten"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile Search Bar */}
        {!isSticky && !isCheckoutPage && (
          <div suppressHydrationWarning={true} className="lg:hidden bg-[#1D2E24] border-t border-b border-white/10">
            <div suppressHydrationWarning={true} className="container mx-auto px-4 py-3">
              <div
                suppressHydrationWarning={true}
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center bg-[#24352B] rounded-lg px-4 py-2.5 cursor-pointer transition-shadow hover:shadow-sm border border-white/10"
              >
                <input
                  type="text"
                  placeholder="Moderne Stühle, Tische und Möbel durchsuchen..."
                  className="flex-1 bg-transparent outline-none text-sm text-[#f2f5f3] placeholder-gray-300 cursor-pointer"
                  readOnly
                />
                <Search className="h-5 w-5 text-[#D1A966]" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div suppressHydrationWarning={true} className="hidden lg:block bg-[#1D2E24] border-t border-white/10">
          <div suppressHydrationWarning={true} className="container mx-auto px-4">
            <nav className="flex items-center gap-6 bg-[#1D2E24] py-3 font-sans">
              {catalogNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={desktopNavLinkClass}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#featured" className={desktopNavLinkClass}>
                Ausgewählte Stücke
              </Link>
              <Link href="/track" className={desktopNavLinkClass}>
                Sendungsverfolgung
              </Link>
              <Link href="/frequently-asked-questions" className={desktopNavLinkClass}>
                FAQ
              </Link>
              <Link href="/contact" className={desktopNavLinkClass}>
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile support navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#DCE5DE]">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col bg-white font-sans">
                <Link href="/track" className={`${mobileMenuLinkClass} pb-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Sendungsverfolgung
                </Link>
                <Link href="/frequently-asked-questions" className={`${mobileMenuLinkClass} py-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Häufig gestellte Fragen (FAQ)
                </Link>
                <Link href="/contact" className={`${mobileMenuLinkClass} py-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* SearchBar overlay */}
        <SearchBar open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Mobile Swipeable Menu */}
      {!isCheckoutPage && (
        <div suppressHydrationWarning={true} className="lg:hidden bg-[#1D2E24] border-t border-white/10">
          <div suppressHydrationWarning={true} className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <nav className="flex min-w-max items-center gap-3 bg-[#1D2E24] px-4 py-3">
              {catalogNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex-shrink-0 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-[#f2f5f3] transition-colors duration-300 hover:border-[#D1A966]/60 hover:bg-[#D1A966]/15"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#featured"
                className="flex-shrink-0 px-4 py-2 border border-white/20 rounded-full text-sm font-bold text-[#f2f5f3] hover:border-[#D1A966]/60 hover:bg-[#D1A966]/15 transition-colors duration-300 whitespace-nowrap"
              >
                Ausgewählte Stücke
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
