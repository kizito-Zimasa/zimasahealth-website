// lib/form-handlers.ts
// Shared form handling utilities: sanitization, validation, rate limiting, responses

import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from './rate-limit';

/**
 * Creates a sanitizer function that escapes HTML entities to prevent XSS
 */
export function createSanitizer(): (str: string) => string {
  return (str: string) =>
    str.replace(/[&<>"']/g, (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[c] || c)
    );
}

/**
 * Check rate limit for a given action and IP
 * Returns a 429 response if limit exceeded, null if OK
 */
export async function checkRateLimit(
  request: NextRequest,
  action: string,
  limit: number = 10,
  window: number = 3600
): Promise<NextResponse<{ error: string }> | null> {
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    'unknown';

  const rateLimitResult = await rateLimit(ip, action, limit, window);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  return null; // No error
}

/**
 * Check honeypot field
 * Returns a 400 response if honeypot is filled, null if OK
 */
export function checkHoneypot(honeypot: unknown): NextResponse<{ error: string }> | null {
  if (honeypot) {
    return NextResponse.json(
      { error: 'Invalid submission.' },
      { status: 400 }
    );
  }
  return null; // No error
}

/**
 * Validate that all required fields are non-empty strings
 * Returns an error object if validation fails, null if OK
 */
export function validateFields(
  fields: Record<string, unknown>,
  requiredFields: string[]
): Record<string, string> | null {
  const errors: Record<string, string> = {};

  for (const field of requiredFields) {
    const value = fields[field];
    if (
      !value ||
      typeof value !== 'string' ||
      value.trim().length === 0
    ) {
      errors[field] = `${field} is required.`;
    }
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Build a successful JSON response
 */
export function buildSuccessResponse(
  message: string,
  extra?: Record<string, unknown>
) {
  return NextResponse.json(
    { success: true, message, ...extra },
    { status: 200 }
  );
}

/**
 * Build an error JSON response
 */
export function buildErrorResponse(
  error: string,
  details?: Record<string, unknown>,
  status: number = 400
) {
  return NextResponse.json(
    { error, ...(details && { details }) },
    { status }
  );
}

/**
 * Build a server error JSON response (500)
 */
export function buildServerErrorResponse(
  error: string = 'An unexpected error occurred. Please try again later.'
) {
  return NextResponse.json({ error }, { status: 500 });
}
