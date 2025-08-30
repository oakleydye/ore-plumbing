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
  const [emailStatus, setEmailStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showArchived, setShowArchived] = useState(false);

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
    setEmailStatus(null);
    
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
        const data = await res.json();
        await fetchRequests();
        
        // Show email status feedback
        if (data.emailSent === false) {
          setEmailStatus({
            success: false,
            message: data.emailError || 'Failed to send email to customer'
          });
        } else if (data.emailSent === true) {
          setEmailStatus({
            success: true,
            message: 'Response sent successfully to customer email'
          });
        } else {
          setEmailStatus({
            success: true,
            message: 'Response saved successfully'
          });
        }
        
        // Close modal after a brief delay to show the status
        setTimeout(() => {
          setSelectedRequest(null);
          setResponse('');
          setEmailStatus(null);
        }, 2000);
      } else {
        setEmailStatus({
          success: false,
          message: 'Failed to send response'
        });
      }
    } catch (error) {
      console.error('Error responding to request:', error);
      setEmailStatus({
        success: false,
        message: 'Error sending response'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleArchive = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/contact-requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'archived'
        })
      });

      if (res.ok) {
        await fetchRequests();
      }
    } catch (error) {
      console.error('Error archiving request:', error);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-100 text-red-800 border border-red-200';
      case 'urgent': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'quote': return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
      default: return 'bg-slate-100 text-slate-800 border border-slate-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'responded': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'closed': return 'bg-slate-100 text-slate-800 border border-slate-200';
      case 'archived': return 'bg-gray-100 text-gray-700 border border-gray-200';
      default: return 'bg-slate-100 text-slate-800 border border-slate-200';
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
        <div className="flex gap-2">
          <Button 
            onClick={() => setShowArchived(!showArchived)} 
            variant="outline"
            className={showArchived ? "bg-slate-100" : ""}
          >
            {showArchived ? 'Hide Archived' : 'Show Archived'}
          </Button>
          <Button onClick={fetchRequests} variant="outline">
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {requests
          .filter(request => showArchived || request.status !== 'archived')
          .map((request) => (
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
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <span className="text-sm font-medium text-emerald-800">Your Response: </span>
                  <p className="text-sm text-emerald-700 mt-1">{request.response}</p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-xs text-gray-500">
                  Received: {new Date(request.createdAt).toLocaleString()}
                </span>
                <div className="flex gap-2">
                  {request.status === 'pending' && (
                    <Button
                      onClick={() => setSelectedRequest(request)}
                      size="sm"
                      className="bg-slate-700 hover:bg-slate-800 text-white"
                    >
                      Respond
                    </Button>
                  )}
                  {request.status === 'responded' && (
                    <Button
                      onClick={() => handleArchive(request.id)}
                      size="sm"
                      variant="outline"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Archive
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {requests.filter(request => showArchived || request.status !== 'archived').length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500">
                {showArchived ? 'No archived contact requests found.' : 'No active contact requests found.'}
              </p>
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
                Send an email response to {selectedRequest.email}
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
              
              {emailStatus && (
                <div className={`p-3 rounded-lg text-sm ${
                  emailStatus.success 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {emailStatus.message}
                </div>
              )}
              
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedRequest(null);
                    setResponse('');
                    setEmailStatus(null);
                  }}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleRespond(selectedRequest.id)}
                  disabled={!response.trim() || submitting}
                  className="bg-slate-700 hover:bg-slate-800 text-white"
                >
                  {submitting ? 'Sending Email...' : 'Send Response'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
