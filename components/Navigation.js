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
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/information/main-page">
                  Information
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item>
                <Nav.Link href="/2020/hacktober">
                  Hacktoberfest
                </Nav.Link>
              </Nav.Item> */}

              <Nav.Item>
                <Nav.Link href="/2020/notable-companies">
                  Notable Companies
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/2020/sponsor">Sponsor</Nav.Link>
              </Nav.Item>

              {/*               <Nav.Item>
                <Nav.Link
                  target="_blank"
                  href="https://www.eventbrite.co.uk/e/ddd-east-midlands-2020-tickets-95834801471"
                  onSelect={event => {
                    logEvent('navigation', 'eventbrite');
                  }}
                >
                  Tickets
                </Nav.Link>
              </Nav.Item> */}

              <Nav.Item>
                <Nav.Link
                  target="_blank"
                  href="https://blog.dddeastmidlands.com/"
                  onSelect={(event) => {
                    logEvent('navigation', 'blog');
                  }}
                >
                  Blog
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                title="Past Events"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  target="_blank"
                  href="https://www.youtube.com/channel/UC5TNH43dpYqmw3ggv9OGIKw"
                  onSelect={(event) => {
                    logEvent('navigation', 'youtube');
                  }}
                >
                  Videos 2019
                </NavDropdown.Item>
                <NavDropdown.Item href="/2019/album">
                  Photos 2019
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link href="/code-of-conduct">
                  Code of Conduct
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
