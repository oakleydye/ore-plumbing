'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface Review {
  id: string;
  customerName: string;
  customerEmail?: string;
  rating: number;
  title?: string;
  content: string;
  serviceType?: string;
  jobDate?: string;
  approved: boolean;
  featured: boolean;
  response?: string;
  createdAt: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [response, setResponse] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/admin/reviews');
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateReview = async (id: string, updates: Partial<Review>) => {
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (res.ok) {
        await fetchReviews();
      }
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const handleRespond = async (id: string) => {
    if (!response.trim()) return;

    setSubmitting(true);
    try {
      await updateReview(id, { response: response.trim() });
      setSelectedReview(null);
      setResponse('');
    } catch (error) {
      console.error('Error responding to review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        await fetchReviews();
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
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
        <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
        <Button onClick={fetchReviews} variant="outline">
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    {review.customerName}
                    <span className="text-yellow-500 text-lg">
                      {renderStars(review.rating)}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {review.customerEmail && `${review.customerEmail} • `}
                    {review.serviceType && `${review.serviceType} • `}
                    {new Date(review.createdAt).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-4">
                  <Badge variant={review.approved ? "default" : "secondary"} className={review.approved ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : ""}>
                    {review.approved ? "Approved" : "Pending"}
                  </Badge>
                  {review.featured && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-800 border border-amber-200">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {review.title && (
                <h4 className="font-medium text-gray-900">{review.title}</h4>
              )}
              
              <p className="text-gray-700">{review.content}</p>
              
              {review.jobDate && (
                <p className="text-sm text-gray-500">
                  Service completed: {new Date(review.jobDate).toLocaleDateString()}
                </p>
              )}

              {review.response && (
                <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-200">
                  <span className="text-sm font-medium text-cyan-800">Your Response: </span>
                  <p className="text-sm text-cyan-700 mt-1">{review.response}</p>
                </div>
              )}

              <div className="flex gap-2 justify-between items-center pt-4 border-t">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateReview(review.id, { approved: !review.approved })}
                  >
                    {review.approved ? "Unapprove" : "Approve"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateReview(review.id, { featured: !review.featured })}
                  >
                    {review.featured ? "Unfeature" : "Feature"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedReview(review)}
                  >
                    {review.response ? "Edit Response" : "Respond"}
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteReview(review.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {reviews.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">No reviews found.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Response Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Respond to {selectedReview.customerName}</CardTitle>
              <CardDescription>
                {renderStars(selectedReview.rating)} review
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Review:</strong>
                <p className="mt-1">{selectedReview.content}</p>
              </div>
              
              <Textarea
                placeholder="Type your response here..."
                value={response || selectedReview.response || ''}
                onChange={(e) => setResponse(e.target.value)}
                rows={4}
              />
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedReview(null);
                    setResponse('');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleRespond(selectedReview.id)}
                  disabled={submitting}
                  className="bg-slate-700 hover:bg-slate-800 text-white"
                >
                  {submitting ? 'Saving...' : 'Save Response'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
