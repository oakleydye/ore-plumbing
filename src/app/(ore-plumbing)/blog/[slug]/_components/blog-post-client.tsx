'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  tags?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface BlogPostClientProps {
  post: BlogPostData;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
        {/* Back to Blog Button */}
        <div className="mb-8">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <Card className="overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <CardContent className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published {formatDate(post.createdAt)}</span>
              </div>
              
              {post.tags && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.split(',').map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-lg text-blue-800 font-medium italic">
                  {post.excerpt}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  // Custom styling for different markdown elements
                  h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 text-gray-900">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-semibold mb-3 text-gray-900">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold mb-2 text-gray-900">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="mb-4 ml-6 space-y-2 list-disc">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-4 ml-6 space-y-2 list-decimal">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-400 pl-4 py-2 my-4 bg-blue-50 italic text-blue-800">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-4">
                      <table className="min-w-full border border-gray-300">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
                  tbody: ({ children }) => <tbody>{children}</tbody>,
                  tr: ({ children }) => <tr className="border-b border-gray-200">{children}</tr>,
                  th: ({ children }) => <th className="px-4 py-2 text-left font-semibold text-gray-900 border-r border-gray-300 last:border-r-0">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-2 text-gray-700 border-r border-gray-300 last:border-r-0">{children}</td>,
                  hr: () => <hr className="my-8 border-t-2 border-gray-300" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Need Professional Plumbing Services?
              </h3>
              <p className="text-gray-700 mb-4">
                Ore Plumbing provides expert plumbing services throughout Logan, North Logan, 
                and surrounding areas. Contact us today for reliable, professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Content */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Read More Plumbing Tips
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
