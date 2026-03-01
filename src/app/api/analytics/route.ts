import { NextRequest, NextResponse } from 'next/server';
import { trackEventFromRequest, EventType } from '@/lib/analytics';

const VALID_EVENTS: EventType[] = ['phone_click', 'email_click', 'contact_form_submitted'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventType, source, metadata } = body;

    if (!eventType || !VALID_EVENTS.includes(eventType)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    await trackEventFromRequest(request, eventType as EventType, source, metadata);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to track event' }, { status: 500 });
  }
}
