import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/Header.css'
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
            return(
                <Navbar bg="dark" variant={'dark'} expand={'lg'}>
                    <Navbar.Brand >Angeline 黃千儀</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className='nav-link' to={'/'}>Home</Link>
                            <Link className='nav-link' to={'/about'}>About</Link>
                            <Link className='nav-link' to={'/resume'}>Resume</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
    }
}
export default Header