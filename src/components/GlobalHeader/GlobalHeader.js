import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

import Button from '../Button';

import Navigation from './Navigation';
import styles from './GlobalHeader.module.css';

import facebook from './facebook.png'
import linkedIn from './linkedin.png'
import twitter from './twitter.png'
import youtube from './youtube.png'
import logo from './logo.png'

const GlobalHeader = () => {
  return (
    <Headroom>
      <header className={styles.header}>
          <div className={styles.logo}>
	  <img src={logo} alt="Logo-icon" />
          <Link to={routes.HOME}>360&#176; Collaboration</Link>
        </div>
        <Navigation />
        <Button>
          <Link to={routes.COURSES}>View Courses</Link>
	 </Button>
      </header>
    </Headroom>
  )    
};

export default GlobalHeader;
