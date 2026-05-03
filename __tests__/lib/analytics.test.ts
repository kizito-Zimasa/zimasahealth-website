import { trackEvent, trackDemoFormSubmit, trackMemberSignup, trackArticleRead } from '@/lib/analytics';

describe('Analytics helpers', () => {
  // Mock window.gtag
  beforeEach(() => {
    delete (window as any).gtag;
  });

  afterEach(() => {
    delete (window as any).gtag;
  });

  describe('trackEvent', () => {
    test('does nothing if gtag is not defined (no consent)', () => {
      // gtag is undefined, so trackEvent should not error
      expect(() => trackEvent({ event: 'test' })).not.toThrow();
    });

    test('calls gtag if defined (user consented)', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackEvent({ event: 'test_event', foo: 'bar' });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_event', { event: 'test_event', foo: 'bar' });
    });
  });

  describe('trackDemoFormSubmit', () => {
    test('tracks demo form submission with correct parameters', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackDemoFormSubmit();

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit', {
        event: 'form_submit',
        form_id: 'book_demo',
      });
    });
  });

  describe('trackMemberSignup', () => {
    test('tracks member signup with tier and type', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackMemberSignup();

      expect(mockGtag).toHaveBeenCalledWith('event', 'signup', {
        event: 'signup',
        type: 'member',
        tier: 'go',
      });
    });
  });

  describe('trackArticleRead', () => {
    test('tracks article read with slug', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackArticleRead('my-article-slug');

      expect(mockGtag).toHaveBeenCalledWith('event', 'article_read', {
        event: 'article_read',
        article_slug: 'my-article-slug',
      });
    });
  });

  describe('trackPageView', () => {
    test('tracks page view with path and title', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackPageView('/test-page', 'Test Page');

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        event: 'page_view',
        page_path: '/test-page',
        page_title: 'Test Page',
      });
    });
  });

  describe('trackContactFormSubmit', () => {
    test('tracks contact form submission', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackContactFormSubmit();

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit', {
        event: 'form_submit',
        form_id: 'contact_us',
      });
    });
  });

  describe('trackEmployerSignup', () => {
    test('tracks employer signup with tier and type', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackEmployerSignup();

      expect(mockGtag).toHaveBeenCalledWith('event', 'signup', {
        event: 'signup',
        type: 'employer',
        tier: 'lite',
      });
    });
  });

  describe('trackCTAClick', () => {
    test('tracks CTA click with label and page', () => {
      const mockGtag = jest.fn();
      (window as any).gtag = mockGtag;

      trackCTAClick('Get Started', '/home');

      expect(mockGtag).toHaveBeenCalledWith('event', 'cta_click', {
        event: 'cta_click',
        cta_label: 'Get Started',
        page: '/home',
      });
    });
  });

  describe('trackEvent with SSR', () => {
    test('does not error when window is undefined', () => {
      const originalWindow = global.window;
      delete (global as any).window;

      expect(() => trackEvent({ event: 'test' })).not.toThrow();

      (global as any).window = originalWindow;
    });
  });
});
