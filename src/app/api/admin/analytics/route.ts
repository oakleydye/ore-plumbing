import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') ?? '30', 10);

    const since = new Date();
    since.setDate(since.getDate() - days);

    const [allEvents, recentEvents] = await Promise.all([
      db.analyticsEvent.findMany({
        where: { createdAt: { gte: since } },
        orderBy: { createdAt: 'asc' },
        select: { id: true, eventType: true, source: true, createdAt: true, metadata: true },
      }),
      db.analyticsEvent.findMany({
        orderBy: { createdAt: 'desc' },
        take: 20,
        select: { id: true, eventType: true, source: true, createdAt: true, metadata: true },
      }),
    ]);

    // Summary counts
    const summary = {
      totalPhoneCalls: allEvents.filter(e => e.eventType === 'phone_click').length,
      totalEmailClicks: allEvents.filter(e => e.eventType === 'email_click').length,
      totalSmsClicks: allEvents.filter(e => e.eventType === 'sms_click').length,
      totalFormSubmissions: allEvents.filter(e => e.eventType === 'contact_form_submitted').length,
      totalEvents: allEvents.length,
    };

    // Group by day
    const dayMap = new Map<string, Record<string, number>>();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      dayMap.set(key, { phone_click: 0, email_click: 0, sms_click: 0, contact_form_submitted: 0 });
    }
    for (const e of allEvents) {
      const key = e.createdAt.toISOString().slice(0, 10);
      const day = dayMap.get(key);
      if (day) day[e.eventType] = (day[e.eventType] ?? 0) + 1;
    }
    const eventsByDay = Array.from(dayMap.entries()).map(([date, counts]) => ({ date, ...counts }));

    // Group by source
    type EventCounts = { phone_click: number; email_click: number; sms_click: number; contact_form_submitted: number };
    const sourceMap = new Map<string, EventCounts>();
    for (const e of allEvents) {
      const src = e.source ?? 'unknown';
      if (!sourceMap.has(src)) {
        sourceMap.set(src, { phone_click: 0, email_click: 0, sms_click: 0, contact_form_submitted: 0 });
      }
      const entry = sourceMap.get(src)!;
      const key = e.eventType as keyof EventCounts;
      if (key in entry) entry[key]++;
    }
    const eventsBySource = Array.from(sourceMap.entries())
      .map(([source, counts]) => ({ source, ...counts }))
      .sort((a, b) => {
        const totalA = a.phone_click + a.email_click + a.sms_click + a.contact_form_submitted;
        const totalB = b.phone_click + b.email_click + b.sms_click + b.contact_form_submitted;
        return totalB - totalA;
      });

    return NextResponse.json({ summary, eventsByDay, eventsBySource, recentEvents });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
