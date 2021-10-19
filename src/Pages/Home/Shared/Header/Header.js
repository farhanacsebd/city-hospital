import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // nav bar start 
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Hot-Line</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="text-decoration-none mx-3 text-light" to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light" to="/home#services">Services</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light" to="/home#doctors">Doctors</NavLink>
                        <NavLink className="text-decoration-none mx-3 text-light" to="/about">About Us</NavLink>

                    </Nav>
                    <Button className="mx-1" variant="btn btn-danger fw-bold">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // nav bar end 
    );
};

export default Header;