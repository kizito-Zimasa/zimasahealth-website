import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactUsForm from '@/components/forms/ContactUsForm';

jest.mock('@/lib/analytics', () => ({
  trackContactFormSubmit: jest.fn(),
}));

global.fetch = jest.fn();

describe('ContactUsForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  test('renders form with all required fields', () => {
    render(<ContactUsForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Inquiry Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('submits form successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Your message has been received.' }),
    });

    render(<ContactUsForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: 'Tech Corp' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, I have a question.' } });

    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => {
      expect(screen.getByText(/We'll respond as soon as possible./i)).toBeInTheDocument();
    });
  });

  test('displays validation errors on failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: 'Validation failed.',
        details: { email: 'Valid email is required.' },
      }),
    });

    render(<ContactUsForm />);
    fireEvent.click(screen.getByText(/Send Message/i));

    await waitFor(() => {
      expect(screen.getByText(/Valid email is required./i)).toBeInTheDocument();
    });
  });
});
