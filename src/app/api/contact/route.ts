import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateContactEmail } from '@/lib/email-template';
import { db } from '@/lib/db';
import { trackEventFromRequest } from '@/lib/analytics';
import type { ContactFormData, ContactFormResponse } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);


const SPAM_KEYWORDS = [
  "casino", "viagra", "cialis", "crypto", "bitcoin", "nft", "seo service",
  "buy followers", "make money fast", "work from home", "click here", "limited offer",
];

function isSpam(name: string, email: string, message: string): boolean {
  const combined = `${name} ${email} ${message}`.toLowerCase();

  // Too many URLs
  const urlCount = (combined.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 2) return true;

  // Spam keyword match
  if (SPAM_KEYWORDS.some((kw) => combined.includes(kw))) return true;

  // Excessive repetition (same char repeated 10+ times)
  if (/(.)\1{9,}/.test(message)) return true;

  return false;
}


export async function POST(request: NextRequest): Promise<NextResponse<ContactFormResponse>> {
  try {
    const { body, _hp, _t } = await request.json();

    if (_hp) {
      return NextResponse.json({ success: true, message: 'Message submitted successfully' }, { status: 200 });
    }

    const elapsed = typeof _t === "number" ? Date.now() - _t : Infinity;
    if (elapsed < 3000) {
      return NextResponse.json({ success: true, message: 'Message submitted successfully' }, { status: 200 });
    }
    const { name, email, phone, service, message, urgency } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields', error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "One or more fields exceed the maximum length." },
        { status: 400 }
      );
    }

    // Content-based spam detection
    if (isSpam(name, email, message)) {
      return NextResponse.json({ success: true, message: 'Message submitted successfully' }, { status: 200 });
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

    // Try to save to database first, but don't fail if this doesn't work
    let contactRequest;
    let dbSaveSuccessful = false;
    try {
      contactRequest = await db.contactRequest.create({
        data: {
          name,
          email,
          phone: phone || null,
          service: service || null,
          message,
          urgency,
          status: 'pending'
        }
      });
      dbSaveSuccessful = true;

      // Track contact form submission
      await trackEventFromRequest(request, 'contact_form_submitted', 'contact_form', {
        service: service || null,
        urgency,
        contactRequestId: contactRequest.id,
      });
    } catch (dbError) {
      console.error('Database save failed, but continuing with email:', dbError);
      // Continue to email sending - we don't want to lose business
    }

    // Generate email HTML
    const emailHtml = generateContactEmail({
      name,
      email,
      phone,
      service,
      message,
      urgency,
      submissionTime,
      requestId: contactRequest?.id
    });

    // Add contact to Resend audience (for email list)
    let audienceAddSuccessful = false;
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email,
          firstName: name.split(' ')[0], // Extract first name
          lastName: name.split(' ').slice(1).join(' ') || '', // Extract last name if available
          audienceId: process.env.RESEND_AUDIENCE_ID,
        });
        audienceAddSuccessful = true;
        console.log(`Successfully added ${email} to Resend audience`);
      } catch (audienceError) {
        console.error('Failed to add contact to Resend audience:', audienceError);
        // Don't fail the entire request if audience addition fails
      }
    }

    // Send email to the plumber
    let emailResult;
    try {
      emailResult = await resend.emails.send({
        from: 'Ore Plumbing Website <noreply@oreplumbing.com>',
        to: ['ore.plumbing@gmail.com'],
        subject: `New Contact Form Submission - ${urgencyLabel}`,
        html: emailHtml,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Email failed but we still have the request in the database (if it saved)
      if (dbSaveSuccessful && contactRequest) {
        return NextResponse.json({
          success: true,
          message: 'Contact request saved successfully. We will respond to your request soon.',
          id: contactRequest.id
        });
      } else {
        // Both database and email failed - this is a critical error
        return NextResponse.json(
          { success: false, message: 'Failed to process your request. Please call us directly at (435) 890-3316.', error: 'Service unavailable' },
          { status: 500 }
        );
      }
    }

    const { data, error } = emailResult;

    if (error) {
      console.error('Resend error:', error);
      // Even if email fails, we've saved to database (if successful), so this could be a partial success
      if (dbSaveSuccessful && contactRequest) {
        return NextResponse.json({
          success: true,
          message: 'Contact request saved but email notification failed. We will still respond to your request.',
          id: contactRequest.id
        });
      } else {
        // Both database and email failed - this is a critical error
        return NextResponse.json(
          { success: false, message: 'Failed to process your request. Please call us directly at (435) 890-3316.', error: 'Service unavailable' },
          { status: 500 }
        );
      }
    }

    // Success case - determine response based on what worked
    const responseMessage = dbSaveSuccessful 
      ? 'Contact form submitted successfully'
      : 'Your message was sent successfully. We will respond soon.';

    return NextResponse.json({
      success: true,
      message: responseMessage,
      id: contactRequest?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', error: 'Internal server error' },
      { status: 500 }
    );
  }
}
