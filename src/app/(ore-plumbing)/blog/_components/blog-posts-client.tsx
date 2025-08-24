'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';

interface BlogPostsClientProps {
  posts: BlogPost[];
}

export default function BlogPostsClient({ posts }: BlogPostsClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plumbing Tips & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, industry insights, and helpful tips from Ore Plumbing professionals 
            serving Logan, North Logan, and surrounding areas.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {formatDate(post.createdAt)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Tags */}
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.split(',').slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {/* Read More Button */}
                  <div className="pt-4">
                    <Button asChild variant="default" className="w-full">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Blog Posts Yet
              </h3>
              <p className="text-gray-600 mb-6">
                We're working on creating helpful content for you. Check back soon for expert plumbing tips and insights!
              </p>
              <Button asChild>
                <Link href="/contact">
                  Contact Us for Immediate Help
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
