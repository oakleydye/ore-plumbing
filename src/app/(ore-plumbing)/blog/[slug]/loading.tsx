import { Card, CardContent } from '@/components/ui/card';

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          {/* Back button skeleton */}
          <div className="h-10 w-32 bg-gray-200 rounded mb-8"></div>
          
          {/* Main Content Card */}
          <Card className="overflow-hidden">
            {/* Featured image skeleton */}
            <div className="w-full h-64 md:h-96 bg-gray-200"></div>
            
            <CardContent className="p-8 md:p-12">
              {/* Title skeleton */}
              <div className="h-8 md:h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
              
              {/* Meta info skeleton */}
              <div className="flex gap-6 mb-8">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>
              
              {/* Excerpt skeleton */}
              <div className="bg-blue-50 border-l-4 border-blue-200 p-6 mb-8">
                <div className="h-6 bg-blue-200 rounded w-5/6"></div>
              </div>
              
              {/* Content skeleton */}
              <div className="space-y-4 mb-12">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
              
              {/* CTA skeleton */}
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="h-6 bg-blue-200 rounded w-1/2 mb-3"></div>
                <div className="h-4 bg-blue-200 rounded w-3/4 mb-4"></div>
                <div className="flex gap-3">
                  <div className="h-10 bg-blue-200 rounded w-32"></div>
                  <div className="h-10 bg-blue-200 rounded w-32"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Related content skeleton */}
          <div className="mt-12 text-center">
            <div className="h-12 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
