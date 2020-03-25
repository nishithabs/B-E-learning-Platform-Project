import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import Button from '../Button';

import Navigation from './Navigation';
import styles from './GlobalHeader.module.css';

const GlobalHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Logo
      </div>
      <Navigation />
      <Button>
        <Link to={routes.COURSES}>View Course</Link>
      </Button>
    </header>
  )
};

export default GlobalHeader;
