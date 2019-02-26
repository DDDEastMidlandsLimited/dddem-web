import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
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