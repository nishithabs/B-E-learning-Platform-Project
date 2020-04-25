import React from 'react';

import routes from '../../../constants/routes';

import ServiceTile from './ServiceTile';
import styles from './OurServicesSection.module.css';

import maImage from './MaturityAssessment.png'
import trainingImage from './Training.png'
import coachingImage from './Coaching.png'

const OurPartnersSection = () => {
  return (
    <section className={styles.our_services_section}>
      <h3>Our Services</h3>
      <div className={styles.tiles_row}>
        <ServiceTile
          src={maImage}
          title="Maturity Assessment"
          url={routes.ASSESSMENT}
        >
          <p>
            Apex agile experts can perform an Agile Maturity Assessment for your company.&nbsp;&nbsp;
            We thoroughly study your business organization and measure how the software development practices you follow conform to the
          <a
            href="http://agilemanifesto.org/principles.html"
            rel="noopener noreferrer"
            target="_blank"
          >
          &nbsp; Agile Manifesto's 12 Agile Principles
          </a>
            .
          </p> 
          <a href="apex-agility/assessment"><b><i>Learn More</i></b></a>
        </ServiceTile>
        <ServiceTile
          src={trainingImage}
          title="Training"
          url={routes.COURSES}
        >
          <p>
            Apex coursework will thoroughly prepare you for Agile certification.  Having worked side-by-side&nbsp;
            with the three elite certification agencies, we know just what you will need to gain certification&nbsp;
            from the three important certification organizations
          
          <a
            href="http://scaledagile.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; SAFe
          </a>
          , 
          <a
            href="https://www.scrum.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; Scrum.org
          </a>
          , and
          <a
            href="http://scrumalliance.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; Scrum Alliance
          </a> 
          . 
          </p>
          <a href="apex-agility/courses"><b><i>Learn More</i></b></a>
        </ServiceTile>
        <ServiceTile
          src={coachingImage}
          title="Coaching"
          url={routes.COACHING}
        >
          <p>
            Working one on one with your own technology leaders, Apex experts share our&nbsp; decades of Agile expertise, with just the right level of sensitivity and suitability for your business needs. 
          </p>
          <a href="apex-agility/coaching"><b><i>Learn More</i></b></a>
        </ServiceTile>
      </div>
    </section>
  )
};

export default OurPartnersSection;
