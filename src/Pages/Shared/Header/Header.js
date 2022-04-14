import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'

const Header = () => {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="text-white">
          <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link className="text-lg"  href="home#services">Servicecs</Nav.Link>
              <Nav.Link className="text-lg" href="#experts">Experts</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
