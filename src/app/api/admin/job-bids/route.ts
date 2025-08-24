import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const bids = await db.jobBid.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(bids);
  } catch (error) {
    console.error('Error fetching job bids:', error);
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
      customerPhone,
      serviceType,
      description,
      location,
      urgency,
      budget
    } = body;

    const jobBid = await db.jobBid.create({
      data: {
        customerName,
        customerEmail,
        customerPhone: customerPhone || null,
        serviceType,
        description,
        location,
        urgency: urgency || 'normal',
        budget: budget || null,
        status: 'pending'
      }
    });

    return NextResponse.json(jobBid);
  } catch (error) {
    console.error('Error creating job bid:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
