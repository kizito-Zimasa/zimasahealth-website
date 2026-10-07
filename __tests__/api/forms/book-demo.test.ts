// __tests__/api/forms/book-demo.test.ts
// Unit tests for book demo API endpoint

import { POST } from '@/app/api/forms/book-demo/route';
import { NextRequest } from 'next/server';

jest.mock('@upstash/redis');
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'test-id' } }),
    },
  })),
}));

jest.mock('@/lib/rate-limit', () => ({
  rateLimit: jest.fn().mockResolvedValue({ success: true, remaining: 9 }),
}));

describe('/api/forms/book-demo', () => {
  test('returns 400 if honeypot is filled', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        company: 'Test Co',
        organisationType: 'Insurer or TPA',
        phone: '555-0000',
        role: 'HR',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: 'filled', // Spam indicator
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  test('returns 400 if required fields missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        // Missing other fields
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  test('returns 400 for invalid email format', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'invalid-email', // Missing @ and domain
        company: 'Test Co',
        organisationType: 'Insurer or TPA',
        phone: '555-0000',
        role: 'HR',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.details?.email).toBeDefined();
  });

  test('returns 400 if organisation type is not an allowed value', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Co',
        organisationType: 'Reseller',
        phone: '555-0000',
        role: 'Scheme Manager',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.details?.organisationType).toBeDefined();
  });

  test('returns 400 if organisation type is missing', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Co',
        phone: '555-0000',
        role: 'Scheme Manager',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.details?.organisationType).toBeDefined();
  });

  test('returns 429 when rate limit exceeded', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { rateLimit } = require('@/lib/rate-limit');
    rateLimit.mockResolvedValueOnce({ success: false, remaining: 0 });

    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Co',
        organisationType: 'Insurer or TPA',
        phone: '555-0000',
        role: 'HR Director',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(429);
  });

  test('returns 200 on successful submission', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/book-demo', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Co',
        organisationType: 'Insurer or TPA',
        phone: '555-0000',
        role: 'HR Director',
        solutionInterest: 'ZHEP',
        timeline: '30 days',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
  });
});
