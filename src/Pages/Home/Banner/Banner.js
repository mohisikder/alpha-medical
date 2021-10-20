import React from 'react';
import './Banner.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
   return (
      <>
         <div className="hero-bg">
            <Container>
               <Row className="d-flex align-items-center">
                  <Col xm={12} md={6}>
                     <div className="hero-title"> 
                        <h1>Health is Wealth – Keep this treasure Safe</h1>
                        <h5>Health is a state of complete physical, mental and social well being. For a healthy life cycle, a person needs to have a balanced diet and has to regularly exercise</h5>
                        <Link to="/services">
                           <Button className="px-5 my-3">Check our Service</Button>
                        </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
};

export default Banner;