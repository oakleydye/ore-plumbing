'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface JobBid {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  serviceType: string;
  description: string;
  location: string;
  urgency: string;
  budget?: string;
  status: string;
  quote?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export default function JobBidsPage() {
  const [bids, setBids] = useState<JobBid[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBid, setSelectedBid] = useState<JobBid | null>(null);
  const [quoteForm, setQuoteForm] = useState({
    quote: '',
    notes: '',
    status: 'quoted'
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchBids();
  }, []);

  const fetchBids = async () => {
    try {
      const res = await fetch('/api/admin/job-bids');
      if (res.ok) {
        const data = await res.json();
        setBids(data);
      }
    } catch (error) {
      console.error('Error fetching job bids:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBid = async (id: string, updates: Partial<JobBid>) => {
    try {
      const res = await fetch(`/api/admin/job-bids/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (res.ok) {
        await fetchBids();
      }
    } catch (error) {
      console.error('Error updating job bid:', error);
    }
  };

  const handleSubmitQuote = async () => {
    if (!selectedBid || !quoteForm.quote.trim()) return;

    setSubmitting(true);
    try {
      await updateBid(selectedBid.id, {
        quote: quoteForm.quote.trim(),
        notes: quoteForm.notes.trim() || undefined,
        status: quoteForm.status
      });
      setSelectedBid(null);
      setQuoteForm({ quote: '', notes: '', status: 'quoted' });
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-100 text-red-800';
      case 'urgent': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'quoted': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Job Bids</h1>
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
        <h1 className="text-2xl font-bold text-gray-900">Job Bids</h1>
        <Button onClick={fetchBids} variant="outline">
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {bids.map((bid) => (
          <Card key={bid.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{bid.customerName}</CardTitle>
                  <CardDescription>
                    {bid.customerEmail} {bid.customerPhone && `• ${bid.customerPhone}`}
                    <br />
                    {bid.serviceType} • {bid.location}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-4">
                  <Badge className={getUrgencyColor(bid.urgency)}>
                    {bid.urgency}
                  </Badge>
                  <Badge className={getStatusColor(bid.status)}>
                    {bid.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gray-700">Project Description: </span>
                <p className="text-sm text-gray-600 mt-1">{bid.description}</p>
              </div>

              {bid.budget && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Budget: </span>
                  <span className="text-sm text-gray-600">{bid.budget}</span>
                </div>
              )}

              {bid.quote && (
                <div className="bg-blue-50 p-3 rounded-md">
                  <span className="text-sm font-medium text-blue-800">Your Quote: </span>
                  <p className="text-sm text-blue-700 mt-1">{bid.quote}</p>
                  {bid.notes && (
                    <p className="text-xs text-blue-600 mt-2"><strong>Notes:</strong> {bid.notes}</p>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-xs text-gray-500">
                  Received: {new Date(bid.createdAt).toLocaleString()}
                </span>
                <div className="flex gap-2">
                  {bid.status === 'pending' && (
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedBid(bid);
                        setQuoteForm({
                          quote: bid.quote || '',
                          notes: bid.notes || '',
                          status: 'quoted'
                        });
                      }}
                    >
                      Send Quote
                    </Button>
                  )}
                  {bid.status === 'quoted' && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateBid(bid.id, { status: 'accepted' })}
                      >
                        Mark Accepted
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateBid(bid.id, { status: 'declined' })}
                      >
                        Mark Declined
                      </Button>
                    </>
                  )}
                  {bid.status === 'accepted' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateBid(bid.id, { status: 'completed' })}
                    >
                      Mark Completed
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedBid(bid);
                      setQuoteForm({
                        quote: bid.quote || '',
                        notes: bid.notes || '',
                        status: bid.status
                      });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {bids.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">No job bids found.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quote Modal */}
      {selectedBid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>
                {selectedBid.status === 'pending' ? 'Send Quote to' : 'Edit Quote for'} {selectedBid.customerName}
              </CardTitle>
              <CardDescription>
                {selectedBid.serviceType} in {selectedBid.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Project:</strong>
                <p className="mt-1">{selectedBid.description}</p>
                {selectedBid.budget && <p className="mt-1"><strong>Budget:</strong> {selectedBid.budget}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quote">Quote Amount *</Label>
                <Input
                  id="quote"
                  value={quoteForm.quote}
                  onChange={(e) => setQuoteForm({ ...quoteForm, quote: e.target.value })}
                  placeholder="e.g., $500-750"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  value={quoteForm.notes}
                  onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                  placeholder="Additional details, timeline, etc..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={quoteForm.status}
                  onValueChange={(value) => setQuoteForm({ ...quoteForm, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="quoted">Quoted</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="declined">Declined</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedBid(null);
                    setQuoteForm({ quote: '', notes: '', status: 'quoted' });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitQuote}
                  disabled={!quoteForm.quote.trim() || submitting}
                >
                  {submitting ? 'Saving...' : 'Save Quote'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
