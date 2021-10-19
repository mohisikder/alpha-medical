import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
   const [services, setServices] = useState([])

   useEffect(()=>{
      fetch(`./fakedata.json`)
      .then(res=> res.json())
      .then(data=> setServices(data))
   },[])
   return (
      <>
         <Container className="my-5">
         <h2 className="mt-4 text-center">Our Services</h2>
         <hr className="w-25 m-auto"/>
            <Row xs={1} md={3} className="g-4 mt-4">
               {
                  services.map(service =>(
                     <Col>
                        <Card className="h-100 shadow">
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                           <Card.Title>{service.title}</Card.Title>
                           <Card.Text>
                              {service.description}
                           </Card.Text>
                           <Link to={`/service/${service.id}`}>
                              <Button variant="primary">Know More</Button>
                           </Link>
                        </Card.Body>
                        </Card>
                     </Col>
                  ))
               }
            </Row>
         </Container>
      </>
   );
};

export default Services;