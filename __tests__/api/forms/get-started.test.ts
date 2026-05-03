// __tests__/api/forms/get-started.test.ts
// Unit tests for get started API endpoint

import { POST } from '@/app/api/forms/get-started/route';
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

describe('/api/forms/get-started', () => {
  test('returns 400 for invalid path', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/get-started', {
      method: 'POST',
      body: JSON.stringify({
        path: 'admin', // Invalid path
        name: 'Test',
        email: 'test@example.com',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  test('member path returns 400 for invalid email', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/get-started', {
      method: 'POST',
      body: JSON.stringify({
        path: 'member',
        name: 'Test User',
        email: 'invalid-email',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  test('employer path returns 400 for invalid email', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/get-started', {
      method: 'POST',
      body: JSON.stringify({
        path: 'employer',
        orgName: 'Test Org',
        email: 'invalid-email',
        workforceSize: '100-500',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  test('member path redirects to app.zimasahealth.com', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/get-started', {
      method: 'POST',
      body: JSON.stringify({
        path: 'member',
        name: 'Test User',
        email: 'test@example.com',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.redirect).toContain('app.zimasahealth.com');
  });

  test('employer path redirects to dashboard.zimasahealth.com', async () => {
    const request = new NextRequest('http://localhost:3000/api/forms/get-started', {
      method: 'POST',
      body: JSON.stringify({
        path: 'employer',
        orgName: 'Test Org',
        email: 'test@example.com',
        workforceSize: '100-500',
        honeypot: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.redirect).toContain('dashboard.zimasahealth.com');
  });
});
