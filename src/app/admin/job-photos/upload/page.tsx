'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

export default function UploadJobPhotosPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    serviceType: '',
    location: '',
    isPublic: false
  });
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const serviceTypes = [
    'Drain Cleaning',
    'Pipe Repair',
    'Water Heater',
    'Bathroom Remodeling',
    'Emergency Repair',
    'Water Softener',
    'Commercial Plumbing',
    'Residential New Install',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!beforeFile || !afterFile) {
      alert('Please select both before and after photos');
      return;
    }

    setUploading(true);
    
    try {
      const uploadData = new FormData();
      uploadData.append('title', formData.title);
      uploadData.append('description', formData.description);
      uploadData.append('serviceType', formData.serviceType);
      uploadData.append('location', formData.location);
      uploadData.append('isPublic', formData.isPublic.toString());
      uploadData.append('beforeImage', beforeFile);
      uploadData.append('afterImage', afterFile);

      const response = await fetch('/api/admin/job-photos', {
        method: 'POST',
        body: uploadData
      });

      if (response.ok) {
        router.push('/admin/job-photos');
      } else {
        const error = await response.json();
        alert('Upload failed: ' + (error.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => router.back()}
        >
          ← Back
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Upload Job Photos</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Before & After Photos</CardTitle>
          <CardDescription>
            Upload photos of completed plumbing work to showcase your services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Kitchen Sink Drain Repair"
              />
            </div>

            {/* Service Type */}
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select
                required
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Logan, UT"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the work performed..."
                rows={3}
              />
            </div>

            {/* Before Photo */}
            <div className="space-y-2">
              <Label htmlFor="beforePhoto">Before Photo *</Label>
              <Input
                id="beforePhoto"
                type="file"
                accept="image/*"
                required
                onChange={(e) => setBeforeFile(e.target.files?.[0] || null)}
              />
              {beforeFile && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(beforeFile)}
                    alt="Before preview"
                    className="w-full max-w-xs h-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            {/* After Photo */}
            <div className="space-y-2">
              <Label htmlFor="afterPhoto">After Photo *</Label>
              <Input
                id="afterPhoto"
                type="file"
                accept="image/*"
                required
                onChange={(e) => setAfterFile(e.target.files?.[0] || null)}
              />
              {afterFile && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(afterFile)}
                    alt="After preview"
                    className="w-full max-w-xs h-32 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            {/* Public Toggle */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isPublic"
                checked={formData.isPublic}
                onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                className="rounded border-gray-300"
              />
              <Label htmlFor="isPublic">
                Make public (show on website)
              </Label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={uploading || !beforeFile || !afterFile}
              >
                {uploading ? 'Uploading...' : 'Upload Photos'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
