// app/api/forms/contact-us/route.ts
// Contact Us form handler with rate limiting, validation, and email delivery

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limit check (10 requests per hour per IP)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = await rateLimit(ip, 'contact-us', 10, 3600);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, message, inquiryType, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission.' },
        { status: 400 }
      );
    }

    // Validate required fields
    const errors: Record<string, string> = {};
    if (!name || typeof name !== 'string' || name.trim().length === 0) errors.name = 'Name is required.';
    if (!email || typeof email !== 'string' || !email.includes('@')) errors.email = 'Valid email is required.';
    if (!company || typeof company !== 'string' || company.trim().length === 0) errors.company = 'Company is required.';
    if (!message || typeof message !== 'string' || message.trim().length === 0) errors.message = 'Message is required.';
    if (!inquiryType || typeof inquiryType !== 'string' || inquiryType.trim().length === 0) errors.inquiryType = 'Inquiry type is required.';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed.', details: errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c);

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
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[contact-us] Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
