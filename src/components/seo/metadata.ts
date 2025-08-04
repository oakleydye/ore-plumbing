import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  alternates?: {
    canonical?: string;
  };
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://www.oreplumbing.com' 
    : 'http://localhost:3000';

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'O.R.E. Plumbing' }],
    creator: 'O.R.E. Plumbing',
    publisher: 'O.R.E. Plumbing',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || baseUrl,
    },
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      type: (config.openGraph?.type as 'website') || 'website',
      locale: 'en_US',
      url: config.openGraph?.url || config.canonical || baseUrl,
      siteName: 'O.R.E. Plumbing',
      images: config.openGraph?.image ? [
        {
          url: config.openGraph.image,
          width: 1200,
          height: 630,
          alt: config.openGraph.title || config.title,
        }
      ] : undefined,
    },
    twitter: {
      card: (config.twitter?.card as 'summary_large_image') || 'summary_large_image',
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.image ? [config.twitter.image] : undefined,
    },
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
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

// Cache County specific SEO configurations
export const cacheCountySEO = {
  locations: [
    'Logan', 'North Logan', 'Hyde Park', 'Smithfield', 'Providence', 
    'Millville', 'River Heights', 'Nibley', 'Cache', 'Clarkston',
    'Newton', 'Trenton', 'Amalga', 'Wellsville', 'Mendon', 'Cornish'
  ],
  serviceKeywords: [
    'plumber', 'plumbing services', 'emergency plumber', 'drain cleaning',
    'water heater repair', 'pipe repair', 'bathroom remodeling', 'commercial plumbing',
    'residential plumbing', 'water softener installation', 'sewer repair',
    'leak detection', 'toilet repair', 'faucet installation', 'garbage disposal repair'
  ],
  businessTypes: [
    'licensed plumber', 'certified plumber', 'professional plumbing contractor',
    'plumbing company', 'plumbing service', 'local plumber'
  ]
};

export function getLocalSEOKeywords(service?: string, location?: string): string {
  const { locations, serviceKeywords, businessTypes } = cacheCountySEO;
  
  const primaryKeywords = service 
    ? serviceKeywords.filter(keyword => keyword.includes(service.toLowerCase()))
    : serviceKeywords.slice(0, 8);
    
  const locationKeywords = location 
    ? [location]
    : locations.slice(0, 5);
    
  const businessKeywords = businessTypes.slice(0, 3);
  
  const combinedKeywords = [
    ...primaryKeywords,
    ...locationKeywords.map(loc => `plumber ${loc} Utah`),
    ...locationKeywords.map(loc => `plumbing services ${loc}`),
    ...businessKeywords.map(type => `${type} Cache County`),
    'Cache County plumber',
    'Northern Utah plumbing',
    'Utah Valley plumber'
  ];
  
  return combinedKeywords.join(', ');
}

export const defaultSEO: SEOConfig = {
  title: 'O.R.E. Plumbing - Expert Plumbers in Cache County, Utah | 24/7 Emergency Service',
  description: 'Professional plumbing services in Cache County, Utah. Emergency repairs, drain cleaning, water heater installation, pipe repair & more. Licensed, insured & locally owned. Call (435) 890-3316.',
  keywords: getLocalSEOKeywords(),
  openGraph: {
    type: 'website',
    image: '/logo.webp',
  },
};
