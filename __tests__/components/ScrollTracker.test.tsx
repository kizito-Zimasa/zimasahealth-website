import { render } from '@testing-library/react';
import ScrollTracker from '@/components/ScrollTracker';

describe('ScrollTracker', () => {
  beforeEach(() => {
    delete (window as any).gtag;
    jest.clearAllMocks();
    // Reset scroll position
    window.scrollY = 0;
  });

  afterEach(() => {
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

  test('tracks article read when scroll exceeds threshold', () => {
    jest.useFakeTimers();
    const mockGtag = jest.fn();
    (window as any).gtag = mockGtag;

    render(<ScrollTracker slug="my-article" />);

    // Simulate scrolling to 80%
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 600, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 100, writable: true, configurable: true });

    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);

    // Wait for debounce (200ms)
    jest.advanceTimersByTime(250);

    expect(mockGtag).toHaveBeenCalledWith('event', 'article_read', {
      event: 'article_read',
      article_slug: 'my-article',
    });

    jest.useRealTimers();
  });

  test('prevents duplicate tracking even with multiple scroll events', () => {
    jest.useFakeTimers();
    const mockGtag = jest.fn();
    (window as any).gtag = mockGtag;

    render(<ScrollTracker slug="test-slug" />);

    // Simulate multiple scroll events above threshold
    Object.defineProperty(window, 'scrollY', { value: 400, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 600, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 100, writable: true, configurable: true });

    window.dispatchEvent(new Event('scroll'));
    jest.advanceTimersByTime(250);
    window.dispatchEvent(new Event('scroll'));
    jest.advanceTimersByTime(250);

    // Should only call gtag once despite multiple scroll events
    expect(mockGtag).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });

  test('respects custom threshold prop', () => {
    jest.useFakeTimers();
    const mockGtag = jest.fn();
    (window as any).gtag = mockGtag;

    render(<ScrollTracker slug="test-slug" threshold={50} />);

    // Simulate 60% scroll (crosses 50% threshold)
    Object.defineProperty(window, 'scrollY', { value: 300, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 600, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 100, writable: true, configurable: true });

    window.dispatchEvent(new Event('scroll'));

    jest.advanceTimersByTime(250);

    expect(mockGtag).toHaveBeenCalled();

    jest.useRealTimers();
  });

  test('does not track on very short pages (docHeight <= 0)', () => {
    jest.useFakeTimers();
    const mockGtag = jest.fn();
    (window as any).gtag = mockGtag;

    render(<ScrollTracker slug="test-slug" />);

    // Simulate short page where docHeight = 0
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 100, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 200, writable: true, configurable: true });

    window.dispatchEvent(new Event('scroll'));
    jest.advanceTimersByTime(250);

    // gtag should not have been called (docHeight guard prevented it)
    expect(mockGtag).not.toHaveBeenCalled();

    jest.useRealTimers();
  });
});
