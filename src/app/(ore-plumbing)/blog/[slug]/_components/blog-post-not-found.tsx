import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/blog">
              View All Blog Posts
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
