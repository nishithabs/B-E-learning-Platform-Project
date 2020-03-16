import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to={routes.ASSESSMENT}>Assessment</Link>
      <div className={styles.dropdown}>
        <div className={styles.dropdownElement}>Training</div>
        <div className={styles.dropdownContent}>
          <Link to={'#'}>Public</Link>
          <Link to={'#'}>Corporate</Link>
          <Link to={routes.COURSES}>Upcoming Courses</Link>
        </div>
      </div>
      <Link to={routes.COACHING}>Coaching</Link>
      <Link to={routes.RESOURCES}>Resources</Link>
    </nav>
  )
};

export default Navigation;
