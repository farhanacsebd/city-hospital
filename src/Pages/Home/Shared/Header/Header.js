import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        // nav bar start 
        <Navbar bg="primary" variant="dark" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} className="fw-bold" to="/home#home">CARE HOSPITAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="text-decoration-none mx-3 text-light fw-bold" as={HashLink} to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light fw-bold" as={HashLink} to="/home#services">Services</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light fw-bold" as={HashLink} to="/home#doctors">Doctors</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light fw-bold" to="/login" to="/about">About Us</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light fw-bold" to="/login">Login</NavLink>

                    </Nav>
                    <Navbar.Text>
                        Signed in as:
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // nav bar end 
    );
};

export default Header;