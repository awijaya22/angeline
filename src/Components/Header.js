import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/Header.css'

class Header extends React.Component{
    render(){
            return(
                <Navbar bg="dark" variant={'dark'} expand={'lg'}>
                    <Navbar.Brand >Angeline 黃千儀</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href={'/'}>Home</Nav.Link>
                            <Nav.Link href={'/about'}>About</Nav.Link>
                            <Nav.Link href={'/resume'}>Resume</Nav.Link>
                            <Nav.Link href={'/contact'}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
    }
}
export default Header