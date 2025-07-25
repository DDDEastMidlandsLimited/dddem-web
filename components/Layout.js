import React from 'react';
import dynamic from 'next/dynamic';
import Navigation from './Navigation';
import Footer from './Footer';
import GlobalHead from './Head';

const PerformanceAnalytics = dynamic(
  () => import('./PerformanceAnalytics'),
  { ssr: false },
);

const GoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), {
  ssr: false,
});

const PWAFeatures = dynamic(() => import('./PWAFeatures'), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <div className="container">
      <GlobalHead />
      <Navigation />
      <PerformanceAnalytics />
      <GoogleAnalytics />
      <PWAFeatures />
      {children}
      <Footer />
    </div>
  );
}
