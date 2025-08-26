'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published: boolean;
  tags?: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePublished = async (id: string, published: boolean) => {
    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !published })
      });

      if (res.ok) {
        await fetchPosts();
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        await fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <div className="flex gap-2">
          <Button onClick={fetchPosts} variant="outline">
            Refresh
          </Button>
          <Button asChild>
            <a href="/admin/blog/new">Create New Post</a>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>
                    Slug: /{post.slug} • Created: {new Date(post.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-4">
                  <Badge variant={post.published ? "default" : "secondary"}>
                    {post.published ? "Published" : "Draft"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {post.excerpt && (
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              )}
              
              {post.tags && (
                <div className="flex flex-wrap gap-1">
                  {post.tags.split(',').map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag.trim()}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex gap-2 justify-end pt-4 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                >
                  <a href={`/admin/blog/${post.id}/edit`}>Edit</a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => togglePublished(post.id, post.published)}
                >
                  {post.published ? "Unpublish" : "Publish"}
                </Button>
                {post.published && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a href={`/blog/${post.slug}`} target="_blank">
                      View
                    </a>
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {posts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 mb-4">No blog posts created yet.</p>
              <Button asChild>
                <a href="/admin/blog/new">Create Your First Post</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
