import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeFirebaseApp from '../../firebase/firebase.init';

initializeFirebaseApp()

const Register = () => {
   const auth = getAuth();
   const [user, setUser] = useState({})
   const [error, setError] = useState("")
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   // Register user Account
   const registerNewUser = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          setUser(user)
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
    }
    const handleEmail=(e)=>{
      setEmail(e.target.value)
      console.log(e.target.value)
    }

    const handlePassword=(e)=>{
       if(e.target.value.length<6){
          setError(error)
       }else{
          setPassword(e.target.value)
       }
    }

   return (
      <div className="login-bg">
         <Container>
            <Row className="d-flex justify-content-center">
               <Col md={4}>
                  <h4 className="pt-5 pb-2 text-center">Create an Account</h4>
                  <Form onSubmit={registerNewUser}>
                     <Form.Group className="mb-3">
                        <Form.Control onChange={handleEmail} type="email" id="userEmail" placeholder="Enter email" required/>
                     </Form.Group>
                     <Form.Group className="mb-3">
                        <Form.Control onChange={handlePassword} type="password" id="userPass" placeholder="Password" required/>
                     </Form.Group>
                     <Button type="submit" className="btn btn-lg btn-primary btn-block form-control">Create an Account</Button>
                  </Form>
                  <p className="mt-3">Already have an account? <Link className="text-white" to="/login">Login</Link></p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default Register;