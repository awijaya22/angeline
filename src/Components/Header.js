import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/Header.css'

class Header extends React.Component{
    render(){
            return(
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Angeline</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>Resume</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
    }
}
export default Header