import React, { Component } from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';


class Navigation extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        return (
    <div className={bootstrap}>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/notable-companies">Notable Companies</Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item  href="/about">About</NavDropdown.Item>
            <NavDropdown.Item  href="/venue">Venue</NavDropdown.Item>
            <Nav.Link href="/sponsorship">Sponsorship</Nav.Link>
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
{/*       <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      /> */}
    </div>
    );
    }

  }
export default Navigation;