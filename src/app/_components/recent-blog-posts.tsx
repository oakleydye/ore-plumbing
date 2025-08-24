import { getRecentPosts } from '@/lib/blog';
import RecentBlogPostsClient from './recent-blog-posts-client';

interface RecentBlogPostsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default async function RecentBlogPosts({ limit = 3, showViewAll = true }: RecentBlogPostsProps) {
  const posts = await getRecentPosts(limit);

  return <RecentBlogPostsClient posts={posts} showViewAll={showViewAll} />;
}
