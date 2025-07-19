export const seoConfig = {
  // Basic site info
  siteName: 'O.R.E. Plumbing',
  siteUrl: 'https://oreplumbing.com',
  businessName: 'O.R.E. Plumbing',
  
  // Contact information
  phone: '(435) 890-3316',
  email: 'info@oreplumbing.com',
  
  // Location
  address: {
    street: 'Logan',
    city: 'Logan',
    state: 'UT',
    zip: '84321',
    country: 'US',
  },
  
  // Coordinates for Logan, Utah
  coordinates: {
    latitude: 41.7370,
    longitude: -111.8338,
  },
  
  // Service areas
  serviceAreas: [
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
    'Hyrum, UT',
    'Wellsville, UT',
    'Mendon, UT',
    'Trenton, UT',
    'Clarkston, UT',
  ],
  
  // Business hours
  businessHours: {
    monday: { open: '07:00', close: '18:00' },
    tuesday: { open: '07:00', close: '18:00' },
    wednesday: { open: '07:00', close: '18:00' },
    thursday: { open: '07:00', close: '18:00' },
    friday: { open: '07:00', close: '18:00' },
    saturday: { open: '08:00', close: '16:00' },
    sunday: 'Emergency calls only',
  },
  
  // Social media profiles
  socialProfiles: {
    facebook: 'https://www.facebook.com/oreplumbing',
    instagram: 'https://www.instagram.com/oreplumbing',
    linkedin: 'https://www.linkedin.com/company/oreplumbing',
    youtube: 'https://www.youtube.com/@oreplumbing',
    twitter: 'https://twitter.com/oreplumbing',
  },
  
  // Main services for SEO
  services: [
    {
      name: 'Emergency Plumbing Repair',
      description: '24/7 emergency plumbing services for urgent repairs',
      keywords: ['emergency plumber', '24/7 plumber', 'urgent plumbing repair'],
    },
    {
      name: 'New Residential Plumbing Installation',
      description: 'Complete plumbing system installation for new construction',
      keywords: ['new construction plumbing', 'residential plumbing installation', 'whole house plumbing'],
    },
    {
      name: 'Commercial Plumbing Services',
      description: 'Comprehensive plumbing services for businesses and commercial properties',
      keywords: ['commercial plumber', 'business plumbing', 'restaurant plumbing'],
    },
    {
      name: 'Bathroom Remodeling Plumbing',
      description: 'Complete plumbing services for bathroom renovations and remodels',
      keywords: ['bathroom plumbing', 'bathroom renovation plumber', 'fixture installation'],
    },
    {
      name: 'Water Softener Installation',
      description: 'Professional water softener installation and maintenance services',
      keywords: ['water softener installation', 'water treatment', 'hard water solutions'],
    },
    {
      name: 'Water Heater Services',
      description: 'Water heater installation, repair, and maintenance including tankless systems',
      keywords: ['water heater installation', 'tankless water heater', 'water heater repair'],
    },
    {
      name: 'Pipe Repair and Installation',
      description: 'Complete pipe services including repairs, replacements, and new installations',
      keywords: ['pipe repair', 'pipe replacement', 'repiping', 'leak detection'],
    },
    {
      name: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services',
      keywords: ['drain cleaning', 'clogged drain', 'sewer cleaning', 'hydro jetting'],
    },
  ],
  
  // Review/rating info
  rating: {
    value: 4.9,
    count: 127,
    maxRating: 5,
  },
  
  // Common keywords for the business
  keywords: [
    'plumber Northern Utah',
    'Logan Utah plumber',
    'Cache Valley plumber',
    'emergency plumbing Utah',
    'drain cleaning Logan',
    'water heater installation Utah',
    'bathroom remodeling plumber',
    'residential plumbing services',
    'commercial plumbing Utah',
    '24/7 plumber Logan',
    'licensed plumber Utah',
    'insured plumbing contractor',
    'pipe repair Logan Utah',
    'water softener installation Utah',
    'new construction plumbing',
  ],
  
  // Default meta descriptions by page type
  defaultDescriptions: {
    home: 'Professional plumbing services in Northern Utah. 24/7 emergency repairs, drain cleaning, water heater installation, bathroom remodeling, and complete plumbing system installation. Licensed & insured.',
    services: 'Comprehensive plumbing services in Northern Utah including emergency repairs, installations, and maintenance. Professional, licensed plumbers serving Logan, Cache Valley, and surrounding areas.',
    about: 'Learn about O.R.E. Plumbing, Northern Utah\'s trusted plumbing contractor. Licensed, insured, and committed to providing exceptional plumbing services to residential and commercial customers.',
    contact: 'Contact O.R.E. Plumbing for professional plumbing services in Northern Utah. 24/7 emergency service, free quotes, and fast response times. Call (435) 890-3316.',
  },
}

// Helper function to generate page-specific structured data
export function generateServiceStructuredData(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: seoConfig.businessName,
      telephone: seoConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: seoConfig.address.city,
        addressRegion: seoConfig.address.state,
        addressCountry: seoConfig.address.country,
      },
    },
    areaServed: seoConfig.serviceAreas,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: seoConfig.phone,
    },
  }
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
