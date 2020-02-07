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
              <Nav.Link href="/information/main-page">
                Information
              </Nav.Link>

              <Nav.Link href="/2020/sponsor">Sponsor 2020</Nav.Link>

              <NavDropdown
                title="Past Events"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  target="_blank"
                  href="https://www.youtube.com/channel/UC5TNH43dpYqmw3ggv9OGIKw"
                  onSelect={event => {
                    logEvent('navigation', 'youtube');
                  }}
                >
                  Videos 2019
                </NavDropdown.Item>
                <NavDropdown.Item href="/2019/album">
                  Photos 2019
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                target="_blank"
                href="https://sessionize.com/dddeastmidlands-2020/"
                onSelect={event => {
                  logEvent('navigation', 'cfp');
                }}
              >
                Apply To Speak
              </Nav.Link>

              <Nav.Link
                target="_blank"
                href="https://blog.dddeastmidlands.com/"
                onSelect={event => {
                  logEvent('navigation', 'blog');
                }}
              >
                Blog
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
