import React from 'react';

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
          <a href={routes.ABOUT}>About Us</a>
          <a href={routes.CONTACT_US}>Contact Us</a>
          <a href={routes.BECOME_A_TRAINER}>Become a Trainer</a>
          <a href={routes.TERMS_AND_CONDITIONS}>Terms and Conditions</a>
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
