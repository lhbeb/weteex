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
  title: "Weteextees - Verwandeln Sie Ihr Zuhause mit zeitlosen Möbeln",
  description: "Entdecken Sie erstklassige Möbel für Komfort, Eleganz und Stil in jedem Raum. Entdecken Sie moderne, klassische und platzsparende Stücke für Ihr Zuhause.",
  keywords: "Weteextees, Weteextees.com, zeitlose Möbel, moderne Möbel, Esszimmerstühle, Rattanmöbel, platzsparende Möbel, Wohnzimmermöbel, Premium-Möbel Deutschland",
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
    title: "Weteextees - Verwandeln Sie Ihr Zuhause mit zeitlosen Möbeln",
    description: "Entdecken Sie erstklassige Möbel für Komfort, Eleganz und Stil in jedem Raum. Entdecken Sie moderne, klassische und platzsparende Stücke für Ihr Zuhause.",
    url: "https://weteextees.com",
    siteName: "Weteextees",
    images: [
      {
        url: "/bg.png",
        width: 1608,
        height: 969,
        alt: "Weteextees - Verwandeln Sie Ihr Zuhause mit zeitlosen Möbeln",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weteextees - Verwandeln Sie Ihr Zuhause mit zeitlosen Möbeln",
    description: "Entdecken Sie erstklassige Möbel für Komfort, Eleganz und Stil in jedem Raum. Entdecken Sie moderne, klassische und platzsparende Stücke für Ihr Zuhause.",
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
    <html lang="de" className={dmSans.variable}>
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
        <meta name="google-site-verification" content="b9sTsKBaeI57rZlsQCFgRUX6n2euhrco-VzhjdgobjU" />
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
                "description": "Weteextees ist Ihre Adresse für hochwertige moderne Möbel, Esszimmerstühle, Naturholz- und Rattanmöbel sowie zeitlose Wohnkultur.",
                "sameAs": [
                  "https://www.tiktok.com/@weteexmachines",
                  "https://www.instagram.com/weteextees/",
                  "https://www.pinterest.com/weteexmachines_official"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "contact@weteextees.com",
                  "areaServed": ["DE", "EU", "GB", "US"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hochalmstraße 10",
                  "addressLocality": "München",
                  "addressRegion": "Bayern",
                  "postalCode": "81825",
                  "addressCountry": "DE"
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
                "description": "Weteextees ist Ihre Adresse für handverlesene moderne Möbel, ergonomische Esszimmerstühle, Naturholz- und Rattanmöbel sowie zeitlose Wohnkultur.",
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
