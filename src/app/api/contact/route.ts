import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateContactEmail } from '@/lib/email-template';
import type { ContactFormData, ContactFormResponse } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse<ContactFormResponse>> {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, service, message, urgency } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields', error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create urgency label for email subject
    const urgencyLabels = {
      emergency: '🚨 EMERGENCY',
      urgent: '⚡ URGENT',
      normal: '📅 Normal',
      quote: '💰 Quote Request'
    };

    const urgencyLabel = urgencyLabels[urgency as keyof typeof urgencyLabels] || 'Normal';
    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Generate email HTML
    const emailHtml = generateContactEmail({
      name,
      email,
      phone,
      service,
      message,
      urgency,
      submissionTime
    });

    // Send email to the plumber
    const { data, error } = await resend.emails.send({
      from: 'Ore Plumbing Website <noreply@oreplumbing.com>',
      to: ['ore.plumbing@gmail.com'],
      subject: `New Contact Form Submission - ${urgencyLabel}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email', error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: data?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', error: 'Internal server error' },
      { status: 500 }
    );
  }
}
