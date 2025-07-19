import { seoConfig, generateServiceStructuredData, generateBreadcrumbData } from '@/lib/seo-config'

interface LocalBusinessSchemaProps {
  serviceName?: string
  serviceDescription?: string
  pageUrl?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

export default function LocalBusinessSchema({ 
  serviceName, 
  serviceDescription, 
  pageUrl, 
  breadcrumbs 
}: LocalBusinessSchemaProps) {
  const schemas = []

  // Always include main business schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seoConfig.businessName,
    image: `${seoConfig.siteUrl}/logo.webp`,
    telephone: seoConfig.phone,
    email: seoConfig.email,
    url: seoConfig.siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.address.street,
      addressLocality: seoConfig.address.city,
      addressRegion: seoConfig.address.state,
      postalCode: seoConfig.address.zip,
      addressCountry: seoConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.coordinates.latitude,
      longitude: seoConfig.coordinates.longitude,
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
        latitude: seoConfig.coordinates.latitude,
        longitude: seoConfig.coordinates.longitude,
      },
      geoRadius: 50000,
    },
    areaServed: seoConfig.serviceAreas,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: seoConfig.rating.value.toString(),
      reviewCount: seoConfig.rating.count.toString(),
      bestRating: seoConfig.rating.maxRating.toString(),
    },
    sameAs: Object.values(seoConfig.socialProfiles),
  }
  schemas.push(businessSchema)

  // Add service schema if provided
  if (serviceName && serviceDescription && pageUrl) {
    const serviceSchema = generateServiceStructuredData(serviceName, serviceDescription, pageUrl)
    schemas.push(serviceSchema)
  }

  // Add breadcrumb schema if provided
  if (breadcrumbs && breadcrumbs.length > 1) {
    const breadcrumbSchema = generateBreadcrumbData(breadcrumbs)
    schemas.push(breadcrumbSchema)
  }

  // FAQ schema for common plumbing questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide 24/7 emergency plumbing services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, O.R.E. Plumbing provides 24/7 emergency plumbing services throughout Northern Utah. Call (435) 890-3316 for immediate assistance with burst pipes, major leaks, and other urgent plumbing emergencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve in Northern Utah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve Logan, Cache Valley, Preston, Smithfield, Hyde Park, North Logan, River Heights, Nibley, Millville, Providence, Hyrum, Wellsville, Mendon, Trenton, Clarkston, and surrounding areas in Northern Utah.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, O.R.E. Plumbing is fully licensed and insured. We carry general liability insurance and workers\' compensation insurance to protect our customers and employees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide free estimates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide free estimates for major plumbing projects over $500. For smaller repairs and service calls, we provide upfront pricing before any work begins.',
        },
      },
    ],
  }
  schemas.push(faqSchema)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
