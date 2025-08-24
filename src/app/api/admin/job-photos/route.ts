import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

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

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'job-photos');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Save files
    const beforeFileName = `before-${uuidv4()}.${beforeImage.name.split('.').pop()}`;
    const afterFileName = `after-${uuidv4()}.${afterImage.name.split('.').pop()}`;
    
    const beforePath = join(uploadsDir, beforeFileName);
    const afterPath = join(uploadsDir, afterFileName);

    const beforeBytes = await beforeImage.arrayBuffer();
    const afterBytes = await afterImage.arrayBuffer();

    await writeFile(beforePath, Buffer.from(beforeBytes));
    await writeFile(afterPath, Buffer.from(afterBytes));

    // Save to database
    const jobPhoto = await db.jobPhoto.create({
      data: {
        title,
        description: description || null,
        serviceType,
        location: location || null,
        isPublic,
        beforeUrl: `/uploads/job-photos/${beforeFileName}`,
        afterUrl: `/uploads/job-photos/${afterFileName}`
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
