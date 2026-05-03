// app/api/forms/get-started/route.ts
// Get Started form handler with dual path (member + employer) and email delivery

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limit check (10 requests per hour per IP)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const rateLimitResult = await rateLimit(ip, 'get-started', 10, 3600);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { path, name, email, employerCode, orgName, workforceSize, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission.' },
        { status: 400 }
      );
    }

    // Validate path
    if (!path || (path !== 'member' && path !== 'employer')) {
      return NextResponse.json(
        { error: 'Invalid path.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) => str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] || c);

    if (path === 'member') {
      // MEMBER PATH: name, email, optional employerCode
      const errors: Record<string, string> = {};
      if (!name || typeof name !== 'string' || name.trim().length === 0) errors.name = 'Name is required.';
      if (!email || typeof email !== 'string' || !email.includes('@')) errors.email = 'Valid email is required.';

      if (Object.keys(errors).length > 0) {
        return NextResponse.json(
          { error: 'Validation failed.', details: errors },
          { status: 400 }
        );
      }

      const sanitizedName = sanitize(name.trim().substring(0, 100));
      const sanitizedEmail = sanitize(email.trim().substring(0, 254));
      const sanitizedEmployerCode = employerCode ? sanitize(employerCode.trim().substring(0, 50)) : undefined;

      // Redirect member to member app with params
      const params = new URLSearchParams({
        name: sanitizedName,
        email: sanitizedEmail,
        ...(sanitizedEmployerCode && { employer_code: sanitizedEmployerCode }),
      });

      return NextResponse.json(
        {
          success: true,
          redirect: `https://app.zimasahealth.com/signup?${params.toString()}`,
          path: 'member',
        },
        { status: 200 }
      );
    }

    if (path === 'employer') {
      // EMPLOYER PATH: orgName, email, workforceSize
      const errors: Record<string, string> = {};
      if (!orgName || typeof orgName !== 'string' || orgName.trim().length === 0) errors.orgName = 'Organization name is required.';
      if (!email || typeof email !== 'string' || !email.includes('@')) errors.email = 'Valid email is required.';
      if (!workforceSize || typeof workforceSize !== 'string' || workforceSize.trim().length === 0) errors.workforceSize = 'Workforce size is required.';

      if (Object.keys(errors).length > 0) {
        return NextResponse.json(
          { error: 'Validation failed.', details: errors },
          { status: 400 }
        );
      }

      const sanitizedOrgName = sanitize(orgName.trim().substring(0, 100));
      const sanitizedEmail = sanitize(email.trim().substring(0, 254));
      const sanitizedWorkforceSize = sanitize(workforceSize.trim().substring(0, 50));

      // Send email to growth@zimasahealth.com
      const emailResult = await resend.emails.send({
        from: 'noreply@zimasahealth.com',
        to: 'growth@zimasahealth.com',
        replyTo: sanitizedEmail,
        subject: `New Employer Sign-up: ${sanitizedOrgName}`,
        html: `
          <h2>New Employer Sign-up Request</h2>
          <p><strong>Organization:</strong> ${sanitizedOrgName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Workforce Size:</strong> ${sanitizedWorkforceSize}</p>
        `,
      });

      if (!emailResult.data?.id) {
        console.error('[get-started] Resend error:', emailResult.error);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
      }

      // Redirect employer to dashboard
      const dashboardParams = new URLSearchParams({
        email: sanitizedEmail,
        org: sanitizedOrgName,
      });

      return NextResponse.json(
        {
          success: true,
          redirect: `https://dashboard.zimasahealth.com/setup?${dashboardParams.toString()}`,
          path: 'employer',
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('[get-started] Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
