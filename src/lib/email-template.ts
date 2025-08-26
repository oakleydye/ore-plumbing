interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  urgency: string;
  submissionTime: string;
  requestId?: string;
}

export function generateContactEmail({
  name,
  email,
  phone,
  service,
  message,
  urgency,
  submissionTime,
  requestId
}: ContactEmailProps): string {
  const urgencyLabels = {
    emergency: '🚨 EMERGENCY',
    urgent: '⚡ URGENT', 
    normal: '📅 Normal',
    quote: '💰 Quote Request'
  };

  const urgencyLabel = urgencyLabels[urgency as keyof typeof urgencyLabels] || 'Normal';
  const isHighPriority = urgency === 'emergency' || urgency === 'urgent';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>` : ''}
      </div>

      <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Service Details</h3>
        <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
        <p><strong>Urgency:</strong> <span style="font-weight: bold; color: ${isHighPriority ? '#dc2626' : '#059669'};">${urgencyLabel}</span></p>
      </div>

      <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px; color: #6b7280;">
        <p><strong>Submission Time:</strong> ${submissionTime}</p>
        <p><strong>Source:</strong> Ore Plumbing Website Contact Form</p>
        ${requestId ? `<p><strong>Request ID:</strong> ${requestId}</p>` : `<p style="color: #dc2626;"><strong>Note:</strong> Database save failed - this request was not saved to the admin panel</p>`}
      </div>

      ${isHighPriority ? `
        <div style="background-color: #fef2f2; border: 2px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #dc2626; font-weight: bold; margin: 0; text-align: center;">
            ⚠️ This is marked as ${urgencyLabel.toLowerCase()} - please respond promptly!
          </p>
        </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
        <p>This email was sent from the Ore Plumbing website contact form.</p>
        <p>Ore Plumbing | Logan, Utah | (435) 890-3316</p>
      </div>
    </div>
  `;
}

interface ResponseEmailProps {
  customerName: string;
  originalMessage: string;
  response: string;
  service?: string;
  requestId: string;
}

export function generateResponseEmail({
  customerName,
  originalMessage,
  response,
  service,
  requestId
}: ResponseEmailProps): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">O.R.E. Plumbing</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Professional Plumbing Services in Logan, Utah</p>
      </div>
      
      <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #374151; margin-top: 0; margin-bottom: 20px;">
          Hello ${customerName},
        </h2>
        
        <p style="color: #374151; line-height: 1.6; margin-bottom: 25px;">
          Thank you for contacting O.R.E. Plumbing! We've received your message and wanted to respond to your inquiry.
        </p>

        <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #2563eb;">
          <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px;">Our Response:</h3>
          <div style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${response}</div>
        </div>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 25px 0;">
          <h4 style="color: #6b7280; margin-top: 0; margin-bottom: 10px; font-size: 14px;">Your Original Message:</h4>
          ${service ? `<p style="color: #6b7280; margin: 5px 0; font-size: 14px;"><strong>Service:</strong> ${service}</p>` : ''}
          <p style="color: #6b7280; margin: 5px 0; font-size: 14px; line-height: 1.5;">${originalMessage}</p>
        </div>

        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Need to Get in Touch?</h3>
          <p style="color: #1e40af; margin: 5px 0;">
            <strong>📞 Phone:</strong> <a href="tel:+14358903316" style="color: #1e40af; text-decoration: none;">(435) 890-3316</a>
          </p>
          <p style="color: #1e40af; margin: 5px 0;">
            <strong>📧 Email:</strong> <a href="mailto:ore.plumbing@gmail.com" style="color: #1e40af; text-decoration: none;">ore.plumbing@gmail.com</a>
          </p>
          <p style="color: #1e40af; margin: 5px 0;">
            <strong>🌐 Website:</strong> <a href="https://oreplumbing.com" style="color: #1e40af; text-decoration: none;">oreplumbing.com</a>
          </p>
        </div>

        <p style="color: #374151; line-height: 1.6; margin: 25px 0;">
          We appreciate your business and look forward to serving you!
        </p>

        <p style="color: #374151; line-height: 1.6; margin-bottom: 0;">
          Best regards,<br>
          <strong>O.R.E. Plumbing</strong><br>
        </p>
      </div>

      <div style="margin-top: 20px; padding: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
        <p>This email was sent in response to your contact form submission.</p>
        <p style="margin: 5px 0;">Request ID: ${requestId}</p>
        <p>Ore Plumbing | Logan, Utah | (435) 890-3316</p>
      </div>
    </div>
  `;
}
