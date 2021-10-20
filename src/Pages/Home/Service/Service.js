import React, { useEffect, useState } from 'react';
import './Service.css';
import { useParams } from 'react-router';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
   const {serviceId} = useParams()
   const [serviceDetails, setServiceDetails] = useState([])
   const [singleService, setSingleService] = useState([])

   useEffect(()=>{
      fetch(`/servicedetails.json`)
      .then(res=> res.json())
      .then(data=>setServiceDetails(data.service))
   },[])

   useEffect(()=>{
      const foundService = serviceDetails.find(
         (service)=>(service.id == serviceId))
         setSingleService(foundService);

   },[serviceDetails])

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
            <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
               <Col>
                  <Card className="h-100 shadow">
                  <Card.Img variant="top" className="h-50" src={singleService?.img} />
                  <Card.Body>
                     <Card.Title>{singleService?.title}</Card.Title>
                     <Card.Text>
                        {singleService?.description}
                     </Card.Text>
                  </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   );
};

export default Service;