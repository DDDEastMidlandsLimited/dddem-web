import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import HeadComponent from '../components/Head';
import Header from '../components/Header';

const title = 'App Settings';
const description =
  'Manage your notification preferences and app settings for DDD East Midlands.';

export default function AppSettings() {
  return (
    <Layout>
      <HeadComponent>
        <title>{title} - DDD East Midlands</title>
        <meta name="description" content={description} />
      </HeadComponent>

      <Header title={title} banner="/static/banners/contact.jpg" />

      <Container className="py-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="mb-4">
              <h2>App Features</h2>
              <p className="lead">
                Customize your DDD East Midlands experience with push
                notifications and app installation options.
              </p>
            </div>

            <div className="mt-5">
              <h3>About Progressive Web App Features</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>📱 App Installation</h5>
                  <p>
                    Install DDD East Midlands as an app on your device
                    for:
                  </p>
                  <ul>
                    <li>Quick access from your home screen</li>
                    <li>Offline reading of cached content</li>
                    <li>Full-screen app-like experience</li>
                    <li>Faster loading times</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>🔔 Push Notifications</h5>
                  <p>Stay updated with notifications about:</p>
                  <ul>
                    <li>New speakers and talks announced</li>
                    <li>Event schedule updates</li>
                    <li>Important announcements</li>
                    <li>Conference day reminders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-light rounded">
              <h5>Privacy & Data</h5>
              <p className="mb-2">
                Your notification preferences are stored locally on
                your device. We respect your privacy and will only
                send notifications for the content types you've
                selected.
              </p>
              <p className="mb-0 small text-muted">
                You can change these settings at any time or disable
                notifications completely through your browser
                settings.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
