// app/api/forms/get-started/route.ts
// Get Started form handler with dual path (member + employer) and email delivery

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  checkRateLimit,
  checkHoneypot,
  validateFields,
  buildErrorResponse,
  buildServerErrorResponse,
  createSanitizer,
} from '@/lib/form-handlers';
import { isValidEmail } from '@/lib/validators';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const rateLimitError = await checkRateLimit(request, 'get-started');
    if (rateLimitError) return rateLimitError;

    const body = await request.json();
    const { path, name, email, employerCode, orgName, workforceSize, honeypot } =
      body;

    // Honeypot
    const honeypotError = checkHoneypot(honeypot);
    if (honeypotError) return honeypotError;

    // Validate path
    if (!path || (path !== 'member' && path !== 'employer')) {
      return buildErrorResponse('Invalid path.', {}, 400);
    }

    // Sanitize inputs
    const sanitize = createSanitizer();

    if (path === 'member') {
      // MEMBER PATH: name, email, optional employerCode
      const fieldErrors = validateFields(
        { name, email },
        ['name', 'email']
      );
      if (fieldErrors)
        return buildErrorResponse('Validation failed.', fieldErrors);

      // Validate email format
      if (!isValidEmail(email)) {
        return buildErrorResponse('Validation failed.', {
          email: 'Valid email is required.',
        });
      }

      const sanitizedName = sanitize(name.trim().substring(0, 100));
      const sanitizedEmail = sanitize(email.trim().substring(0, 254));
      const sanitizedEmployerCode = employerCode
        ? sanitize(employerCode.trim().substring(0, 50))
        : undefined;

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
      const fieldErrors = validateFields(
        { orgName, email, workforceSize },
        ['orgName', 'email', 'workforceSize']
      );
      if (fieldErrors)
        return buildErrorResponse('Validation failed.', fieldErrors);

      // Validate email format
      if (!isValidEmail(email)) {
        return buildErrorResponse('Validation failed.', {
          email: 'Valid email is required.',
        });
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
        return buildServerErrorResponse(
          'Failed to send email. Please try again later.'
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
    return buildServerErrorResponse();
  }
}
