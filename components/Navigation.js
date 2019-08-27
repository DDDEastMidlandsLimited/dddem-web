import React, { Component } from "react"
import {Nav,Navbar, NavDropdown} from 'react-bootstrap'
import '../theme/bootstrap.css'
import { logEvent } from '../utils/analytics'

class Navigation extends Component {
    state = {
        isOpen: false
    }
  
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return <div>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/notable-companies">Notable Companies</Nav.Link>
                    
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item  href="/about">About DDDEM</NavDropdown.Item>
                        <NavDropdown.Item  href="/venue">Venue</NavDropdown.Item>
                        <NavDropdown.Item href="/accessibility">Accessibility</NavDropdown.Item>
                        <NavDropdown.Item href="/information/speaker-information">Speaker Information</NavDropdown.Item>
                        <NavDropdown.Item href="/information/sponsor-information">Sponsor Information</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/speakers">Speakers</Nav.Link>

                    <Nav.Link target="_blank" href="https://sessionize.com/dddeastmidlands/" onSelect={event => {
                        logEvent("navigation", "cfp")
                    }}>CFP</Nav.Link>
                    
                    <Nav.Link target="_blank" href="https://medium.com/dddeastmidlands" onSelect={event => {
                        logEvent("navigation", "blog")
                    }}>Blog</Nav.Link>

                    <Nav.Link target="_blank" href="https://www.eventbrite.co.uk/e/ddd-east-midlands-tickets-58629047058" onSelect={event => {
                        logEvent("navigation", "eventbrite")
                    }}>Tickets</Nav.Link>

                    <Nav.Link href="/code-of-conduct">Code of Conduct</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}

export default Navigation