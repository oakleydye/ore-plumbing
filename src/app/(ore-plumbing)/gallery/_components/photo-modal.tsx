'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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

interface PhotoModalProps {
  photo: JobPhoto;
  onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  const [activeView, setActiveView] = useState<'before' | 'after'>('before');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-900">
            {photo.title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Image Section */}
        <div className="p-6">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <Button
                variant={activeView === 'before' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveView('before')}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Before
              </Button>
              <Button
                variant={activeView === 'after' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveView('after')}
                className="gap-2"
              >
                After
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Image Display */}
          <div className="relative w-full h-96 md:h-[500px] mb-6 rounded-lg overflow-hidden">
            <Image
              src={activeView === 'before' ? photo.beforeUrl : photo.afterUrl}
              alt={`${photo.title} - ${activeView}`}
              fill
              className="object-contain"
              priority
            />
            
            {/* Image Label */}
            <div className="absolute top-4 left-4">
              <Badge 
                variant="secondary" 
                className={
                  activeView === 'before' 
                    ? "bg-red-100 text-red-800" 
                    : "bg-green-100 text-green-800"
                }
              >
                {activeView === 'before' ? 'Before' : 'After'}
              </Badge>
            </div>
          </div>

          {/* Split View Option */}
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setActiveView(activeView === 'before' ? 'after' : 'before')}
              className="w-full gap-2"
            >
              Switch to {activeView === 'before' ? 'After' : 'Before'} Photo
              {activeView === 'before' ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Project Details
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {photo.serviceType.replace(/([A-Z])/g, ' $1').trim()}
                  </Badge>
                </div>
                
                {photo.location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{photo.location}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Completed {formatDate(photo.createdAt)}</span>
                </div>
              </div>
            </div>

            {photo.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Need Similar Work Done?
            </h4>
            <p className="text-gray-700 mb-4">
              Contact Ore Plumbing for professional plumbing services in Logan, North Logan, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                Get Free Estimate
              </Button>
              <Button variant="outline">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
