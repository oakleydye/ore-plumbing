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
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    quote: '',
    notes: '',
    status: 'quoted'
  });
  const [createForm, setCreateForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    description: '',
    location: '',
    urgency: 'normal',
    budget: '',
    status: 'pending'
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

  const handleCreateBid = async () => {
    if (!createForm.customerName.trim() || !createForm.customerEmail.trim() || !createForm.description.trim()) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/job-bids', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: createForm.customerName.trim(),
          customerEmail: createForm.customerEmail.trim(),
          customerPhone: createForm.customerPhone.trim() || undefined,
          serviceType: createForm.serviceType || 'Other',
          description: createForm.description.trim(),
          location: createForm.location.trim() || 'Logan, Utah',
          urgency: createForm.urgency,
          budget: createForm.budget.trim() || undefined,
          status: createForm.status
        })
      });

      if (res.ok) {
        await fetchBids();
        setShowCreateForm(false);
        setCreateForm({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          serviceType: '',
          description: '',
          location: '',
          urgency: 'normal',
          budget: '',
          status: 'pending'
        });
      } else {
        console.error('Error creating job bid');
      }
    } catch (error) {
      console.error('Error creating job bid:', error);
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
        <div className="flex gap-2">
          <Button onClick={() => setShowCreateForm(true)}>
            Create New Bid
          </Button>
          <Button onClick={fetchBids} variant="outline">
            Refresh
          </Button>
        </div>
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

      {/* Create New Bid Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Create New Job Bid</CardTitle>
              <CardDescription>
                Add a new job bid to track projects from phone calls, referrals, or other sources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input
                    id="customerName"
                    value={createForm.customerName}
                    onChange={(e) => setCreateForm({ ...createForm, customerName: e.target.value })}
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customerEmail">Email *</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={createForm.customerEmail}
                    onChange={(e) => setCreateForm({ ...createForm, customerEmail: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerPhone">Phone</Label>
                  <Input
                    id="customerPhone"
                    value={createForm.customerPhone}
                    onChange={(e) => setCreateForm({ ...createForm, customerPhone: e.target.value })}
                    placeholder="(435) 555-0123"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={createForm.location}
                    onChange={(e) => setCreateForm({ ...createForm, location: e.target.value })}
                    placeholder="Logan, Utah"
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={createForm.serviceType}
                    onValueChange={(value) => setCreateForm({ ...createForm, serviceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency-repairs">Emergency Repairs</SelectItem>
                      <SelectItem value="residential-new-install">New Residential Installation</SelectItem>
                      <SelectItem value="commercial">Commercial Plumbing</SelectItem>
                      <SelectItem value="bathroom-remodeling">Bathroom Remodeling</SelectItem>
                      <SelectItem value="water-softeners">Water Softener Installation</SelectItem>
                      <SelectItem value="water-heater">Water Heater Services</SelectItem>
                      <SelectItem value="pipe-repair">Pipe Repair & Installation</SelectItem>
                      <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select
                    value={createForm.urgency}
                    onValueChange={(value) => setCreateForm({ ...createForm, urgency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={createForm.description}
                  onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                  placeholder="Describe the plumbing work needed..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (optional)</Label>
                  <Input
                    id="budget"
                    value={createForm.budget}
                    onChange={(e) => setCreateForm({ ...createForm, budget: e.target.value })}
                    placeholder="$500-1000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Initial Status</Label>
                  <Select
                    value={createForm.status}
                    onValueChange={(value) => setCreateForm({ ...createForm, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCreateForm(false);
                    setCreateForm({
                      customerName: '',
                      customerEmail: '',
                      customerPhone: '',
                      serviceType: '',
                      description: '',
                      location: '',
                      urgency: 'normal',
                      budget: '',
                      status: 'pending'
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateBid}
                  disabled={!createForm.customerName.trim() || !createForm.customerEmail.trim() || !createForm.description.trim() || submitting}
                >
                  {submitting ? 'Creating...' : 'Create Bid'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
