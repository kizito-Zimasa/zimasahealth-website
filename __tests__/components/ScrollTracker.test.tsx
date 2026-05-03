import { render } from '@testing-library/react';
import ScrollTracker from '@/components/ScrollTracker';

describe('ScrollTracker', () => {
  beforeEach(() => {
    delete (window as any).gtag;
    jest.clearAllMocks();
  });

  test('renders nothing (null return)', () => {
    const { container } = render(<ScrollTracker slug="test-slug" />);
    expect(container.firstChild).toBeNull();
  });

  test('does not throw if gtag is undefined', () => {
    expect(() => render(<ScrollTracker slug="test-slug" />)).not.toThrow();
  });

  test('sets up scroll listener on mount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    render(<ScrollTracker slug="test-slug" />);
    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addEventListenerSpy.mockRestore();
  });

  test('removes scroll listener on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(<ScrollTracker slug="test-slug" />);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});
