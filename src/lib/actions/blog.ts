'use server';

import { db } from '@/lib/db';
import { revalidateBlogCache } from '@/lib/blog';
import { redirect } from 'next/navigation';

export async function createBlogPost(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const excerpt = formData.get('excerpt') as string;
  const featuredImage = formData.get('featuredImage') as string;
  const seoTitle = formData.get('seoTitle') as string;
  const seoDescription = formData.get('seoDescription') as string;
  const tags = formData.get('tags') as string;
  const published = formData.get('published') === 'true';

  try {
    // Check if slug already exists
    const existingPost = await db.blogPost.findUnique({
      where: { slug }
    });

    if (existingPost) {
      throw new Error('A post with this slug already exists');
    }

    const blogPost = await db.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        featuredImage: featuredImage || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        tags: tags || null,
        published,
      }
    });

    // Revalidate blog cache
    revalidateBlogCache();

    return { success: true, post: blogPost };
  } catch (error) {
    console.error('Error creating blog post:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create blog post' 
    };
  }
}

export async function updateBlogPost(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const excerpt = formData.get('excerpt') as string;
  const featuredImage = formData.get('featuredImage') as string;
  const seoTitle = formData.get('seoTitle') as string;
  const seoDescription = formData.get('seoDescription') as string;
  const tags = formData.get('tags') as string;
  const published = formData.get('published') === 'true';

  try {
    // Check if slug is being changed and if it conflicts with another post
    const existingPost = await db.blogPost.findUnique({
      where: { slug, NOT: { id } }
    });

    if (existingPost) {
      throw new Error('A post with this slug already exists');
    }

    const blogPost = await db.blogPost.update({
      where: { id },
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        featuredImage: featuredImage || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        tags: tags || null,
        published,
      }
    });

    // Revalidate blog cache
    revalidateBlogCache();

    return { success: true, post: blogPost };
  } catch (error) {
    console.error('Error updating blog post:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to update blog post' 
    };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await db.blogPost.delete({
      where: { id }
    });

    // Revalidate blog cache
    revalidateBlogCache();

    return { success: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { 
      success: false, 
      error: 'Failed to delete blog post' 
    };
  }
}

export async function toggleBlogPostPublished(id: string, published: boolean) {
  try {
    const blogPost = await db.blogPost.update({
      where: { id },
      data: { published }
    });

    // Revalidate blog cache
    revalidateBlogCache();

    return { success: true, post: blogPost };
  } catch (error) {
    console.error('Error toggling blog post published status:', error);
    return { 
      success: false, 
      error: 'Failed to update blog post' 
    };
  }
}
