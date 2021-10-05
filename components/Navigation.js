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

            <NavDropdown
              tabIndex="0"
              title="Information"
              id="basic-information-nav-dropdown"
            >
              <NavDropdown.Item
                id="about-the-conference"
                tabIndex="0"
                href="/information/conference-information"
                title="Link to Conference Information Page"
              >
                About DDD East Midlands
              </NavDropdown.Item>
              <NavDropdown.Item
                id="about-the-conference-crew"
                tabIndex="0"
                href="/information/organisers-and-crew/conference-crew-information"
                title="Link to Conference Crew Information Page"
              >
                About The Conference Crew
              </NavDropdown.Item>
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
                id="attendee-information"
                tabIndex="0"
                href="/information/attendee-information"
                title="Link to Attendee Information Page"
              >
                Attendee Information
              </NavDropdown.Item>
              <NavDropdown.Item
                id="speaker-information"
                tabIndex="0"
                href="/information/speaker-information"
                title="Link to Speaker Information Page"
              >
                Speaker Information
              </NavDropdown.Item>
              <NavDropdown.Item
                id="crew-information"
                tabIndex="0"
                href="/information/crew-information"
                title="Link to Crew Information Page"
              >
                Crew Information
              </NavDropdown.Item>
              <NavDropdown.Item
                id="sponsor-information"
                tabIndex="0"
                href="/information/sponsor-information"
                title="Link to Sponsor Information Page"
              >
                Sponsor Information
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
                href="/2021/speakers/speakergrid"
              >
                Speakers
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link tabIndex="0" href="/2021/notable-companies">
                Notable Companies
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link tabIndex="0" href="/2021/hacktober">
                Hacktober
              </Nav.Link>
            </Nav.Item>

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
              <NavDropdown.Item tabIndex="0" href="/pastconferences/album">
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
