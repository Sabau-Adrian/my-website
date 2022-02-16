import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';




const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Container>
                <NavbarBrand href='#home'>Sabau Adrian</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <NavLink href='./Home.js'>Home</NavLink>
                        <NavLink href='#about'>About Me</NavLink>
                        <NavLink href='#resume'>Resume</NavLink>
                        <NavLink href='#contact'>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};


export default NavBar;