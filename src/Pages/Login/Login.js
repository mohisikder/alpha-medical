import React from 'react';
import './Login.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
   const {loginWithGoogle, user, loginWithEmail} = useFirebase()
   return (
      <div className="login-bg">
         <Container>
            <Row className="d-flex justify-content-center">
               <Col md={4}>
                  <h4 className="pt-5 pb-2">Welcome back! Please sign in {user.displayName}</h4>
                  <Form onSubmit={loginWithEmail}>
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password"  required/>
                     </Form.Group>
                     <Button type="submit" className="btn btn-lg btn-primary btn-block form-control"><span className="me-2"><FontAwesomeIcon icon={faSignInAlt} /></span> Login</Button>
                  </Form>
                  <h6 className="mt-3 text-center">OR</h6>
                  <Button onClick={loginWithGoogle} className="btn btn-lg btn-danger btn-block form-control" ><span className="me-2 fa-1x"><FontAwesomeIcon icon={faGoogle} /></span> Login with Google</Button>
                  <p className="mt-3">Don't have an account? <Link className="text-white" to="/register">Register</Link></p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Login;