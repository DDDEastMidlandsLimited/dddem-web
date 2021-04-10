import React from 'react';
import { initGA, logPageView } from '../utils/analytics';

if (!window.GA_INITIALIZED) {
  initGA();
  window.GA_INITIALIZED = true;
}

logPageView();

export default function GoogleAnalytics() {
  return <span></span>;
}
