import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { logEvent } from '../utils/analytics';

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            variant="pills"
            defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/conference-information">
                About
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              tabIndex="0"
              title="Information"
              id="basic-information-nav-dropdown"
            >
              <NavDropdown.Item
                id="covid-precautions"
                tabIndex="0"
                href="/2021/covid-precautions"
                title="Link to Covid Precautions Page"
              >
                Covid Precautions
              </NavDropdown.Item>
              <NavDropdown.Item
                id="ticket-information"
                tabIndex="0"
                href="/information/ticket-information"
                title="Link to Ticket Information Page"
              >
                Ticket Information
              </NavDropdown.Item>
              <NavDropdown.Item
                id="venue-informaation"
                tabIndex="0"
                href="/information/venue-information"
                title="Link to Venue Information Page"
              >
                Venue
              </NavDropdown.Item>
              <NavDropdown.Item
                id="accessibility-information"
                tabIndex="0"
                href="/information/accessibility-information"
                title="Link to Accessibility Information Page"
              >
                Accessibility
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link
                tabIndex="0"
                rel="noopener noreferrer"
                target="_blank"
                href="https://blog.dddeastmidlands.com/"
                onSelect={() => {
                  logEvent('navigation', 'blog');
                }}
              >
                Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                tabIndex="0"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UC5TNH43dpYqmw3ggv9OGIKw"
                onSelect={() => {
                  logEvent('navigation', 'youtube');
                }}
              >
                YouTube
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              tabIndex="0"
              title="Past Events"
              id="basic-past-event-nav-dropdown"
            >
              <Nav.Item>
                <NavDropdown.Item
                  tabIndex="0"
                  href="/pastconferences/pastspeakers/pastspeakergrid"
                >
                  Past Speakers
                </NavDropdown.Item>
              </Nav.Item>
              <NavDropdown.Item
                tabIndex="0"
                href="/pastconferences/album"
              >
                Past Photos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link tabIndex="0" href="/code-of-conduct">
                Code of Conduct
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
