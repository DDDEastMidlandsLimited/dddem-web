// Custom service worker for push notifications
// This will be imported by the next-pwa generated service worker

self.addEventListener('push', (event) => {
  console.log('Push event received:', event);

  if (!event.data) {
    console.log('Push event but no data');
    return;
  }

  let data;
  try {
    data = event.data.json();
  } catch (e) {
    data = {
      title: 'DDD East Midlands',
      body: event.data.text() || 'New update available!',
      icon: '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
      badge: '/icons/favicon-96x96-dunplab-manifest-20421.jpg',
    };
  }

  const options = {
    body: data.body,
    icon: data.icon || '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
    badge: data.badge || '/icons/favicon-96x96-dunplab-manifest-20421.jpg',
    tag: data.tag || 'ddd-notification',
    data: data.data || {},
    actions: data.actions || [],
    requireInteraction: data.requireInteraction || false,
    ...data.options,
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'DDD East Midlands', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);

  event.notification.close();

  const notificationData = event.notification.data;
  let urlToOpen = notificationData?.url || '/';

  // Handle action buttons
  if (event.action) {
    switch (event.action) {
      case 'view':
        urlToOpen = notificationData?.viewUrl || urlToOpen;
        break;
      case 'dismiss':
        return; // Just close the notification
      default:
        break;
    }
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if there's already a window/tab open with the target URL
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }

      // If no matching client found, open a new window/tab
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed:', event);
  
  // Track notification dismissal for analytics
  const notificationData = event.notification.data;
  if (notificationData?.trackDismissal) {
    // Could send analytics data here
    console.log('Notification dismissed:', notificationData);
  }
});

// Handle background sync for offline notification queue
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync-notifications') {
    event.waitUntil(processOfflineNotifications());
  }
});

async function processOfflineNotifications() {
  // Process any queued notifications that were received while offline
  try {
    const cache = await caches.open('notification-queue');
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      const data = await response.json();
      
      // Show the notification
      await self.registration.showNotification(data.title, data.options);
      
      // Remove from queue
      await cache.delete(request);
    }
  } catch (error) {
    console.error('Error processing offline notifications:', error);
  }
}

// Cache notification data when offline
self.addEventListener('fetch', (event) => {
  // Only handle notification-related requests
  if (event.request.url.includes('/api/notifications')) {
    event.respondWith(
      fetch(event.request).catch(async () => {
        // If offline, cache the notification for later processing
        if (event.request.method === 'POST') {
          const cache = await caches.open('notification-queue');
          const clonedRequest = event.request.clone();
          await cache.put(event.request, new Response(JSON.stringify({
            timestamp: Date.now(),
            url: event.request.url,
            method: event.request.method,
            body: await clonedRequest.text()
          })));
          
          // Register for background sync
          await self.registration.sync.register('background-sync-notifications');
        }
        
        return new Response('Offline', { status: 503 });
      })
    );
  }
});

// Periodic background sync for checking new content
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'check-new-content') {
    event.waitUntil(checkForNewContent());
  }
});

async function checkForNewContent() {
  try {
    // Check localStorage for user preferences
    const preferences = await getNotificationPreferences();
    
    if (!preferences.newContent) {
      return; // User doesn't want new content notifications
    }
    
    // In a real implementation, this would check your API for new content
    // For now, we'll just show a placeholder
    console.log('Checking for new content...');
    
    // Example of showing a notification for new content
    // await self.registration.showNotification('New Content Available!', {
    //   body: 'Check out the latest updates on DDD East Midlands',
    //   icon: '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
    //   tag: 'new-content',
    //   data: { url: '/' }
    // });
  } catch (error) {
    console.error('Error checking for new content:', error);
  }
}

async function getNotificationPreferences() {
  try {
    // Since we can't access localStorage directly in service worker,
    // we'd need to use IndexedDB or communicate with the main thread
    // For now, return default preferences
    return {
      newContent: false,
      eventUpdates: false,
      important: false
    };
  } catch (error) {
    console.error('Error getting notification preferences:', error);
    return {
      newContent: false,
      eventUpdates: false,
      important: false
    };
  }
}