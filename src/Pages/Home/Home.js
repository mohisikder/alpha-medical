import React from 'react';
import Banner from './Banner/Banner';
import Doctor from './Doctor/Doctor';
import Services from './Services/Services';

const Home = () => {
   return (
      <>
         <Banner></Banner>
         <Services></Services>
         <Doctor></Doctor>
      </>
   );
};

export default Home;