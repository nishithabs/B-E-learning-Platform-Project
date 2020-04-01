import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import routes from '../../../constants/routes';

import styles from './StayConnectedSection.module.css';

const StayConnectedSection = () => {
  return (
    <section className={styles.stay_connected_section}>
      <h3>Stay Connected With Us...</h3>
      <span>Receive Information on Upcoming Workshops and Insights</span>
      <form>
        <div className={styles.stay_connected_inputs}>
          <Input
            id="stay-connected-name"
            placeholder="Name"
          />
          <Input
            id="stay-connected-email"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className={styles.stay_connected_permission}>
          <Input
            id="stay-connected-terms-checkbox"
            type="checkbox"
          />
          I am permitting you to email me
        </div>
        <Button
          type="submit"
        >
          <Link to={routes.THANK_YOU}>Sign UP</Link>
        </Button>
      </form>
    </section>
  )
};

export default StayConnectedSection;
