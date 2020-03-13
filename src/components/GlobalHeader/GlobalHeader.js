import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import Navigation from './Navigation';
import styles from './GlobalHeader.module.css';

const GlobalHeader = () => {
  return (
    <header className={styles.headerOuter}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          Logo
        </div>
        <button
          className={styles.button}
          type='button'
        >
          <Link to={routes.COURSES}>View Courses</Link>
        </button>
      </div>
      <Navigation />
    </header>
  )
};

export default GlobalHeader;
