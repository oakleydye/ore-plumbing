'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PhotoModal from './photo-modal';

interface JobPhoto {
  id: string;
  title: string;
  description?: string;
  serviceType: string;
  location?: string;
  beforeUrl: string;
  afterUrl: string;
  createdAt: string;
}

export default function GalleryClient() {
  const [photos, setPhotos] = useState<JobPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<JobPhoto | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        setPhotos(data);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const serviceTypes = ['all', ...Array.from(new Set(photos.map(photo => photo.serviceType)))];
  
  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.serviceType === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the quality workmanship and transformations Ore Plumbing delivers 
            throughout Logan, North Logan, and surrounding areas.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {serviceTypes.map((type) => (
              <Button
                key={type}
                variant={filter === type ? "default" : "outline"}
                onClick={() => setFilter(type)}
                className="capitalize"
              >
                {type === 'all' ? 'All Projects' : type.replace(/([A-Z])/g, ' $1').trim()}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-6">No projects found for this category.</p>
            <Button asChild>
              <Link href="/contact">
                Schedule Your Project
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPhotos.map((photo) => (
              <Card 
                key={photo.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative h-48">
                      <Image
                        src={photo.beforeUrl}
                        alt={`${photo.title} - Before`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          Before
                        </Badge>
                      </div>
                    </div>
                    <div className="relative h-48">
                      <Image
                        src={photo.afterUrl}
                        alt={`${photo.title} - After`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          After
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Details Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button variant="secondary" size="sm" className="gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  
                  {photo.description && (
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {photo.description}
                    </p>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Badge variant="outline" className="capitalize">
                        {photo.serviceType.replace(/([A-Z])/g, ' $1').trim()}
                      </Badge>
                    </div>
                    
                    {photo.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{photo.location}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(photo.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Let Ore Plumbing bring the same level of quality and professionalism to your next project. 
            We serve Logan, North Logan, and surrounding areas with expert plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Free Estimate
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
