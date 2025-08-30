import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const photos = await db.jobPhoto.findMany({
      where: {
        isPublic: true
      },
      select: {
        id: true,
        title: true,
        description: true,
        serviceType: true,
        location: true,
        beforeUrl: true,
        afterUrl: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error fetching gallery photos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
