import { getPublishedPosts } from '@/lib/blog';
import BlogPostsClient from './_components/blog-posts-client';

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return <BlogPostsClient posts={posts} />;
}
