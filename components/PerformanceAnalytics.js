import React from 'react';
import Perfume from 'perfume.js';

const metricNames = [
  'fp',
  'fcp',
  'lcp',
  'lcpFinal',
  'fid',
  'cls',
  'clsFinal',
  'tbt',
  'tbt10S',
  'tbtFinal',
];
new Perfume({
  analyticsTracker: ({ metricName, data, navigatorInformation }) => {
    if (metricNames.includes(metricName)) {
      ga('send', 'event', { // eslint-disable-line no-undef
        eventCategory: 'Perfume.js',
        eventAction: metricName,
        // Google Analytics metrics must be integers, so the value is rounded
        eventValue: metricName === 'cls' ? data * 1000 : data,
        eventLabel: navigatorInformation.isLowEndExperience
          ? 'lowEndExperience'
          : 'highEndExperience',
        // Use a non-interaction event to avoid affecting bounce rate
        nonInteraction: true,
      });
    }
  },
});

export default function PerformanceAnalytics() {
  return <span></span>;
}
