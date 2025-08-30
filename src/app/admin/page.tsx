'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardStats {
  pendingContacts: number;
  pendingBids: number;
  pendingReviews: number;
  totalPhotos: number;
  publishedPosts: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    pendingContacts: 0,
    pendingBids: 0,
    pendingReviews: 0,
    totalPhotos: 0,
    publishedPosts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/dashboard-stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Contact Requests</CardTitle>
            <CardDescription>New messages from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-700">{stats.pendingContacts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Job Bids</CardTitle>
            <CardDescription>Quotes waiting for response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{stats.pendingBids}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
            <CardDescription>Reviews awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{stats.pendingReviews}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Photos</CardTitle>
            <CardDescription>Before/after photos uploaded</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-violet-600">{stats.totalPhotos}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Published Blog Posts</CardTitle>
            <CardDescription>Active blog content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-600">{stats.publishedPosts}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="/admin/job-photos/upload"
              className="block w-full bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-center transition-colors font-medium shadow-sm"
            >
              Upload Job Photos
            </a>
            <a
              href="/admin/blog/new"
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-center transition-colors font-medium shadow-sm"
            >
              Create Blog Post
            </a>
            <a
              href="/admin/contact-requests"
              className="block w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-center transition-colors font-medium shadow-sm"
            >
              Review Messages
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest admin actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              Activity feed coming soon...
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
