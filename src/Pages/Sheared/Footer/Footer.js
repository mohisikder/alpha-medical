import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
   return (
      <div className="bg-dark text-white">
         <Container className="py-5">
            <Row>
               <Col md={6}>
                  <h1>Alpha Medical</h1>
                  <p>Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health.</p>
                  <div>
                     <span className="me-4 fa-3x"><FontAwesomeIcon icon={faFacebookSquare} /></span>
                     <span className="me-4 fa-3x"><FontAwesomeIcon icon={faWhatsappSquare} /></span>
                     <span className="me-4 fa-3x"><FontAwesomeIcon icon={faLinkedin} /></span>
                  </div>
               </Col>
               <Col md={3}>
                  <h4>Useful Links</h4>
                  <Nav defaultActiveKey="/" className="flex-column">
                     <Link className="text-white" to="/home">Home</Link>
                     <Link className="text-white" to="/about">About Us</Link>
                     <Link className="text-white" to="/services">Services</Link>
                     <Link className="text-white" to="/doctors">Doctors</Link>
                     <Link className="text-white" to="/contact">Contact Us</Link>
                  </Nav>
               </Col>
               <Col md={3}>
                  <h4>Address</h4>
                  <p>200, D-block, Green lane USA</p>
                  <p>+10 367 467 8934</p>
                  <p>info@alphamedical.com</p>
                  <p>www.alphamedical.com</p>
               </Col>
            </Row>
         </Container>
         <div className="bg-black py-3 mb-0 text-center">
            <span>Copyright &copy; 2021 All rights reserved | This template is made with  by <a href="https://github.com/mohisikder">Mohiuddin Sikder</a></span>
         </div>
      </div>
   );
};

export default Footer;