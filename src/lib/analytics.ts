import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';

export type EventType =
  | 'phone_click'
  | 'email_click'
  | 'sms_click'
  | 'contact_form_submitted';

interface TrackEventOptions {
  eventType: EventType;
  source?: string;
  metadata?: Record<string, unknown>;
  userAgent?: string;
  referrer?: string;
}

export async function trackEvent(options: TrackEventOptions) {
  try {
    await db.analyticsEvent.create({
      data: {
        eventType: options.eventType,
        source: options.source ?? null,
        metadata: (options.metadata ?? Prisma.JsonNull) as Prisma.InputJsonValue,
        userAgent: options.userAgent ?? null,
        referrer: options.referrer ?? null,
      },
    });
  } catch (error) {
    // Never let analytics failures affect user-facing behavior
    console.error('Analytics tracking failed:', error);
  }
}

/** Convenience for server-side route handlers — reads headers automatically */
export async function trackEventFromRequest(
  request: Request,
  eventType: EventType,
  source?: string,
  metadata?: Record<string, unknown>
) {
  const userAgent = request.headers.get('user-agent') ?? undefined;
  const referrer = request.headers.get('referer') ?? undefined;
  await trackEvent({ eventType, source, metadata, userAgent, referrer });
}
