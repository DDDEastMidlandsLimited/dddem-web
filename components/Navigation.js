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
              <Nav.Link
                tabIndex="0"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.eventbrite.co.uk/e/ddd-east-midlands-2023-tickets-607213841947"
                onSelect={() => {
                  logEvent('navigation', 'eventbrite');
                }}
              >
                Tickets
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/agenda">Agenda</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/2023/notable-companies">
                Sponsors and Partners
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              tabIndex="0"
              title="Information"
              id="basic-information-nav-dropdown"
            >
              <NavDropdown.Item
                id="about"
                tabIndex="0"
                href="/about-the-conference"
                title="About the conference"
              >
                About Us
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                id="covid-precautions"
                tabIndex="0"
                href="/information/covid-precautions"
                title="Link to Covid Precautions Page"
              >
                Covid Precautions
              </NavDropdown.Item> */}
              {/*               <NavDropdown.Item
                id="supporting-speakers"
                tabIndex="0"
                href="/information/supporting-speakers"
                title="Link to Supporting Speakers Page"
              >
                Supporting Speakers
              </NavDropdown.Item> */}
              <NavDropdown.Item
                id="activities"
                tabIndex="0"
                href="/information/event-activities"
                title="Link to Event Activites Page"
              >
                Event Activities
              </NavDropdown.Item>
              <NavDropdown.Item
                id="hacktober"
                tabIndex="0"
                href="/2023/hacktober"
                title="Link to Hacktoberfest Page"
              >
                HacktoberFest
              </NavDropdown.Item>
              <NavDropdown.Item
                id="accessibility-information"
                tabIndex="0"
                href="/information/accessibility-information"
                title="Link to Accessibility Information Page"
              >
                Accessibility
              </NavDropdown.Item>
              <NavDropdown.Item
                id="demographics"
                tabIndex="0"
                href="/information/demographics"
                title="Link to Demographics Page"
              >
                Demographics
              </NavDropdown.Item>
              <NavDropdown.Item
                id="ticket-information"
                tabIndex="0"
                href="/information/ticket-information"
                title="Link to Ticket Information Page"
              >
                Tickets
              </NavDropdown.Item>
              <NavDropdown.Item
                id="venue-information"
                tabIndex="0"
                href="/information/venue-information"
                title="Link to Venue Information Page"
              >
                Venue
              </NavDropdown.Item>
            </NavDropdown>

            {/*             <NavDropdown
              tabIndex="0"
              title="Sponsor"
              id="basic-sponsor-nav-dropdown"
            >
              <NavDropdown.Item
                id="about-sponsorship"
                tabIndex="0"
                href="/sponsor/sponsor-the-event"
                title="Link to Sponsorship Page"
              >
                Sponsor the event
              </NavDropdown.Item>
              <NavDropdown.Item
                id="about-sponsorship-tiers"
                tabIndex="0"
                href="/sponsor/sponsorship-tiers"
                title="Link to Sponsorship Tiers Page"
              >
                Sponsorship Tiers
              </NavDropdown.Item>
              <NavDropdown.Item
                id="why-sponsor"
                tabIndex="0"
                href="/sponsor/why-sponsor"
                title="Link to Why Sponsor Page"
              >
                Why Sponsor?
              </NavDropdown.Item>
              <NavDropdown.Item
                id="social-responsibility"
                tabIndex="0"
                href="/sponsor/social-responsibility"
                title="Link to Social Responsibility Page"
              >
                Social Responsibility
              </NavDropdown.Item>
              <NavDropdown.Item
                id="about-the-conference-crew"
                tabIndex="0"
                href="/sponsor/testimonials"
                title="Link to Testimonials Page"
              >
                Testimonials
              </NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown
              tabIndex="0"
              title="Guides"
              id="basic-guide-nav-dropdown"
            >
              <NavDropdown.Item
                id="guide-for-sponsor"
                tabIndex="0"
                href="/guides/sponsors"
                title="Link to Sponsorship Guide"
              >
                For Sponsors
              </NavDropdown.Item>
              <NavDropdown.Item
                id="guide-for-speakers"
                tabIndex="0"
                href="/guides/speakers"
                title="Link to Speakers Guide"
              >
                For Speakers
              </NavDropdown.Item>
              <NavDropdown.Item
                id="guide-for-crew"
                tabIndex="0"
                href="/guides/crew"
                title="Link to Crew Guide"
              >
                For Crew Members
              </NavDropdown.Item>
            </NavDropdown>

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
