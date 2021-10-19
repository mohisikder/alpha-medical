import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, } from 'react-bootstrap';

const Doctor = () => {
   const [doctors, setDoctors] = useState([])
   useEffect(()=>{
      fetch(`./doctordb.json`)
      .then(res=> res.json())
      .then(data=> setDoctors(data))
   },[])
   return (
      <>
         <Container className="my-5">
            <h2 className="mt-4 text-center">Our Doctors</h2>
            <hr className="w-25 m-auto"/>
            <Row xs={1} md={3} className="g-4 my-5">
               {
                   doctors.slice(0, 6).map(doctor =>(
                     <Col>
                        <Card className="h-100 text-center shadow">
                        <Card.Img variant="top" className="h-50 w-50 m-auto p-3" src={doctor.img} />
                        <Card.Body>
                           <Card.Title>{doctor.name}</Card.Title>
                           <Card.Text>{doctor.degree}</Card.Text>
                           <Card.Text className="text-danger">{doctor.specialty}</Card.Text>
                           <Card.Text>{doctor.workplace}</Card.Text>
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

export default Doctor;