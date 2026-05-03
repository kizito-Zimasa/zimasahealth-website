// app/api/forms/book-demo/route.ts
// Book Demo form handler with rate limiting, validation, and email delivery

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
    const rateLimitError = await checkRateLimit(request, 'book-demo');
    if (rateLimitError) return rateLimitError;

    // Parse body
    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      role,
      solutionInterest,
      timeline,
      honeypot,
    } = body;

    // Honeypot
    const honeypotError = checkHoneypot(honeypot);
    if (honeypotError) return honeypotError;

    // Validate required fields
    const fieldErrors = validateFields(
      { name, email, company, phone, role, solutionInterest, timeline },
      ['name', 'email', 'company', 'phone', 'role', 'solutionInterest', 'timeline']
    );
    if (fieldErrors)
      return buildErrorResponse('Validation failed.', fieldErrors);

    // Validate email format
    if (!isValidEmail(email)) {
      return buildErrorResponse('Validation failed.', {
        email: 'Valid email is required.',
      });
    }

    // Sanitize
    const sanitize = createSanitizer();
    const sanitizedName = sanitize(name.trim().substring(0, 100));
    const sanitizedEmail = sanitize(email.trim().substring(0, 254));
    const sanitizedCompany = sanitize(company.trim().substring(0, 100));
    const sanitizedPhone = sanitize(phone.trim().substring(0, 20));
    const sanitizedRole = sanitize(role.trim().substring(0, 100));
    const sanitizedSolution = sanitize(solutionInterest.trim().substring(0, 50));
    const sanitizedTimeline = sanitize(timeline.trim().substring(0, 50));

    // Send email
    const emailResult = await resend.emails.send({
      from: 'noreply@zimasahealth.com',
      to: 'sales@zimasahealth.com',
      replyTo: sanitizedEmail,
      subject: `New Demo Request from ${sanitizedName}`,
      html: `
        <h2>New Book Demo Request</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Company:</strong> ${sanitizedCompany}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Role:</strong> ${sanitizedRole}</p>
        <p><strong>Solution Interest:</strong> ${sanitizedSolution}</p>
        <p><strong>Timeline:</strong> ${sanitizedTimeline}</p>
      `,
    });

    if (!emailResult.data?.id) {
      console.error('[book-demo] Resend error:', emailResult.error);
      return buildServerErrorResponse(
        'Failed to send email. Please try again later.'
      );
    }

    return buildSuccessResponse(
      'Demo request received. Our team will contact you soon.'
    );
  } catch (error) {
    console.error('[book-demo] Error:', error);
    return buildServerErrorResponse();
  }
}
