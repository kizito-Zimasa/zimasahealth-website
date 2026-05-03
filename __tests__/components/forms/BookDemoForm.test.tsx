import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookDemoForm from '@/components/forms/BookDemoForm';

jest.mock('@/lib/analytics', () => ({
  trackDemoFormSubmit: jest.fn(),
}));

global.fetch = jest.fn();

describe('BookDemoForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  test('renders form with all required fields', () => {
    render(<BookDemoForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Role/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Solution Interest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Implementation Timeline/i)).toBeInTheDocument();
  });

  test('submits form successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Demo request received.' }),
    });

    render(<BookDemoForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: 'Acme Inc' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '555-0000' } });
    fireEvent.change(screen.getByLabelText(/Your Role/i), { target: { value: 'HR Director' } });

    fireEvent.click(screen.getByText(/Request Demo/i));

    await waitFor(() => {
      expect(screen.getByText(/We'll be in touch soon/i)).toBeInTheDocument();
    });
  });

  test('displays error messages on validation failure', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        error: 'Validation failed.',
        details: { email: 'Valid email is required.' },
      }),
    });

    render(<BookDemoForm />);
    fireEvent.click(screen.getByText(/Request Demo/i));

    await waitFor(() => {
      expect(screen.getByText(/Valid email is required./i)).toBeInTheDocument();
    });
  });
});
