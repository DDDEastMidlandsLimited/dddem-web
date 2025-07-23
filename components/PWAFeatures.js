import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { isPWAInstalled } from '../utils/pwaInstall';
import { isPushNotificationSupported } from '../utils/pushNotifications';

// Dynamic imports to prevent SSR issues
const PWAInstallPrompt = dynamic(() => import('./PWAInstallPrompt'), {
  ssr: false,
});

const NotificationSettings = dynamic(
  () => import('./NotificationSettings'),
  {
    ssr: false,
  },
);

const PWAFeatures = ({ showSettings = false }) => {
  useEffect(() => {
    // Register service worker events for better PWA experience
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker.ready.then((registration) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('Service Worker is ready:', registration);
        }

        // Listen for service worker updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;

          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                // New content is available, refresh to update
                if (process.env.NODE_ENV === 'development') {
                  // eslint-disable-next-line no-console
                  console.log('New content available, refreshing...');
                }
                window.location.reload();
              }
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      {/* Always show install prompt if not installed */}
      <PWAInstallPrompt />

      {/* Show notification settings when requested */}
      {showSettings && <NotificationSettings />}
    </>
  );
};

export default PWAFeatures;
