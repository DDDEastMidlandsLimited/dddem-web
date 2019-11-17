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
              <Nav.Link href="/information/about">
                Information
              </Nav.Link>

              <Nav.Link href="/2020/sponsor">Sponsor 2020</Nav.Link>

              <NavDropdown title="Past Talks" id="basic-nav-dropdown">
                <NavDropdown.Item href="/2019/speakers">
                  2019
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                target="_blank"
                href="https://blog.dddeastmidlands.com/"
                onSelect={event => {
                  logEvent('navigation', 'blog');
                }}
              >
                Blog
              </Nav.Link>

              {/* <Nav.Link
                target="_blank"
                href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058"
                onSelect={event => {
                  logEvent('navigation', 'eventbrite');
                }}
              >
                Tickets
              </Nav.Link> */}

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
