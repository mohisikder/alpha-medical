import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import Aboutbg1 from '../../images/about-02.jpg';
import Aboutbg2 from '../../images/About_OurPassionOurPurpose.jpg';

const About = () => {
   return (
      <>
         <div className="about-bg">
            <Container>
               <Row className="about-text">
                  <Col md={5}>
                     <h1>About Alpha Medical</h1>
                     <h4>Keeping eastern North Carolina healthy</h4>
                  </Col>
               </Row>
            </Container>
         </div>
         <Container className="my-5">
               <h1 className="mb-3">A true partner with patients.</h1>
               <Row>
                  <Col md={8}>
                     <p>What does partnership mean? It means that no matter how you come to know us – whether at one of <strong>Alpha Medical</strong> award-winning hospitals or out in the community – you can count us to listen to you and work with you, so that, together, we can do what it takes to improve your health and well-being.</p>

                     <p>Our award-winning medical facilities are as diverse as their locations – from the flagship academic medical center in metro Greenville to community hospitals in charming small towns. But we’re more than a collection of buildings and team members. We’re neighbors, coworkers, relatives and friends, all living and working in this unique region we call home. Together, we work with the patients and communities we serve to provide a continuum of outstanding care for eastern North Carolina – an area that makes up one-third of the state.</p>
                  </Col>
                  <Col md={4}>
                     <img style={{marginLeft:"15px", height:"70%", width:"100%"}} src={Aboutbg1} alt="" />
                  </Col>
               </Row>
            </Container>
            
            <Container className="my-5">
               <h1 className="my-2">Passion with a Purpose</h1>
               <Row className="d-flex align-items-center">
                  <Col md={6} sm={12}>
                     <img style={{height:"90%", width:"100%"}} src={Aboutbg2} alt="" />
                  </Col>
                  <Col md={6} sm={12}>
                     <h6>We come to work every day in order to help you find solutions for your optimal health and well-being. In the face of a rapidly changing health care landscape – many health care systems lose sight of what’s important. Not Alpha Medical. Even as we grow, we know that progress is about moving forward the right way. That’s why we’ve always been, and always will be, a mission-driven organization. Alpha Medical mission, vision and values continue to lead us to excellence. Because the people we take care of – your neighbors, friends, family and you – deserve the best.</h6>
                  </Col>
               </Row>
            </Container>
      </>
   );
};

export default About;