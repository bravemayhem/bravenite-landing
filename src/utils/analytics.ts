import ReactGA from 'react-ga4';

// Your GA4 Measurement ID
const MEASUREMENT_ID = 'G-LME58BETSR';

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
}; 