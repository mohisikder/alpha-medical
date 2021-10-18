import React from 'react';
import './Login.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div className="login-bg">
         <Container>
            <Row className="d-flex justify-content-center">
               <Col md={4}>
                  <h4 className="pt-5 pb-2">Welcome back! Please sign in</h4>
                  <Form >
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Button className="btn btn-lg btn-primary btn-block form-control">Login</Button>
                     <h6 className="mt-3 text-center">OR</h6>
                     <Button className="btn btn-lg btn-danger btn-block form-control" >Login with Google</Button>
                  </Form>
                  <p className="mt-3">Don't have an account? <Link className="text-white" to="/register">Join</Link></p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Login;