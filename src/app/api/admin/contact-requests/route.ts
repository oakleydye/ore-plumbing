import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const requests = await db.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(requests);
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, urgency } = body;

    const contactRequest = await db.contactRequest.create({
      data: {
        name,
        email,
        phone,
        service,
        message,
        urgency: urgency || 'normal'
      }
    });

    return NextResponse.json(contactRequest);
  } catch (error) {
    console.error('Error creating contact request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
