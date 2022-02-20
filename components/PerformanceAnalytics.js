import React from 'react';
import Perfume from 'perfume.js';
import ReactGA from 'react-ga';

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
      
    ReactGA.event({ 
      category: 'Perfume.js',
      action: metricName,
      value: metricName === 'cls' ? data * 1000 : data,
      label: navigatorInformation.isLowEndExperience
        ? 'lowEndExperience'
        : 'highEndExperience',
      nonInteraction: true,
      });
    }
  },
});

export default function PerformanceAnalytics() {
  return <span></span>;
}
