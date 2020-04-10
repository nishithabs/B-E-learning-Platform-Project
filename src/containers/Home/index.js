import React from 'react';

import AboutUsSection from './AboutUsSection';
import GetInspiredSection from './GetInspiredSection';
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
      <GetInspiredSection />
      <StayConnectedSection />
    </>
  )
};

export default Home;
