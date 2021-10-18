import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
   return (
      <div className="bg-dark text-white py-5">
         <Container fluid >
            <Row>
               <Col md={4}>
                  <div><h1>Alpha Medical</h1></div>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam repudiandae itaque earum, corporis voluptas.</span>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Footer;