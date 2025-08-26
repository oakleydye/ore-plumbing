'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface JobPhoto {
  id: string;
  title: string;
  description?: string;
  beforeUrl: string;
  afterUrl: string;
  serviceType: string;
  location?: string;
  isPublic: boolean;
  createdAt: string;
}

export default function JobPhotosPage() {
  const [photos, setPhotos] = useState<JobPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await fetch('/api/admin/job-photos');
      if (res.ok) {
        const data = await res.json();
        setPhotos(data);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePublic = async (id: string, isPublic: boolean) => {
    try {
      const res = await fetch(`/api/admin/job-photos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublic: !isPublic })
      });

      if (res.ok) {
        await fetchPhotos();
      }
    } catch (error) {
      console.error('Error updating photo:', error);
    }
  };

  const deletePhoto = async (id: string) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;

    try {
      const res = await fetch(`/api/admin/job-photos/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        await fetchPhotos();
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Job Photos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
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
        <h1 className="text-2xl font-bold text-gray-900">Job Photos</h1>
        <div className="flex gap-2">
          <Button onClick={fetchPhotos} variant="outline">
            Refresh
          </Button>
          <Button asChild>
            <a href="/admin/job-photos/upload">Upload Photos</a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <div className="relative h-48">
              <div className="flex h-full">
                <div className="flex-1 relative">
                  <Image
                    src={photo.beforeUrl}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    Before
                  </div>
                </div>
                <div className="flex-1 relative">
                  <Image
                    src={photo.afterUrl}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    After
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{photo.title}</h3>
                <Badge variant={photo.isPublic ? "default" : "secondary"}>
                  {photo.isPublic ? "Public" : "Private"}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{photo.serviceType}</p>
              
              {photo.location && (
                <p className="text-sm text-gray-500 mb-2">📍 {photo.location}</p>
              )}
              
              {photo.description && (
                <p className="text-sm text-gray-600 mb-3">{photo.description}</p>
              )}
              
              <div className="flex gap-2 justify-between items-center">
                <span className="text-xs text-gray-500">
                  {new Date(photo.createdAt).toLocaleDateString()}
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => togglePublic(photo.id, photo.isPublic)}
                  >
                    {photo.isPublic ? "Make Private" : "Make Public"}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deletePhoto(photo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {photos.length === 0 && (
          <div className="col-span-full">
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No job photos uploaded yet.</p>
                <Button asChild>
                  <a href="/admin/job-photos/upload">Upload Your First Photos</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
