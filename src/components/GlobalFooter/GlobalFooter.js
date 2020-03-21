import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import styles from './GlobalFooter.module.css';

const copyright = new Date().getFullYear();

const GlobalFooter = () => {
  return (
    <footer className={styles.footerOuter}>
      <div className={styles.footerInner}>
        <div className={styles.logo}>
          Logo
        </div>
        <div className={styles.links}>
          <h3>Related Links</h3>
          <Link to={routes.ABOUT}>About Us</Link>
          <Link to={routes.CONTACT_US}>Contact Us</Link>
          <Link to={routes.BECOME_A_TRAINER}>Become a Trainer</Link>
          <Link to={routes.TERMS_AND_CONDITIONS}>Terms and Conditions</Link>
          <span>Apex Agility &copy; {copyright}</span>
        </div>
        <div className={styles.social}>
          <h3>Follow Us</h3>
        </div>
      </div>
    </footer>
  )
};

export default GlobalFooter;