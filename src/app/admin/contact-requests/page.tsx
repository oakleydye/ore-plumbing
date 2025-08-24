'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  urgency: string;
  status: string;
  response?: string;
  createdAt: string;
  updatedAt: string;
}

export default function ContactRequestsPage() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [response, setResponse] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/admin/contact-requests');
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
      }
    } catch (error) {
      console.error('Error fetching contact requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRespond = async (id: string) => {
    if (!response.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/contact-requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          response: response.trim(),
          status: 'responded'
        })
      });

      if (res.ok) {
        await fetchRequests();
        setSelectedRequest(null);
        setResponse('');
      }
    } catch (error) {
      console.error('Error responding to request:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-100 text-red-800';
      case 'urgent': return 'bg-orange-100 text-orange-800';
      case 'quote': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'responded': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Contact Requests</h1>
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
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
        <h1 className="text-2xl font-bold text-gray-900">Contact Requests</h1>
        <Button onClick={fetchRequests} variant="outline">
          Refresh
        </Button>
      </div>

      <div className="grid gap-6">
        {requests.map((request) => (
          <Card key={request.id} className="relative">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{request.name}</CardTitle>
                  <CardDescription>
                    {request.email} {request.phone && `• ${request.phone}`}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge className={getUrgencyColor(request.urgency)}>
                    {request.urgency}
                  </Badge>
                  <Badge className={getStatusColor(request.status)}>
                    {request.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {request.service && (
                <div>
                  <span className="text-sm font-medium text-gray-700">Service: </span>
                  <span className="text-sm text-gray-600">{request.service}</span>
                </div>
              )}
              
              <div>
                <span className="text-sm font-medium text-gray-700">Message: </span>
                <p className="text-sm text-gray-600 mt-1">{request.message}</p>
              </div>

              {request.response && (
                <div className="bg-green-50 p-3 rounded-md">
                  <span className="text-sm font-medium text-green-800">Your Response: </span>
                  <p className="text-sm text-green-700 mt-1">{request.response}</p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-xs text-gray-500">
                  Received: {new Date(request.createdAt).toLocaleString()}
                </span>
                {request.status === 'pending' && (
                  <Button
                    onClick={() => setSelectedRequest(request)}
                    size="sm"
                  >
                    Respond
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {requests.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">No contact requests found.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Response Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Respond to {selectedRequest.name}</CardTitle>
              <CardDescription>
                Send a response to their inquiry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Original Message:</strong>
                <p className="mt-1">{selectedRequest.message}</p>
              </div>
              
              <Textarea
                placeholder="Type your response here..."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                rows={4}
              />
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedRequest(null);
                    setResponse('');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleRespond(selectedRequest.id)}
                  disabled={!response.trim() || submitting}
                >
                  {submitting ? 'Sending...' : 'Send Response'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
