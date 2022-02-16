import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import profileImg from '../src/images/Linkedin.png';



const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Container>
                <NavbarBrand href='#home'><img alt='logo' src={profileImg} width='30' height='30' className="d-inline-block align-top" />{'    '}Sabău Adrian</NavbarBrand>
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