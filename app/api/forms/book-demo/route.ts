// app/api/forms/book-demo/route.ts
// Book Demo form handler with rate limiting, validation, and email delivery

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limit check (10 requests per hour per IP)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = await rateLimit(ip, 'book-demo', 10, 3600);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, phone, role, solutionInterest, timeline, honeypot } = body;

    // Honeypot: reject if honeypot field is filled
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
    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) errors.phone = 'Phone is required.';
    if (!role || typeof role !== 'string' || role.trim().length === 0) errors.role = 'Role is required.';
    if (!solutionInterest || typeof solutionInterest !== 'string' || solutionInterest.trim().length === 0) errors.solutionInterest = 'Solution interest is required.';
    if (!timeline || typeof timeline !== 'string' || timeline.trim().length === 0) errors.timeline = 'Timeline is required.';

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed.', details: errors },
        { status: 400 }
      );
    }

    // Sanitize inputs (escape HTML to prevent XSS)
    const sanitize = (str: string) => str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c);

    const sanitizedName = sanitize(name.trim().substring(0, 100));
    const sanitizedEmail = sanitize(email.trim().substring(0, 254));
    const sanitizedCompany = sanitize(company.trim().substring(0, 100));
    const sanitizedPhone = sanitize(phone.trim().substring(0, 20));
    const sanitizedRole = sanitize(role.trim().substring(0, 100));
    const sanitizedSolution = sanitize(solutionInterest.trim().substring(0, 50));
    const sanitizedTimeline = sanitize(timeline.trim().substring(0, 50));

    // Send email via Resend
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

    // Check email send result
    if (!emailResult.data?.id) {
      console.error('[book-demo] Resend error:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Track event in GA4 (return success without awaiting)
    // Form component will handle GA4 tracking on success response

    return NextResponse.json(
      { success: true, message: 'Demo request received. Our team will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[book-demo] Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
