import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oreplumbing.com'
  
  // Service pages
  const servicePages = [
    'residential-new-install',
    'commercial',
    'bathroom-remodeling', 
    'water-softeners',
    'water-heater',
    'pipe-repair',
    'drain-cleaning',
    '_emergency-repairs'
  ]

  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
    '/logan-utah-plumber',
    '/north-logan-utah-plumber'
  ]

  const serviceUrls = servicePages.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticUrls = staticPages.map(page => {
    const changeFreq = page === '' ? 'weekly' : 'monthly';
    return {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: changeFreq as 'weekly' | 'monthly',
      priority: page === '' ? 1 : 0.8,
    };
  })

  return [
    ...staticUrls,
    ...serviceUrls
  ]
}
