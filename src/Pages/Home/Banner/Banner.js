import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import SliderOne from '../../../images/slider/slider-01.jpg';
import SliderTwo from '../../../images/slider/slider-02.jpg';

const Banner = () => {
   return (
      <>
         <Carousel className="d-flex justify-content-center">
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={SliderOne}
                  alt="First slide"
               />
               <Carousel.Caption className="text-dark ms-auto">
                  <h3>Health is the first step to prosperity</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={SliderTwo}
                  alt="Second slide"
               />

               <Carousel.Caption className="text-dark ms-auto">
                  <h3>Better health and a better way of life.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   );
};

export default Banner;