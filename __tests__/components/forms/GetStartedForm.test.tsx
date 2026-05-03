import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GetStartedForm from '@/components/forms/GetStartedForm';

jest.mock('@/lib/analytics', () => ({
  trackMemberSignup: jest.fn(),
  trackEmployerSignup: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

global.fetch = jest.fn();

describe('GetStartedForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  test('renders member path by default', () => {
    render(<GetStartedForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Employer Code/i)).toBeInTheDocument();
  });

  test('switches to employer path when clicked', () => {
    render(<GetStartedForm />);
    fireEvent.click(screen.getByText(/I'm an Employer/i));
    expect(screen.getByLabelText(/Organization Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Workforce Size/i)).toBeInTheDocument();
  });

  test('member path submission redirects to app', async () => {
    delete (window as any).location;
    (window as any).location = { href: '' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        redirect: 'https://app.zimasahealth.com/signup?name=John&email=john@example.com',
        path: 'member',
      }),
    });

    render(<GetStartedForm />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByText(/Get Started Free/i));

    await waitFor(() => {
      expect(window.location.href).toContain('app.zimasahealth.com');
    });
  });

  test('employer path submission redirects to dashboard', async () => {
    delete (window as any).location;
    (window as any).location = { href: '' };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        redirect: 'https://dashboard.zimasahealth.com/setup?email=john@example.com&org=Acme',
        path: 'employer',
      }),
    });

    render(<GetStartedForm />);
    fireEvent.click(screen.getByText(/I'm an Employer/i));
    fireEvent.change(screen.getByLabelText(/Organization Name/i), { target: { value: 'Acme Inc' } });
    fireEvent.change(screen.getByLabelText(/Work Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Workforce Size/i), { target: { value: '100-500' } });
    fireEvent.click(screen.getByText(/Get Started Free/i));

    await waitFor(() => {
      expect(window.location.href).toContain('dashboard.zimasahealth.com');
    });
  });
});
