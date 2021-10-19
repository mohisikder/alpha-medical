import React from 'react';
import './Service.css';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {
   const {Id} = useParams()
   console.log(useParams);

   return (
      <>
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
         <Container className="my-5">
            <Row>
               <Col>
                  <h1 className="text-center">This from Service {Id}</h1>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Service;