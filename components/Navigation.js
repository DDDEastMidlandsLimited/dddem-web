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
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>

            <NavDropdown
              tabIndex="0"
              title="Information"
              id="basic-information-nav-dropdown"
            >
              <Link
                href="/about-the-conference"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item
                  id="about"
                  tabIndex="0"
                  title="About the conference"
                >
                  About Us
                </NavDropdown.Item>
              </Link>
              <Link
                href="/information/event-activities"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item
                  id="activities"
                  tabIndex="0"
                  title="Link to Event Activites Page"
                >
                  Event Activities
                </NavDropdown.Item>
              </Link>
              <Link
                href="/information/accessibility-information"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item
                  id="accessibility-information"
                  tabIndex="0"
                  title="Link to Accessibility Information Page"
                >
                  Accessibility
                </NavDropdown.Item>
              </Link>
              <Link
                href="/information/supporting-speakers"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item
                  id="supporting-speakers"
                  tabIndex="0"
                  title="Link to Supporting Speakers Page"
                >
                  Supporting Speakers
                </NavDropdown.Item>
              </Link>
              <Link
                href="/information/demographics"
                passHref
                legacyBehavior
              >
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
              <Link
                href="/pastconferences/pastspeakers/pastspeakergrid"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item tabIndex="0">
                  Past Speakers
                </NavDropdown.Item>
              </Link>
              <Link
                href="/pastconferences/album"
                passHref
                legacyBehavior
              >
                <NavDropdown.Item tabIndex="0">
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
              <Link href="/code-of-conduct" passHref legacyBehavior>
                <Nav.Link tabIndex="0">Code of Conduct</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
