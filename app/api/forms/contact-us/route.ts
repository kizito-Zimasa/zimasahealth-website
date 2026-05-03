// app/api/forms/contact-us/route.ts
// Contact Us form handler with rate limiting, validation, and email delivery

import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import {
  checkRateLimit,
  checkHoneypot,
  validateFields,
  buildSuccessResponse,
  buildErrorResponse,
  buildServerErrorResponse,
  createSanitizer,
} from '@/lib/form-handlers';
import { isValidEmail } from '@/lib/validators';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const rateLimitError = await checkRateLimit(request, 'contact-us');
    if (rateLimitError) return rateLimitError;

    // Parse body
    const body = await request.json();
    const { name, email, company, message, inquiryType, honeypot } = body;

    // Honeypot
    const honeypotError = checkHoneypot(honeypot);
    if (honeypotError) return honeypotError;

    // Validate required fields
    const fieldErrors = validateFields(
      { name, email, company, message, inquiryType },
      ['name', 'email', 'company', 'message', 'inquiryType']
    );
    if (fieldErrors)
      return buildErrorResponse('Validation failed.', fieldErrors);

    // Validate email format
    if (!isValidEmail(email)) {
      return buildErrorResponse('Validation failed.', {
        email: 'Valid email is required.',
      });
    }

    // Sanitize inputs
    const sanitize = createSanitizer();
    const sanitizedName = sanitize(name.trim().substring(0, 100));
    const sanitizedEmail = sanitize(email.trim().substring(0, 254));
    const sanitizedCompany = sanitize(company.trim().substring(0, 100));
    const sanitizedMessage = sanitize(message.trim().substring(0, 2000));
    const sanitizedInquiryType = sanitize(inquiryType.trim().substring(0, 50));

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: 'noreply@zimasahealth.com',
      to: 'support@zimasahealth.com',
      replyTo: sanitizedEmail,
      subject: `New Inquiry from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompany}</p>
        <p><strong>Inquiry Type:</strong> ${sanitizedInquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (!emailResult.data?.id) {
      console.error('[contact-us] Resend error:', emailResult.error);
      return buildServerErrorResponse(
        'Failed to send email. Please try again later.'
      );
    }

    return buildSuccessResponse(
      "Your message has been received. We'll get back to you soon."
    );
  } catch (error) {
    console.error('[contact-us] Error:', error);
    return buildServerErrorResponse();
  }
}
