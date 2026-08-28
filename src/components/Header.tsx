"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, Search, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { getCartCount } from '@/utils/cart';
import ClientOnly from './ClientOnly';
import SearchBar from './SearchBar';
import { useLocale } from '@/context/LocaleContext';

const desktopNavLinkClass =
  'relative py-1 text-sm font-bold text-[#f2f5f3] transition-colors duration-200 hover:text-[#D1A966] focus-visible:text-[#D1A966] focus-visible:outline-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-[#D1A966] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100';

const mobileMenuLinkClass =
  'text-center font-bold text-[#1E2621] transition-colors duration-200 hover:text-[#1D2E24] focus-visible:text-[#1D2E24] focus-visible:outline-none';

const Header = () => {
  const { t, locale, currency } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const announcementIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we're on the checkout page
  const isCheckoutPage = pathname === '/checkout';

  const catalogNavigation = useMemo(() => [
    { label: t('nav.allCollections'), href: '/#products' },
    { label: t('nav.modernChairs'), href: '/search?query=Moderne%20Stühle%20Möbel' },
    { label: t('nav.diningTables'), href: '/search?query=Tische' },
    { label: t('nav.solidWoodRattan'), href: '/search?query=Rattan' },
    { label: t('nav.marbleCeramic'), href: '/search?query=Marmor%20Keramik' },
  ], [t]);

  const announcements = useMemo(() => [
    <div key="contact-chat" className="flex items-center gap-1.5">
      <span>💬</span>
      <span className="font-semibold">{t('announcements.chat')}</span>
    </div>,
    <a key="contact-email" href="mailto:contact@weteextees.com" className="flex items-center gap-1.5 hover:underline">
      <span>✉️</span>
      <span className="font-semibold">{t('announcements.email')}</span>
    </a>,
    <div key="shipping-guarantee" className="flex items-center gap-1.5">
      <span>🚚</span>
      <span className="font-semibold">{t('announcements.shippingGuarantee')}</span>
    </div>,
    <Link key="contact-page" href="/contact" className="flex items-center gap-1.5 hover:underline">
      <span>💬</span>
      <span className="font-semibold">{t('announcements.needHelp')}</span>
    </Link>
  ], [t]);

  // Announcement bar animation - auto-rotates
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

    setTimeout(() => {
      if (announcementIntervalRef.current) {
        clearInterval(announcementIntervalRef.current);
      }
      announcementIntervalRef.current = setInterval(() => {
        setCurrentAnnouncement(prev => (prev + 1) % announcements.length);
      }, 4000);
    }, 2000);
  };

  useEffect(() => {
    const updateCount = () => {
      const count = getCartCount();
      setCartCount(count);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener('cartUpdated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cartUpdated', updateCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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

  const handleCartClick = () => {
    if (cartCount > 0) {
      router.push('/checkout');
    }
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Announcement bar with Locale / Currency Switcher */}
      <div suppressHydrationWarning={true} className="bg-[#D1A966] text-[#142019] py-1.5 relative overflow-hidden min-h-[36px] sm:min-h-[40px] flex items-center">
        <div suppressHydrationWarning={true} className="container mx-auto px-3 sm:px-4 flex items-center justify-between relative w-full h-full">
          
          {/* Left / Center Announcement Carousel */}
          <div className="flex items-center justify-center flex-1 relative overflow-hidden">
            <button
              onClick={() => handleAnnouncementNavigation('prev')}
              className="hidden md:block p-1 hover:bg-[#1D2E24]/10 rounded-full transition-colors duration-200 text-[#142019] mr-2"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <div suppressHydrationWarning={true} className="text-center font-medium px-2 transition-all duration-500 ease-in-out flex items-center justify-center">
              <div key={currentAnnouncement} className="inline-block animate-fade-in text-xs sm:text-sm font-semibold">
                {announcements[currentAnnouncement]}
              </div>
            </div>

            <button
              onClick={() => handleAnnouncementNavigation('next')}
              className="hidden md:block p-1 hover:bg-[#1D2E24]/10 rounded-full transition-colors duration-200 text-[#142019] ml-2"
              aria-label="Next announcement"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        suppressHydrationWarning={true}
        className={`transition-all duration-300 ${isSticky
          ? 'fixed top-0 left-0 right-0 z-50 shadow-md'
          : 'relative'
          }`}
      >
        {/* Top Row: Logo, Search, Actions */}
        <div suppressHydrationWarning={true} className="bg-[#142019] text-[#f2f5f3]">
          <div suppressHydrationWarning={true} className="container mx-auto px-4 py-2 sm:py-2.5">
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
                  className="w-full flex items-center bg-[#24352B] rounded-lg px-4 py-2 cursor-pointer transition-shadow hover:shadow-sm border border-white/10"
                >
                  <input
                    type="text"
                    placeholder={t('common.searchPlaceholder')}
                    className="flex-1 bg-transparent outline-none text-sm text-[#f2f5f3] placeholder-gray-300 cursor-pointer"
                    readOnly
                  />
                  <Search className="h-4.5 w-4.5 text-[#D1A966]" />
                </div>
              </div>

              {/* Right side actions */}
              <div suppressHydrationWarning={true} className="flex items-center gap-3">
                {/* Mobile Search Icon */}
                {isSticky && (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="lg:hidden bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                    aria-label="Search"
                  >
                    <Search className="h-4.5 w-4.5" />
                  </button>
                )}

                {/* Help Center Icon - Desktop */}
                <Link
                  href="/contact"
                  className="hidden sm:flex bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                  aria-label={t('common.help')}
                  title={t('common.help')}
                >
                  <Info className="h-4.5 w-4.5" />
                </Link>

                {/* Cart */}
                <button
                  onClick={handleCartClick}
                  className="relative bg-[#D1A966] text-[#142019] hover:opacity-90 rounded-full p-2"
                  aria-label={`${t('common.cart')} ${cartCount > 0 ? `(${cartCount})` : ''}`}
                >
                  <ShoppingCart className="h-4.5 w-4.5" />
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
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {!isSticky && !isCheckoutPage && (
          <div suppressHydrationWarning={true} className="lg:hidden bg-[#1D2E24] border-t border-b border-white/10">
            <div suppressHydrationWarning={true} className="container mx-auto px-4 py-2.5">
              <div
                suppressHydrationWarning={true}
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center bg-[#24352B] rounded-lg px-4 py-2 cursor-pointer transition-shadow hover:shadow-sm border border-white/10"
              >
                <input
                  type="text"
                  placeholder={t('common.searchPlaceholder')}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-[#f2f5f3] placeholder-gray-300 cursor-pointer"
                  readOnly
                />
                <Search className="h-4 w-4 text-[#D1A966]" />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation Bar */}
        <div suppressHydrationWarning={true} className="hidden lg:block bg-[#1D2E24] border-t border-white/10">
          <div suppressHydrationWarning={true} className="container mx-auto px-4">
            <nav className="flex items-center justify-center gap-5 xl:gap-7 bg-[#1D2E24] py-2.5 font-sans">
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
                {t('nav.featured')}
              </Link>
              <Link href="/track" className={desktopNavLinkClass}>
                {t('nav.trackOrder')}
              </Link>
              <Link href="/frequently-asked-questions" className={desktopNavLinkClass}>
                {t('nav.faqs')}
              </Link>
              <Link href="/contact" className={desktopNavLinkClass}>
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#DCE5DE]">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col bg-white font-sans space-y-1">
                {catalogNavigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${mobileMenuLinkClass} py-3 border-b border-gray-100`}
                    onClick={handleMobileMenuClose}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/track" className={`${mobileMenuLinkClass} py-3 border-b border-gray-100`} onClick={handleMobileMenuClose}>
                  {t('nav.trackOrder')}
                </Link>
                <Link href="/frequently-asked-questions" className={`${mobileMenuLinkClass} py-3 border-b border-gray-100`} onClick={handleMobileMenuClose}>
                  {t('nav.faqs')}
                </Link>
                <Link href="/contact" className={`${mobileMenuLinkClass} py-3 border-b border-gray-100`} onClick={handleMobileMenuClose}>
                  {t('nav.contact')}
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* SearchBar overlay */}
        <SearchBar open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>
    </>
  );
};

export default Header;
