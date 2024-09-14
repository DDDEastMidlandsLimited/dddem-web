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

{/*             <Nav.Item>
              <Nav.Link href="/2023/notable-companies">
                Sponsors and Partners
              </Nav.Link>
            </Nav.Item> */}

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
              <NavDropdown.Item
                id="activities"
                tabIndex="0"
                href="/information/event-activities"
                title="Link to Event Activites Page"
              >
                Event Activities
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
