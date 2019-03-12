import React, { Component } from "react";
import {Nav,Navbar, NavDropdown} from 'react-bootstrap';
import '../theme/bootstrap.css';

class Navigation extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        return (
          <div>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/notable-companies">Notable Companies</Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item  href="/about">About</NavDropdown.Item>
            <NavDropdown.Item  href="/venue">Venue</NavDropdown.Item>
            <NavDropdown.Item href="/sponsorship">Sponsorship</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/faq">FAQ</Nav.Link>


          {/* <ExternalLink href="https://sessionize.com/dddeastmidlands/" target="_blank" category="navigation" eventType="cfp">
            CFP
          </ExternalLink>
          <ExternalLink href="https://medium.com/dddeastmidlands" target="_blank" category="navigation" eventType="blog">
            Blog
          </ExternalLink> */}

          <Nav.Link href="/code-of-conduct">Code of Conduct</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            <style jsx>
            {`
          
            `}
            </style>
    </div>
    );
    }

  }
export default Navigation;