interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  urgency: string;
  submissionTime: string;
}

export function generateContactEmail({
  name,
  email,
  phone,
  service,
  message,
  urgency,
  submissionTime
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
