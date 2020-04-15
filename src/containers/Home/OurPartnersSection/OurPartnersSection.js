import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

import ServiceTile from './ServiceTile';
import styles from './OurPartnersSection.module.css';

import safeImage from './SAFe.png'
import scrumOrgImage from './Scrum-org.png'
import scrumAllianceImage from './Scrum-alliance.png'



const OurPartnersSection = () => {
    return (
    <section className={styles.our_partners_section}>
	  <h3>Our Partners</h3>
            <div className={styles.tiles_row}>

            <ServiceTile
              src={safeImage}
	      url={'https://www.scaledagileframework.com/'}
            >
	   </ServiceTile>

            <ServiceTile
              src={scrumOrgImage}
              url={'https://www.scrum.org/'}
            >
	   </ServiceTile>
	  
            <ServiceTile
              src={scrumAllianceImage}
              url={'https://www.scrumalliance.org/'}
            >
	   </ServiceTile>

</div>

    </section>
  )
};

export default OurPartnersSection;
