import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import {
  isPushNotificationSupported,
  getNotificationPermission,
  subscribeToPushNotifications,
  unsubscribeFromPushNotifications,
  isSubscribedToPushNotifications,
  sendSubscriptionToServer,
  getNotificationPreferences,
  saveNotificationPreferences,
  showLocalNotification,
} from '../utils/pushNotifications';

const NotificationSettings = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] = useState('default');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    newContent: false,
    eventUpdates: false,
    important: false,
  });
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    // Check support and current state
    setIsSupported(isPushNotificationSupported());
    setPermission(getNotificationPermission());
    setPreferences(getNotificationPreferences());

    // Check subscription status
    if (isPushNotificationSupported()) {
      isSubscribedToPushNotifications().then(setIsSubscribed);
    }
  }, []);

  const showMessage = (type, content) => {
    setMessage({ type, content });
    setTimeout(() => setMessage({ type: '', content: '' }), 5000);
  };

  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      // Note: In a real implementation, you would need a VAPID public key from your server
      const vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY_HERE';

      const subscription =
        await subscribeToPushNotifications(vapidPublicKey);
      await sendSubscriptionToServer(subscription, 'subscribe');

      setIsSubscribed(true);
      setPermission('granted');
      showMessage(
        'success',
        'Successfully subscribed to notifications!',
      );

      // Show a test notification
      showLocalNotification('DDD East Midlands', {
        body: 'You will now receive notifications about new content and updates!',
        icon: '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Subscription failed:', error);
      showMessage('danger', `Failed to subscribe: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      await unsubscribeFromPushNotifications();
      await sendSubscriptionToServer(null, 'unsubscribe');

      setIsSubscribed(false);
      showMessage(
        'info',
        'Successfully unsubscribed from notifications.',
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Unsubscription failed:', error);
      showMessage(
        'danger',
        `Failed to unsubscribe: ${error.message}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreferenceChange = (key, value) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    saveNotificationPreferences(newPreferences);
  };

  const testNotification = () => {
    try {
      showLocalNotification('Test Notification', {
        body: 'This is a test notification from DDD East Midlands!',
        icon: '/icons/android-icon-192x192-dunplab-manifest-20421.jpg',
      });
      showMessage('success', 'Test notification sent!');
    } catch (error) {
      showMessage('danger', 'Failed to show test notification.');
    }
  };

  if (!isSupported) {
    return (
      <Card className="mb-4">
        <Card.Header>
          <h5 className="mb-0">📱 Notifications</h5>
        </Card.Header>
        <Card.Body>
          <Alert variant="warning">
            Push notifications are not supported in your browser.
            Please try using a modern browser like Chrome, Firefox, or
            Edge.
          </Alert>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mb-4">
      <Card.Header>
        <h5 className="mb-0">📱 Notification Settings</h5>
      </Card.Header>
      <Card.Body>
        {message.content && (
          <Alert variant={message.type} className="mb-3">
            {message.content}
          </Alert>
        )}

        <div className="mb-4">
          <h6>Notification Status</h6>
          <div className="d-flex align-items-center gap-2 mb-3">
            <span
              className={`badge ${
                permission === 'granted'
                  ? 'bg-success'
                  : permission === 'denied'
                    ? 'bg-danger'
                    : 'bg-warning'
              }`}
            >
              {permission === 'granted'
                ? 'Enabled'
                : permission === 'denied'
                  ? 'Blocked'
                  : 'Not Enabled'}
            </span>
            {isSubscribed && (
              <span className="badge bg-primary">Subscribed</span>
            )}
          </div>

          <p className="text-muted mb-3">
            Get notified about new content, event updates, and
            important announcements for DDD East Midlands.
          </p>

          {permission === 'denied' && (
            <Alert variant="warning">
              Notifications are blocked. Please enable them in your
              browser settings to receive updates.
            </Alert>
          )}

          <div className="d-flex gap-2 flex-wrap">
            {!isSubscribed ? (
              <Button
                variant="primary"
                onClick={handleSubscribe}
                disabled={isLoading || permission === 'denied'}
              >
                {isLoading && (
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />
                )}
                Enable Notifications
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                onClick={handleUnsubscribe}
                disabled={isLoading}
              >
                {isLoading && (
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />
                )}
                Disable Notifications
              </Button>
            )}

            {isSubscribed && (
              <Button
                variant="outline-primary"
                onClick={testNotification}
              >
                Test Notification
              </Button>
            )}
          </div>
        </div>

        {isSubscribed && (
          <div>
            <h6>Notification Preferences</h6>
            <p className="text-muted mb-3">
              Choose what types of notifications you'd like to
              receive:
            </p>

            <Form>
              <Form.Check
                type="switch"
                id="newContent"
                label="New content (speakers, talks, updates)"
                checked={preferences.newContent}
                onChange={(e) =>
                  handlePreferenceChange(
                    'newContent',
                    e.target.checked,
                  )
                }
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="eventUpdates"
                label="Event updates (schedule changes, venue info)"
                checked={preferences.eventUpdates}
                onChange={(e) =>
                  handlePreferenceChange(
                    'eventUpdates',
                    e.target.checked,
                  )
                }
                className="mb-2"
              />
              <Form.Check
                type="switch"
                id="important"
                label="Important announcements"
                checked={preferences.important}
                onChange={(e) =>
                  handlePreferenceChange(
                    'important',
                    e.target.checked,
                  )
                }
                className="mb-2"
              />
            </Form>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default NotificationSettings;
