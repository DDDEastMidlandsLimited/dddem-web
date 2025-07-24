// Utility functions for managing push notifications

// Check if push notifications are supported
export function isPushNotificationSupported() {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window
  );
}

// Check if the user has granted notification permission
export function getNotificationPermission() {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported';
  }
  return Notification.permission;
}

// Request notification permission from the user
export async function requestNotificationPermission() {
  if (!isPushNotificationSupported()) {
    throw new Error('Push notifications are not supported');
  }

  if (getNotificationPermission() === 'granted') {
    return 'granted';
  }

  const permission = await Notification.requestPermission();
  return permission;
}

// Get the service worker registration
export async function getServiceWorkerRegistration() {
  if (
    typeof window === 'undefined' ||
    !('serviceWorker' in navigator)
  ) {
    throw new Error('Service workers are not supported');
  }

  const registration = await navigator.serviceWorker.ready;
  return registration;
}

// Subscribe to push notifications
export async function subscribeToPushNotifications(vapidPublicKey) {
  try {
    const permission = await requestNotificationPermission();
    if (permission !== 'granted') {
      throw new Error('Notification permission denied');
    }

    const registration = await getServiceWorkerRegistration();

    // Check if already subscribed
    const existingSubscription =
      await registration.pushManager.getSubscription();
    if (existingSubscription) {
      return existingSubscription;
    }

    // Create new subscription
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: vapidPublicKey,
    });

    return subscription;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error subscribing to push notifications:', error);
    throw error;
  }
}

// Unsubscribe from push notifications
export async function unsubscribeFromPushNotifications() {
  try {
    const registration = await getServiceWorkerRegistration();
    const subscription =
      await registration.pushManager.getSubscription();

    if (subscription) {
      await subscription.unsubscribe();
      return true;
    }

    return false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      'Error unsubscribing from push notifications:',
      error,
    );
    throw error;
  }
}

// Check if user is currently subscribed to push notifications
export async function isSubscribedToPushNotifications() {
  try {
    if (!isPushNotificationSupported()) {
      return false;
    }

    const registration = await getServiceWorkerRegistration();
    const subscription =
      await registration.pushManager.getSubscription();

    return !!subscription;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error checking push subscription status:', error);
    return false;
  }
}

// Send subscription to server (this would need to be implemented with actual backend)
export async function sendSubscriptionToServer(
  subscription,
  action = 'subscribe',
) {
  // In a real implementation, this would send the subscription to your backend
  // For now, we'll just store it locally and log it
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `${action === 'subscribe' ? 'Subscribing' : 'Unsubscribing'} user:`,
      subscription,
    );
  }

  if (typeof window !== 'undefined') {
    if (action === 'subscribe') {
      localStorage.setItem(
        'pushSubscription',
        JSON.stringify(subscription),
      );
    } else {
      localStorage.removeItem('pushSubscription');
    }
  }

  return Promise.resolve();
}

// Check if user preferences allow notifications for specific types
export function getNotificationPreferences() {
  if (typeof window === 'undefined') {
    return {
      newContent: false,
      eventUpdates: false,
      important: false,
    };
  }

  const stored = localStorage.getItem('notificationPreferences');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error parsing notification preferences:', e);
    }
  }

  return {
    newContent: false,
    eventUpdates: false,
    important: false,
  };
}

// Save user notification preferences
export function saveNotificationPreferences(preferences) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(
    'notificationPreferences',
    JSON.stringify(preferences),
  );
}

// Show a local notification (for testing purposes)
export function showLocalNotification(title, options = {}) {
  if (getNotificationPermission() !== 'granted') {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        'Cannot show notification: permission not granted',
      );
    }
    return;
  }

  const defaultOptions = {
    icon: '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
    badge: '/icons/favicon-96x96-dunplab-manifest-20421.jpg',
    tag: 'ddd-notification',
    ...options,
  };

  new Notification(title, defaultOptions);
}
