import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../theme/bootstrap.css';
import { logEvent } from '../utils/analytics';

class Navigation extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/notable-companies">
                Notable Companies
              </Nav.Link>

              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about/about">
                  About DDDEM
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/venue">
                  Venue
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/accessibility-information">
                  Accessibility Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/application-information">
                  Applying To Speak
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/attendee-information">
                  Attendee Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/speaker-information">
                  Speaker Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/sponsor-information">
                  Sponsor Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/crew-information">
                  Crew Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/ticket-information">
                  Ticket Information
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/agenda">Agenda</Nav.Link>

              <Nav.Link href="/speakers">Speakers</Nav.Link>

              <Nav.Link href="/hacktoberfest">Hacktoberfest</Nav.Link>

              {/*                     <Nav.Link target="_blank" href="https://sessionize.com/dddeastmidlands/" onSelect={event => {
                        logEvent("navigation", "cfp")
                    }}>CFP</Nav.Link> */}

              <Nav.Link
                target="_blank"
                href="https://blog.dddeastmidlands.com/"
                onSelect={event => {
                  logEvent('navigation', 'blog');
                }}
              >
                Blog
              </Nav.Link>

              <Nav.Link
                target="_blank"
                href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058"
                onSelect={event => {
                  logEvent('navigation', 'eventbrite');
                }}
              >
                Tickets
              </Nav.Link>

              <Nav.Link href="/code-of-conduct">
                Code of Conduct
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
