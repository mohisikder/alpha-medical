import React from 'react';
import './Service.css';
import { useParams } from 'react-router';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';

const Service = () => {
   const {Id} = useParams()

   return (
      <>
         <h1>This from Service {Id}</h1>
         <div className="service-bg">
            <Container>
               <Row className="service-title">
                  <Col md={5}>
                     <h1>About Alpha Medical</h1>
                     <h4>Keeping eastern North Carolina healthy</h4>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
};

export default Service;