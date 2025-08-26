import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Insights | Ore Plumbing Blog',
  description: 'Expert plumbing advice, tips, and insights from Ore Plumbing professionals serving Logan, North Logan, and surrounding Utah areas. Learn about water heater maintenance, pipe repair, drain cleaning, and more.',
  keywords: 'plumbing tips, plumbing advice, Logan Utah plumber, plumbing maintenance, water heater tips, drain cleaning, pipe repair, plumbing blog',
  openGraph: {
    title: 'Plumbing Tips & Insights | Ore Plumbing Blog',
    description: 'Expert plumbing advice and tips from Ore Plumbing professionals in Logan, Utah.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumbing Tips & Insights | Ore Plumbing Blog',
    description: 'Expert plumbing advice and tips from Ore Plumbing professionals in Logan, Utah.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
