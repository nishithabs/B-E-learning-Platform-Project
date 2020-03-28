import React from 'react';

import AboutUsSection from './AboutUsSection';
import OurPartnersSection from './OurPartnersSection';
import OurServicesSection from './OurServicesSection';
import StayConnectedSection from './StayConnectedSection';

const Home = () => {
  return (
    <>
      <OurServicesSection />
      <AboutUsSection />
      <OurPartnersSection />
      <StayConnectedSection />
    </>
  )
};

export default Home;
