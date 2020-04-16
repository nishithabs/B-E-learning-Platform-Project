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
              url={routes.SAFe}
            >
	    <a href='https://www.scaledagileframework.com/'>Scaled Agile Framework</a>
	   </ServiceTile>

            <ServiceTile
              src={scrumOrgImage}
              url={routes.SCRUM_ORG}
            >
	    <a href='https://www.scrum.org/'>Scrum.org</a>
	   </ServiceTile>
	  
            <ServiceTile
              src={scrumAllianceImage}
              url={routes.SCRUM_ALLIANCE}
            >
            <a href='https://www.scrumalliance.org/'>ScrumAlliance.org</a>
	   </ServiceTile>

</div>

    </section>
  )
};

export default OurPartnersSection;
