import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <>
         <Navbar bg="dark" expand="lg">
            <Container>
               <Navbar.Brand href="/home" className="text-white">Alpha Medical</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                     <Nav.Link className="text-white" as={Link} to="/about">About Us</Nav.Link>
                     <Nav.Link className="text-white" as={Link} to="/services">Services</Nav.Link>
                     <Nav.Link className="text-white" as={Link} to="/doctor">Doctor</Nav.Link>
                     <Nav.Link className="text-white" as={Link} to="/contact">Contact Us</Nav.Link>
                     <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;