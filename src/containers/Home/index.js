import React from 'react';

import AboutUsSection from './AboutUsSection';
import MainCarousel from './MainCarousel';
import OurPartnersSection from './OurPartnersSection';
import OurServicesSection from './OurServicesSection';
import StayConnectedSection from './StayConnectedSection';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <OurServicesSection />
      <AboutUsSection />
      <OurPartnersSection />
      <StayConnectedSection />
    </>
  )
};

export default Home;
