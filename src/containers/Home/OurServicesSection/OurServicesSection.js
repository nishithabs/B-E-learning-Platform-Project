import React from 'react';

import routes from '../../../constants/routes';

import ServiceTile from './ServiceTile';
import styles from './OurServicesSection.module.css';

const OurPartnersSection = () => {
  return (
    <section className={styles.our_services_section}>
      <h3>Our Services</h3>
      <div className={styles.tiles_row}>
        <ServiceTile
          copy="Lorem ipsum etc"
          src="#"
          title="Assessment"
          url={routes.ASSESSMENT}
        />
        <ServiceTile
          copy="Lorem ipsum etc"
          src="#"
          title="Training"
          url={routes.COURSES}
        />
        <ServiceTile
          copy="Lorem ipsum etc"
          src="#"
          title="Coaching"
          url={routes.COACHING}
        />
      </div>
    </section>
  )
};

export default OurPartnersSection;
