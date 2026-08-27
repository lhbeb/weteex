import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ErrorBoundaryWrapper from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { Suspense } from "react";
import VisitNotifier from "@/components/VisitNotifier";
import FacebookPixel from "@/components/FacebookPixel";
import { AdminRouteCheck, PublicRouteOnly, AdminRouteOnly, CheckoutRouteOnly } from "@/components/AdminRouteCheck";
import GlobalErrorReporter from "@/components/GlobalErrorReporter";
import TidioChat from "@/components/TidioChat";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weteextees - Transform Your Home with Timeless Furniture",
  description: "Discover premium-quality furniture designed to bring comfort, elegance, and style to every room. Shop modern, classic, and space-saving pieces crafted to enhance your living experience.",
  keywords: "Weteextees, Weteextees.com, timeless furniture, modern furniture, modern chairs, authentic antiques, space-saving furniture, living room decor, premium furniture",
  authors: [{ name: "Weteextees" }],
  creator: "Weteextees",
  publisher: "Weteextees",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://weteextees.com"),
  openGraph: {
    title: "Weteextees - Transform Your Home with Timeless Furniture",
    description: "Discover premium-quality furniture designed to bring comfort, elegance, and style to every room. Shop modern, classic, and space-saving pieces crafted to enhance your living experience.",
    url: "https://weteextees.com",
    siteName: "Weteextees",
    images: [
      {
        url: "/bg.png",
        width: 1608,
        height: 969,
        alt: "Weteextees - Transform Your Home with Timeless Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weteextees - Transform Your Home with Timeless Furniture",
    description: "Discover premium-quality furniture designed to bring comfort, elegance, and style to every room. Shop modern, classic, and space-saving pieces crafted to enhance your living experience.",
    images: ["/bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="200x200" />
        <link rel="preload" href="/weteex-machines-logo.svg" as="image" type="image/svg+xml" />
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="k3ytyf6hqaa462mz10uzwnmugj0d0o" />
        <meta name="msvalidate.01" content="75494FC1101908256EEEA046C47C3264" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="o8gC6haURQ1t7L9G8xfh_-5imCYNPmnhjnt2IrgEPco" />
        {/* Google Merchant Center Domain Claim Verification */}
        <meta name="google-site-verification" content="IIcw4xDKBiR-hwj3tnHt5Q3I5m2VzAn7LMXe-JXfi_Y" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-[#262626]">
        <GlobalErrorReporter />
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <PublicRouteOnly>
          <VisitNotifier />
        </PublicRouteOnly>
        {/* Organization Schema */}
        <AdminRouteCheck>
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Weteextees",
                "url": "https://weteextees.com",
                "logo": "https://weteextees.com/weteex-machines-logo.svg",
                "description": "Weteextees is your destination for authentic antiques, modern chairs and furniture, unique vintage collectibles, and one-of-a-kind decorative pieces.",
                "sameAs": [
                  "https://www.tiktok.com/@weteexmachines",
                  "https://www.instagram.com/weteexmachines_official/",
                  "https://www.pinterest.com/weteexmachines_official"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "contact@weteextees.com",
                  "telephone": "+447533408378",
                  "areaServed": ["GB", "US", "EU"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "71-75 Shelton Street",
                  "addressLocality": "London",
                  "addressRegion": "Greater London",
                  "postalCode": "WC2H 9JQ",
                  "addressCountry": "GB"
                }
              })
            }}
          />
        </AdminRouteCheck>

        {/* WebSite Schema */}
        <AdminRouteCheck>
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Weteextees",
                "url": "https://weteextees.com",
                "description": "Weteextees is your destination for authentic antiques, modern furniture, vintage collectibles, and decorative pieces.",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://weteextees.com/api/products/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
        </AdminRouteCheck>

        <ErrorBoundaryWrapper>
          {/* Public website with header, footer, etc. */}
          <PublicRouteOnly>
            <div className="min-h-screen flex flex-col">
              <Suspense fallback={null}>
                <ClientHeader />
              </Suspense>
              <main className="flex-grow">
                {children}
              </main>
              <NewsletterSection />
              <div className="h-4 bg-white md:h-6" aria-hidden="true" />
              <Footer />
            </div>
            <CookieConsent />
          </PublicRouteOnly>

          {/* Checkout page - navbar only, no distractions */}
          <CheckoutRouteOnly>
            <div className="min-h-screen flex flex-col">
              <Suspense fallback={null}>
                <ClientHeader />
              </Suspense>
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </CheckoutRouteOnly>

          {/* Admin dashboard - clean, no public UI */}
          <AdminRouteOnly>
            {children}
          </AdminRouteOnly>
        </ErrorBoundaryWrapper>

        <AdminRouteCheck>
          <Script
            src="https://analyticsapp-five.vercel.app/tracker.js"
            strategy="afterInteractive"
            async
          />
        </AdminRouteCheck>
        <TidioChat />
        <SpeedInsights />
      </body>
    </html>
  );
}
