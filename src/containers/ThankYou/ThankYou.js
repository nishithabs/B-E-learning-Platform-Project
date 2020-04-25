import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ThankYou.module.css';


const ThankYou = () => {
  return (
	  <section> 
                <div className={styles.thankyouContainer}>
	  <h1>Thank you for your interest in Apex!</h1>
	  </div>
	  </section>
  )
};

export default ThankYou;
