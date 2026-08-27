import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
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
              Your destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 shrink-0 text-[#D1A966] mr-2" />
                <a href="tel:+447533408378" className="hover:text-[#D1A966] transition-colors duration-300">
                  <span className="font-semibold text-white">Customer support:</span> +44 7533 408378
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#D1A966] mr-2" />
                <a href="mailto:contact@weteextees.com" className="hover:text-[#D1A966] transition-colors duration-300">
                  contact@weteextees.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 shrink-0 text-[#D1A966] mr-2 mt-1" />
                <div>
                  <span className="block font-semibold text-white">Registered Office</span>
                  <span className="text-[#DCE5DE]">Hochalmstraße 10, 81825 München, Bayern, Germany</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D1A966] mb-4">Navigation</h3>
            <ul className="space-y-2 text-[#DCE5DE]">
              <li><Link href="/" className="hover:text-[#D1A966] transition-colors duration-300">Home</Link></li>
              <li><Link href="/#products" className="hover:text-[#D1A966] transition-colors duration-300">All Furniture &amp; Antiques</Link></li>
              <li><Link href="/#featured" className="hover:text-[#D1A966] transition-colors duration-300">Featured Pieces</Link></li>
              <li><Link href="/track" className="hover:text-[#D1A966] transition-colors duration-300">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-[#D1A966] transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D1A966] mb-4">Policies &amp; Info</h3>
            <ul className="space-y-2 text-[#DCE5DE]">
              <li><Link href="/privacy-policy" className="hover:text-[#D1A966] transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#D1A966] transition-colors duration-300">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-[#D1A966] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/frequently-asked-questions" className="hover:text-[#D1A966] transition-colors duration-300">FAQs</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#D1A966] transition-colors duration-300">Refund &amp; Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#D1A966] transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link href="/local-pickup" className="hover:text-[#D1A966] transition-colors duration-300">Local Pickup Guide</Link></li>
              <li><Link href="/contact" className="hover:text-[#D1A966] transition-colors duration-300">Contact Us</Link></li>
              <li><Link href="/cookies" className="hover:text-[#D1A966] transition-colors duration-300">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#DCE5DE]/15 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center">
              <Image
                src="/secure-checkout.png"
                alt="Secure Checkout"
                width={400}
                height={64}
                className="h-16 w-auto max-w-full object-contain brightness-110 contrast-110"
              />
            </div>
            <p className="text-center text-[#DCE5DE]/80 text-sm">© {new Date().getFullYear()} Weteextees. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
