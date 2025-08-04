// Structured data components for SEO

interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

export function LocalBusinessSchema({
  name = "O.R.E. Plumbing",
  description = "Professional plumbing services in Cache County, Utah. 24/7 emergency service, drain cleaning, water heater installation, pipe repair and more.",
  url = "https://www.oreplumbing.com",
  telephone = "+14358903316",
  address = {
    streetAddress: "",
    addressLocality: "Cache County",
    addressRegion: "Utah",
    postalCode: "",
    addressCountry: "US"
  },
  geo = {
    latitude: 41.7370,
    longitude: -111.8338
  },
  openingHours = [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-15:00"
  ],
  priceRange = "$$"
}: LocalBusinessProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days,
        "opens": opens,
        "closes": closes
      };
    }),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing Repair",
            "description": "24/7 emergency plumbing services in Cache County"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
            "description": "Professional drain cleaning and unclogging services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Installation",
            "description": "Water heater installation, repair and replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pipe Repair",
            "description": "Pipe repair, replacement and installation services"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": telephone,
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add your social media profiles here when available
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ServicePageSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  provider?: string;
  areaServed?: string;
  offers?: {
    price?: string;
    priceRange?: string;
    priceCurrency?: string;
  };
}

export function ServicePageSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  provider = "O.R.E. Plumbing",
  areaServed = "Cache County, Utah",
  offers
}: ServicePageSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "Plumber",
      "name": provider,
      "telephone": "+14358903316",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cache County",
        "addressRegion": "Utah",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": areaServed
    },
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceRange": offers.priceRange,
        "priceCurrency": offers.priceCurrency || "USD"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
