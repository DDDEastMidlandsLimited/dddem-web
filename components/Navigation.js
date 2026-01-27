import React from 'react';
import Link from 'next/link';
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
              <Link href="/">
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>

            <NavDropdown
              tabIndex="0"
              title="Information"
              id="basic-information-nav-dropdown"
            >
              <Link href="/about-the-conference">
                <NavDropdown.Item
                  id="about"
                  tabIndex="0"
                  title="About the conference"
                >
                  About Us
                </NavDropdown.Item>
              </Link>
              <Link href="/information/event-activities">
                <NavDropdown.Item
                  id="activities"
                  tabIndex="0"
                  title="Link to Event Activites Page"
                >
                  Event Activities
                </NavDropdown.Item>
              </Link>
              <Link href="/information/accessibility-information">
                <NavDropdown.Item
                  id="accessibility-information"
                  tabIndex="0"
                  title="Link to Accessibility Information Page"
                >
                  Accessibility
                </NavDropdown.Item>
              </Link>
              <Link href="/information/demographics">
                <NavDropdown.Item
                  id="demographics"
                  tabIndex="0"
                  title="Link to Demographics Page"
                >
                  Demographics
                </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown
              tabIndex="0"
              title="Past Events"
              id="basic-past-event-nav-dropdown"
            >
              <Link href="/pastconferences/pastspeakers/pastspeakergrid">
                <NavDropdown.Item
                  tabIndex="0"
                >
                  Past Speakers
                </NavDropdown.Item>
              </Link>
              <Link href="/pastconferences/album">
                <NavDropdown.Item
                  tabIndex="0"
                >
                  Past Photos
                </NavDropdown.Item>
              </Link>
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
              <Link href="/code-of-conduct">
                <Nav.Link tabIndex="0">
                  Code of Conduct
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
