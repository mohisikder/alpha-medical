import React from 'react';
import './Contact.css';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

const Contact = () => {
   return (
      <>
         <div className="contact-bg d-flex justify-content-center align-items-center">
            <Container>
               <Row>
                  <Col>
                     <h1>About Alpha Medical</h1>
                  </Col>
               </Row>
            </Container>
         </div>
         <Container className="my-5">
            <h1>Get in Touch</h1>
            <Row>
            <Col md={8} xm={1}>
               <Form>
                  <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridCity">
                        <Form.Control placeholder="Subject here" />
                     </Form.Group>
                  </Row>
                  <Row className="mb-3">
                  <Form.Group>
                     <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}/>
                     </Form.Group>
                  </Row>
                  <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                     <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  </Row>
                  <Row className="mb-3">
                     <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="1234 Main St" />
                     </Form.Group>
                     <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Control placeholder="Apartment, studio, or floor" />
                     </Form.Group>
                  </Row>
                  <Button variant="primary" type="submit">
                     Send
                  </Button>
               </Form>
            </Col>
            <Col md={4}>
               
            </Col>
            </Row>
         </Container>
      </>
   );
};

export default Contact;