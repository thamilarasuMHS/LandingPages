export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  console.log('[Analytics]', eventName, properties);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
};

export const trackPageView = () => {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackWaitlistConversion = (email: string) => {
  trackEvent('waitlist_signup', {
    email,
    timestamp: new Date().toISOString(),
  });
};

export const trackAppointmentRequest = (email: string) => {
  trackEvent('appointment_request', {
    email,
    timestamp: new Date().toISOString(),
  });
};
