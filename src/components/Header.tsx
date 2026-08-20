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
  { label: 'All Excavators', href: '/#products' },
  { label: 'AGT Mini Excavators', href: '/search?query=AGT%20Mini%20Excavators' },
  { label: 'Mini Excavators', href: '/search?query=Mini%20Excavators' },
  { label: 'Attachments', href: '/search?query=Excavator%20Attachments' },
  { label: 'Engine Options', href: '/search?query=Excavator%20Engine%20Options' },
  { label: 'Cab & Controls', href: '/search?query=Excavator%20Cab%20Controls' },
] as const;

const desktopNavLinkClass =
  'relative py-1 text-sm font-bold text-[#efefef] transition-colors duration-200 hover:text-[#d8941a] focus-visible:text-[#d8941a] focus-visible:outline-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#d8941a] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100';

const mobileMenuLinkClass =
  'text-center font-bold text-[#262626] transition-colors duration-200 hover:text-[#01428a] focus-visible:text-[#01428a] focus-visible:outline-none';

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
    <span key="nav-1">🏗️ <span className="font-bold">Gooba Global LTD</span> — Compact excavator solutions for your business at competitive prices</span>,
    <span key="nav-2">⚙️ <span className="font-bold">AGT Mini Excavators and Attachments</span> configured for practical business use</span>,
    "whatsapp-contact" // Special marker for WhatsApp announcement
  ];

  // Announcement bar animation - PRESERVED EXACTLY
  useEffect(() => {
    const startAnnouncementRotation = () => {
      announcementIntervalRef.current = setInterval(() => {
        setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
      }, 2000);
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
      }, 2000);
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
      {/* Announcement bar - Yellow background with dark blue text */}
      <div suppressHydrationWarning={true} className="bg-[#d8941a] text-[#01428a] py-2 relative overflow-hidden h-[40px] flex items-center">
        <div suppressHydrationWarning={true} className="container mx-auto px-4 flex items-center justify-center relative w-full h-full">
          {/* Announcement Text - PRESERVED */}
          <div suppressHydrationWarning={true} className="text-center font-medium px-4 sm:px-14 transition-all duration-500 ease-in-out h-full flex items-center justify-center min-h-[24px]">
            {announcements[currentAnnouncement] === "whatsapp-contact" ? (
              <div key={currentAnnouncement} className="flex items-center justify-center animate-fade-in text-xs sm:text-sm md:text-base h-full w-full">
                <a
                  href="https://wa.me/447533408378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80 transition-opacity flex-wrap justify-center"
                  aria-label="Contact excavator sales on WhatsApp"
                >
                  <Image
                    src="/whatsapp-svgrepo-com.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    style={{ filter: 'brightness(0)' }}
                  />
                  <span className="whitespace-nowrap">Choosing a compact excavator? <span className="font-bold">Speak with machinery sales</span></span>
                  <span className="underline whitespace-nowrap font-bold">+44 7533 408378</span>
                </a>
              </div>
            ) : (
              <span key={currentAnnouncement} className="inline-block animate-fade-in whitespace-nowrap text-sm sm:text-base h-full flex items-center">
                {announcements[currentAnnouncement]}
              </span>
            )}
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={() => handleAnnouncementNavigation('prev')}
            className="hidden sm:block absolute left-4 p-1 hover:bg-[#01428a]/10 rounded-full transition-colors duration-200 z-10 text-[#01428a]"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => handleAnnouncementNavigation('next')}
            className="hidden sm:block absolute right-4 p-1 hover:bg-[#01428a]/10 rounded-full transition-colors duration-200 z-10 text-[#01428a]"
            aria-label="Next announcement"
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
        <div suppressHydrationWarning={true} className="bg-[#00366f] text-[#efefef]">
          <div suppressHydrationWarning={true} className="container mx-auto px-4 py-4">
            <div suppressHydrationWarning={true} className="flex items-center justify-between gap-4">
            {/* Weteex / Teextees wordmark */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image
                src="/weteex-machines-logo.svg"
                alt="Weteex / Teextees"
                width={563}
                height={186}
                priority
                className="h-14 w-auto sm:h-16"
              />
            </Link>

            {/* Desktop Search Bar - NEW */}
            <div suppressHydrationWarning={true} className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div
                suppressHydrationWarning={true}
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center bg-[#e3e7eb] rounded-lg px-4 py-2.5 cursor-pointer transition-shadow hover:shadow-sm"
              >
                <input
                  type="text"
                  placeholder="Search AGT models, mini excavators, and attachments..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 cursor-pointer"
                  readOnly
                />
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Right side actions */}
            <div suppressHydrationWarning={true} className="flex items-center gap-3">
              {/* Mobile Search Icon - Only visible when scrolling (isSticky) */}
              {isSticky && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="lg:hidden bg-[#d8941a] text-[#01428a] hover:opacity-90 rounded-full p-2"
                  aria-label="Search products"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}

              {/* Help Center Icon - Desktop */}
              <Link
                href="/contact"
                className="hidden sm:flex bg-[#d8941a] text-[#01428a] hover:opacity-90 rounded-full p-2"
                aria-label="Help Center"
              >
                <Info className="h-5 w-5" />
              </Link>

              {/* Cart - PRESERVED with color update */}
              <button
                onClick={handleCartClick}
                className="relative bg-[#d8941a] text-[#01428a] hover:opacity-90 rounded-full p-2"
                aria-label={`Shopping cart ${cartCount > 0 ? `with ${cartCount} items` : '(empty)'}`}
              >
                <ShoppingCart className="h-5 w-5" />
                <ClientOnly>
                  <span className={`absolute -top-2 -right-2 bg-[#efefef] text-[#01428a] text-xs rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center font-semibold transition-opacity duration-300 ${cartCount > 0 ? 'opacity-100' : 'opacity-0'}`}>
                    {cartCount}
                  </span>
                </ClientOnly>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden bg-[#d8941a] text-[#01428a] hover:opacity-90 rounded-full p-2"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile Search Bar - Below header on mobile (hidden when scrolling or on checkout page) */}
        {!isSticky && !isCheckoutPage && (
          <div suppressHydrationWarning={true} className="lg:hidden bg-[#01428a] border-t border-b border-white/10">
            <div suppressHydrationWarning={true} className="container mx-auto px-4 py-3">
              <div
                suppressHydrationWarning={true}
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center bg-[#e3e7eb] rounded-lg px-4 py-2.5 cursor-pointer transition-shadow hover:shadow-sm"
              >
                <input
                  type="text"
                  placeholder="Search AGT models, mini excavators, and attachments..."
                  className="flex-1 bg-transparent outline-none text-sm text-[#262626] placeholder-gray-500 cursor-pointer"
                  readOnly
                />
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div suppressHydrationWarning={true} className="hidden lg:block bg-[#01428a]">
          <div suppressHydrationWarning={true} className="container mx-auto px-4">
            <nav className="flex items-center gap-6 bg-[#01428a] py-3 font-sans">
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
                Featured Machines
              </Link>
              <Link href="/track" className={desktopNavLinkClass}>
                Track Delivery
              </Link>
              <Link href="/frequently-asked-questions" className={desktopNavLinkClass}>
                Machine FAQs
              </Link>
              <Link href="/contact" className={desktopNavLinkClass}>
                Contact Sales
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile support navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col bg-white font-sans">
                <Link href="/track" className={`${mobileMenuLinkClass} pb-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Track Delivery
                </Link>
                <Link href="/frequently-asked-questions" className={`${mobileMenuLinkClass} py-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Machine FAQs
                </Link>
                <Link href="/contact" className={`${mobileMenuLinkClass} py-4 border-b border-gray-200`} onClick={handleMobileMenuClose}>
                  Contact Sales
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* SearchBar overlay - PRESERVED */}
        <SearchBar open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Mobile Swipeable Menu - Outside header, stays at top of page (hidden on checkout page) */}
      {!isCheckoutPage && (
        <div suppressHydrationWarning={true} className="lg:hidden bg-[#01428a] border-t border-white/10">
          <div suppressHydrationWarning={true} className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <nav className="flex min-w-max items-center gap-3 bg-[#01428a] px-4 py-3">
              {catalogNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex-shrink-0 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-[#efefef] transition-colors duration-300 hover:border-[#d8941a]/60 hover:bg-[#d8941a]/15"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#featured"
                className="flex-shrink-0 px-4 py-2 border border-white/20 rounded-full text-sm font-bold text-[#efefef] hover:border-[#d8941a]/60 hover:bg-[#d8941a]/15 transition-colors duration-300 whitespace-nowrap"
              >
                Featured Machines
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
