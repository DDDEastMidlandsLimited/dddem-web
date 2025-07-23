import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faMobile,
  faDesktop,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  isPWAInstalled,
  isPWAInstallable,
  setDeferredPrompt,
  getDeferredPrompt,
  showInstallPrompt,
  isInstallPromptAvailable,
  trackInstallEvent,
  hasRecentlyDismissedInstall,
  markInstallPromptDismissed,
  getDeviceType,
  getInstallInstructions,
  supportsCustomInstallPrompt,
} from '../utils/pwaInstall';

const PWAInstallPrompt = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [deviceType, setDeviceType] = useState('unknown');

  useEffect(() => {
    setIsInstalled(isPWAInstalled());
    setIsInstallable(isPWAInstallable());
    setDeviceType(getDeviceType());

    // Handle the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show the install prompt if user hasn't dismissed it recently
      if (!hasRecentlyDismissedInstall() && !isPWAInstalled()) {
        setShowPrompt(true);
      }

      trackInstallEvent('prompt_available');
    };

    // Handle app installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setShowModal(false);
      trackInstallEvent('app_installed');
    };

    if (typeof window !== 'undefined') {
      window.addEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
      window.addEventListener('appinstalled', handleAppInstalled);

      return () => {
        window.removeEventListener(
          'beforeinstallprompt',
          handleBeforeInstallPrompt,
        );
        window.removeEventListener(
          'appinstalled',
          handleAppInstalled,
        );
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!isInstallPromptAvailable()) {
      setShowModal(true);
      return;
    }

    setIsInstalling(true);
    try {
      const outcome = await showInstallPrompt();

      if (outcome === 'accepted') {
        trackInstallEvent('prompt_accepted');
        setShowPrompt(false);
      } else {
        trackInstallEvent('prompt_dismissed');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Install failed:', error);
      trackInstallEvent('install_error', { error: error.message });
    } finally {
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    markInstallPromptDismissed();
  };

  const getInstallIcon = () => {
    switch (deviceType) {
      case 'android':
      case 'ios':
        return faMobile;
      default:
        return faDesktop;
    }
  };

  const getInstallButtonText = () => {
    switch (deviceType) {
      case 'android':
      case 'ios':
        return 'Add to Home Screen';
      default:
        return 'Install App';
    }
  };

  // Don't render if already installed
  if (isInstalled) {
    return null;
  }

  return (
    <>
      {/* Floating install prompt */}
      {showPrompt && (
        <div
          className="position-fixed bottom-0 start-0 end-0 p-3 d-md-none"
          style={{ zIndex: 1050 }}
        >
          <Alert
            variant="primary"
            className="d-flex align-items-center justify-content-between mb-0 shadow"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={getInstallIcon()}
                className="me-2"
              />
              <div>
                <strong>Install DDD East Midlands</strong>
                <br />
                <small>Quick access from your home screen!</small>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Button
                size="sm"
                variant="light"
                onClick={handleInstallClick}
                disabled={isInstalling}
              >
                Install
              </Button>
              <Button
                size="sm"
                variant="outline-light"
                onClick={handleDismiss}
                aria-label="Dismiss"
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </Alert>
        </div>
      )}

      {/* Desktop/tablet install card */}
      {(showPrompt || isInstallable) && (
        <Card className="mb-4 d-none d-md-block">
          <Card.Header>
            <h5 className="mb-0">
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Install DDD East Midlands App
            </h5>
          </Card.Header>
          <Card.Body>
            <p className="mb-3">
              Install the DDD East Midlands app for quick access,
              offline reading, and push notifications about new
              content and event updates.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              <Button
                variant="primary"
                onClick={handleInstallClick}
                disabled={isInstalling}
              >
                <FontAwesomeIcon
                  icon={getInstallIcon()}
                  className="me-2"
                />
                {getInstallButtonText()}
              </Button>

              <Button
                variant="outline-secondary"
                onClick={() => setShowModal(true)}
              >
                Learn More
              </Button>

              {showPrompt && (
                <Button
                  variant="outline-secondary"
                  onClick={handleDismiss}
                >
                  Not Now
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Install instructions modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon
              icon={getInstallIcon()}
              className="me-2"
            />
            Install DDD East Midlands
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Benefits of Installing:</h6>
          <ul className="mb-4">
            <li>Quick access from your home screen or desktop</li>
            <li>Offline reading of cached pages</li>
            <li>Push notifications for new content and updates</li>
            <li>App-like experience with full-screen browsing</li>
            <li>Faster loading times</li>
          </ul>

          <h6>How to Install:</h6>
          <p className="mb-3">{getInstallInstructions()}</p>

          {supportsCustomInstallPrompt() &&
            isInstallPromptAvailable() && (
              <Alert variant="info">
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Your browser supports automatic installation. Click
                the button below to install now!
              </Alert>
            )}
        </Modal.Body>
        <Modal.Footer>
          {supportsCustomInstallPrompt() &&
            isInstallPromptAvailable() && (
              <Button
                variant="primary"
                onClick={handleInstallClick}
                disabled={isInstalling}
              >
                <FontAwesomeIcon
                  icon={getInstallIcon()}
                  className="me-2"
                />
                {isInstalling
                  ? 'Installing...'
                  : getInstallButtonText()}
              </Button>
            )}
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PWAInstallPrompt;
