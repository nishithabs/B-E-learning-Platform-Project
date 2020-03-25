import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.ASSESSMENT}>Assessment</Link>
        </li>
        <li className={styles.dropdown}>
          <div className={styles.dropdownElement}>Training</div>
          <div className={styles.dropdownContent}>
            <Link to={'#'}>Public</Link>
            <Link to={'#'}>Corporate</Link>
            <Link to={routes.COURSES}>Upcoming Courses</Link>
          </div>
        </li>
        <li>
          <Link to={routes.COACHING}>Coaching</Link>
        </li>
        <li>
          <Link to={routes.RESOURCES}>Resources</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
