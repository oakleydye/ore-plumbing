import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPublishedPosts } from '@/lib/blog';
import BlogPostClient from './_components/blog-post-client';
import BlogPostNotFound from './_components/blog-post-not-found';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all published blog posts
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Ore Plumbing',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.seoTitle || post.title} | Ore Plumbing`,
    description: post.seoDescription || post.excerpt || `${post.title} - Expert plumbing advice from Ore Plumbing`,
    keywords: post.tags || 'plumbing, Logan Utah, plumber',
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || `${post.title} - Expert plumbing advice from Ore Plumbing`,
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || `${post.title} - Expert plumbing advice from Ore Plumbing`,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <BlogPostNotFound />;
  }

  return <BlogPostClient post={post} />;
}
