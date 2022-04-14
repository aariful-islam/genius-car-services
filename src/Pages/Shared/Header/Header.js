import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../images/logo.png'

const Header = () => {

  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
              <Nav.Link className="text-lg" as={Link} to='/booking'>Booking</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              
            </Nav>
            
            {
              user
              ?
              <button onClick={logout}>logout</button>
              :

              <Nav>
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              
            </Nav>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
