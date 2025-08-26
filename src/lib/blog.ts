import { db } from '@/lib/db';
import { unstable_cache } from 'next/cache';
import { revalidateTag } from 'next/cache';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  tags?: string | null;
  createdAt: string;
  updatedAt: string;
}

// Cache revalidation function
export function revalidateBlogCache() {
  revalidateTag('blog-posts');
}

export const getPublishedPosts = unstable_cache(
  async (): Promise<BlogPost[]> => {
    try {
      const posts = await db.blogPost.findMany({
        where: { published: true },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          featuredImage: true,
          tags: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      return posts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
    } catch (error) {
      console.error('Error fetching published blog posts:', error);
      return [];
    }
  },
  ['published-posts'],
  {
    revalidate: 300, // 5 minutes
    tags: ['blog-posts'],
  }
);

export const getPostBySlug = unstable_cache(
  async (slug: string) => {
    try {
      const post = await db.blogPost.findUnique({
        where: { 
          slug: slug,
          published: true 
        },
        select: {
          id: true,
          title: true,
          slug: true,
          content: true,
          excerpt: true,
          featuredImage: true,
          seoTitle: true,
          seoDescription: true,
          tags: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!post) return null;

      return {
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      };
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  },
  ['blog-post'],
  {
    revalidate: 300, // 5 minutes
    tags: ['blog-posts'],
  }
);

export const getRecentPosts = unstable_cache(
  async (limit: number = 3): Promise<BlogPost[]> => {
    try {
      const posts = await db.blogPost.findMany({
        where: { published: true },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          featuredImage: true,
          tags: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
      });

      return posts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
    } catch (error) {
      console.error('Error fetching recent blog posts:', error);
      return [];
    }
  },
  ['recent-posts'],
  {
    revalidate: 300, // 5 minutes
    tags: ['blog-posts'],
  }
);
