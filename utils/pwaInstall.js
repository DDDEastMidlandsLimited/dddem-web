// Utility functions for PWA installation

// Check if the app is already installed (running in standalone mode)
export function isPWAInstalled() {
  if (typeof window === 'undefined') return false;

  return (
    (window.matchMedia &&
      window.matchMedia('(display-mode: standalone)').matches) ||
    window.navigator.standalone === true
  );
}

// Check if the browser supports PWA installation
export function isPWAInstallable() {
  if (typeof window === 'undefined') return false;

  // Check if the beforeinstallprompt event is supported
  return 'onbeforeinstallprompt' in window;
}

// Store the install prompt event for later use
let deferredPrompt = null;

export function setDeferredPrompt(e) {
  deferredPrompt = e;
}

export function getDeferredPrompt() {
  return deferredPrompt;
}

// Show the install prompt
export async function showInstallPrompt() {
  if (!deferredPrompt) {
    throw new Error('Install prompt not available');
  }

  // Show the prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  // Reset the deferred prompt since it can only be used once
  deferredPrompt = null;

  return outcome;
}

// Check if install prompt is available
export function isInstallPromptAvailable() {
  return !!deferredPrompt;
}

// Track installation events (for analytics)
export function trackInstallEvent(eventType, data = {}) {
  if (typeof window === 'undefined') return;

  const event = {
    type: eventType,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    ...data,
  };

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('PWA Install Event:', event);
  }

  // Store events locally (in a real app, you might send to analytics)
  const events = getInstallEvents();
  events.push(event);

  try {
    localStorage.setItem(
      'pwaInstallEvents',
      JSON.stringify(events.slice(-10)),
    ); // Keep last 10 events
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error storing install event:', e);
  }
}

// Get stored install events
export function getInstallEvents() {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem('pwaInstallEvents');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving install events:', e);
    return [];
  }
}

// Check if user has dismissed install prompt recently
export function hasRecentlyDismissedInstall() {
  if (typeof window === 'undefined') return false;

  const dismissedAt = localStorage.getItem('installPromptDismissed');
  if (!dismissedAt) return false;

  const dismissedDate = new Date(dismissedAt);
  const daysSinceDismissal =
    (Date.now() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);

  // Don't show again for 7 days after dismissal
  return daysSinceDismissal < 7;
}

// Mark install prompt as dismissed
export function markInstallPromptDismissed() {
  if (typeof window === 'undefined') return;

  localStorage.setItem(
    'installPromptDismissed',
    new Date().toISOString(),
  );
  trackInstallEvent('prompt_dismissed');
}

// Clear dismissal state (for testing purposes)
export function clearInstallPromptDismissal() {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('installPromptDismissed');
}

// Get device type for better install messaging
export function getDeviceType() {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) {
    return 'android';
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  } else if (/windows phone/.test(userAgent)) {
    return 'windows';
  } else if (/mac/.test(userAgent)) {
    return 'mac';
  } else if (/win/.test(userAgent)) {
    return 'windows';
  } else if (/linux/.test(userAgent)) {
    return 'linux';
  }

  return 'desktop';
}

// Get appropriate install instructions for the device
export function getInstallInstructions() {
  const device = getDeviceType();

  const instructions = {
    android:
      'Tap the "Add to Home Screen" option when prompted or find it in your browser menu.',
    ios: 'Tap the Share button and select "Add to Home Screen".',
    desktop:
      "Click the install button in your browser's address bar or use the install option in the menu.",
    windows:
      "Click the install button in your browser's address bar.",
    mac: "Click the install button in your browser's address bar.",
    linux: "Use your browser's install option in the menu.",
    unknown:
      'Look for an "Add to Home Screen" or "Install" option in your browser.',
  };

  return instructions[device] || instructions.unknown;
}

// Check if the device/browser combination supports custom install prompts
export function supportsCustomInstallPrompt() {
  const device = getDeviceType();

  // iOS Safari doesn't support the beforeinstallprompt event
  if (device === 'ios') {
    return false;
  }

  return isPWAInstallable();
}
