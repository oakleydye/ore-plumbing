import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
import MenuBar from "./_components/menu-bar";
import Footer from "./_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oreplumbing.com'),
  title: {
    default: 'O.R.E. Plumbing | Professional Plumbing Services - Northern Utah',
    template: '%s | O.R.E. Plumbing - Northern Utah'
  },
  description: 'Professional plumbing services in Northern Utah. 24/7 emergency repairs, drain cleaning, water heater installation, bathroom remodeling, and complete plumbing system installation. Licensed & insured.',
  keywords: [
    'plumber Northern Utah',
    'Logan Utah plumber', 
    'emergency plumbing',
    'drain cleaning',
    'water heater installation',
    'bathroom remodeling plumbing',
    'residential plumbing',
    'commercial plumbing',
    'Cache Valley plumber',
    '24/7 plumber Utah'
  ],
  authors: [{ name: 'O.R.E. Plumbing' }],
  creator: 'O.R.E. Plumbing',
  publisher: 'O.R.E. Plumbing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'business',
  classification: 'Plumbing Services',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oreplumbing.com',
    siteName: 'O.R.E. Plumbing',
    title: 'O.R.E. Plumbing | Professional Plumbing Services - Northern Utah',
    description: 'Professional plumbing services in Northern Utah. 24/7 emergency repairs, drain cleaning, water heater installation, and more. Licensed & insured plumbers.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'O.R.E. Plumbing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O.R.E. Plumbing | Professional Plumbing Services - Northern Utah',
    description: 'Professional plumbing services in Northern Utah. 24/7 emergency repairs, drain cleaning, water heater installation, and more. Licensed & insured plumbers.',
    images: ['/logo.webp'],
    creator: '@oreplumbing',
    site: '@oreplumbing',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  alternates: {
    canonical: 'https://oreplumbing.com',
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Logan, Utah',
    'geo.position': '41.7370;-111.8338',
    'ICBM': '41.7370, -111.8338',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://oreplumbing.com/#business',
        name: 'O.R.E. Plumbing',
        image: 'https://oreplumbing.com/logo.webp',
        telephone: '(435) 890-3316',
        email: 'info@oreplumbing.com',
        url: 'https://oreplumbing.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Logan',
          addressLocality: 'Logan',
          addressRegion: 'UT',
          postalCode: '84321',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.7370,
          longitude: -111.8338,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '16:00',
          },
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 41.7370,
            longitude: -111.8338,
          },
          geoRadius: 50000,
        },
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Check, Credit Card',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Plumbing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Plumbing Repair',
                description: '24/7 emergency plumbing services for urgent repairs',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Drain Cleaning',
                description: 'Professional drain cleaning and unclogging services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Water Heater Installation',
                description: 'Water heater installation, repair, and maintenance',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bathroom Remodeling Plumbing',
                description: 'Complete plumbing services for bathroom renovations',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
        },
        areaServed: [
          'Logan, UT',
          'Cache Valley, UT',
          'Preston, ID',
          'Smithfield, UT',
          'Hyde Park, UT',
          'North Logan, UT',
          'River Heights, UT',
          'Nibley, UT',
          'Millville, UT',
          'Providence, UT',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://oreplumbing.com/#website',
        url: 'https://oreplumbing.com',
        name: 'O.R.E. Plumbing',
        description: 'Professional plumbing services in Northern Utah',
        publisher: {
          '@id': 'https://oreplumbing.com/#business',
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://oreplumbing.com/services?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://oreplumbing.com/#organization',
        name: 'O.R.E. Plumbing',
        url: 'https://oreplumbing.com',
        logo: 'https://oreplumbing.com/logo.webp',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '(435) 890-3316',
          contactType: 'customer service',
          availableLanguage: 'English',
          areaServed: 'Northern Utah',
        },
        sameAs: [
          'https://www.facebook.com/oreplumbing',
          'https://www.instagram.com/oreplumbing',
          'https://www.linkedin.com/company/oreplumbing',
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://oreplumbing.com" />
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Logan, Utah" />
        <meta name="geo.position" content="41.7370;-111.8338" />
        <meta name="ICBM" content="41.7370, -111.8338" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <MenuBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
