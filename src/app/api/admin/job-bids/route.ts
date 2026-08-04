import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

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
  const auth = await requireAdmin(request);
  if (auth instanceof NextResponse) return auth;

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
      budget,
      status
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
        status: status || 'pending'
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
