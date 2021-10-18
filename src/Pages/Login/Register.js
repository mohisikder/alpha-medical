import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Register = () => {
   const {registerNewUser} = useFirebase()
   return (
      <div className="login-bg">
         <Container>
            <Row className="d-flex justify-content-center">
               <Col md={4}>
                  <h4 className="pt-5 pb-2 text-center">Create an Account</h4>
                  <Form>
                     <Form.Group className="mb-3">
                        <Form.Control type="email" id="userEmail" placeholder="Enter email" />
                     </Form.Group>
                     <Form.Group className="mb-3">
                        <Form.Control type="password" id="userPass" placeholder="Password" />
                     </Form.Group>
                     <Button onClick={registerNewUser} className="btn btn-lg btn-primary btn-block form-control">Create an Account</Button>
                  </Form>
                  <p className="mt-3">Already have an account? <Link className="text-white" to="/login">Login</Link></p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Register;