import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/lib/db';
import { generateResponseEmail } from '@/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { response, status } = body;

    // First, get the contact request details
    const contactRequest = await db.contactRequest.findUnique({
      where: { id }
    });

    if (!contactRequest) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      );
    }

    // Update the contact request in the database
    const updatedRequest = await db.contactRequest.update({
      where: { id },
      data: {
        response,
        status,
        updatedAt: new Date()
      }
    });

    // If there's a response, send an email to the customer
    if (response && response.trim()) {
      try {
        const responseEmailHtml = generateResponseEmail({
          customerName: contactRequest.name,
          originalMessage: contactRequest.message,
          response: response.trim(),
          service: contactRequest.service || undefined,
          requestId: contactRequest.id
        });

        const emailResult = await resend.emails.send({
          from: 'Ore Plumbing <noreply@oreplumbing.com>',
          to: [contactRequest.email],
          subject: `Response to Your Plumbing Inquiry - Ore Plumbing`,
          html: responseEmailHtml,
        });

        if (emailResult.error) {
          console.error('Failed to send response email:', emailResult.error);
          return NextResponse.json({
            ...updatedRequest,
            emailSent: false,
            emailError: 'Failed to send email notification'
          });
        }

        console.log('Response email sent successfully to:', contactRequest.email);
        return NextResponse.json({
          ...updatedRequest,
          emailSent: true
        });

      } catch (emailError) {
        console.error('Error sending response email:', emailError);
        return NextResponse.json({
          ...updatedRequest,
          emailSent: false,
          emailError: 'Failed to send email notification'
        });
      }
    }

    return NextResponse.json(updatedRequest);
  } catch (error) {
    console.error('Error updating contact request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.contactRequest.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting contact request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
