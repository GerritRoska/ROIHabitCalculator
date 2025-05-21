
// Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackAcornsClick = () => {
  trackEvent('acorns_link_click', {
    category: 'Referral',
    action: 'Click',
    label: 'Acorns Referral Link'
  });
};

export const trackCalculatorInteraction = (action: string) => {
  trackEvent('calculator_interaction', {
    category: 'Calculator',
    action: action
  });
};
