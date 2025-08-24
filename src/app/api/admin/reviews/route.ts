import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerEmail,
      rating,
      title,
      content,
      serviceType,
      jobDate
    } = body;

    const review = await db.review.create({
      data: {
        customerName,
        customerEmail: customerEmail || null,
        rating: parseInt(rating),
        title: title || null,
        content,
        serviceType: serviceType || null,
        jobDate: jobDate ? new Date(jobDate) : null,
        approved: false,
        featured: false
      }
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
