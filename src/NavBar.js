import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';



const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Container>
                <NavbarBrand href='#home'>Sabau Adrian</NavbarBrand>
                <NavbarToggle aria-controls='responsive-navbar-nav'/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <NavLink href='./Home.js'>Home</NavLink>
                        <NavLink href='#about'>About Me</NavLink>
                        <NavLink href='#resume'>Resume</NavLink>
                        <NavLink href='#contact'>Contact</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
};


export default NavBar;