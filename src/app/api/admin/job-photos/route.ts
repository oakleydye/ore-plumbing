import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { put } from '@vercel/blob';

export async function GET() {
  try {
    const photos = await db.jobPhoto.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error fetching job photos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const serviceType = formData.get('serviceType') as string;
    const location = formData.get('location') as string;
    const isPublic = formData.get('isPublic') === 'true';
    const beforeImage = formData.get('beforeImage') as File;
    const afterImage = formData.get('afterImage') as File;

    if (!title || !serviceType || !beforeImage || !afterImage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Upload files to Vercel Blob
    const beforeFileName = `job-photos/before-${Date.now()}-${beforeImage.name}`;
    const afterFileName = `job-photos/after-${Date.now()}-${afterImage.name}`;

    const beforeBlob = await put(beforeFileName, beforeImage, {
      access: 'public',
    });

    const afterBlob = await put(afterFileName, afterImage, {
      access: 'public',
    });

    // Save to database with blob URLs
    const jobPhoto = await db.jobPhoto.create({
      data: {
        title,
        description: description || null,
        serviceType,
        location: location || null,
        isPublic,
        beforeUrl: beforeBlob.url,
        afterUrl: afterBlob.url
      }
    });

    return NextResponse.json(jobPhoto);
  } catch (error) {
    console.error('Error uploading job photos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
