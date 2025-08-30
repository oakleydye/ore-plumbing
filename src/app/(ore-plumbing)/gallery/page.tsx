import { Metadata } from 'next';
import GalleryClient from './_components/gallery-client';

export const metadata: Metadata = {
  title: 'Project Gallery | Ore Plumbing - Logan, Utah',
  description: 'View our recent plumbing projects and transformations. See the quality workmanship Ore Plumbing delivers throughout Logan, North Logan, and surrounding areas.',
  keywords: 'plumbing projects, before after photos, Logan plumber work, Utah plumbing gallery, plumbing transformations',
  openGraph: {
    title: 'Project Gallery | Ore Plumbing',
    description: 'View our recent plumbing projects and transformations in Logan, Utah.',
    type: 'website',
  }
};

export default function GalleryPage() {
  return <GalleryClient />;
}
