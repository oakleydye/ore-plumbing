import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'O.R.E. Plumbing - Professional Plumbing Services in Northern Utah',
    short_name: 'O.R.E. Plumbing',
    description: 'Professional plumbing services in Northern Utah including emergency repairs, drain cleaning, water heater installation, and complete plumbing system installation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066cc',
    categories: ['business', 'utilities', 'home'],
    icons: [
      {
        src: '/logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    orientation: 'portrait-primary',
    lang: 'en-US',
    dir: 'ltr',
    scope: '/',
    id: 'ore-plumbing-app',
  }
}
