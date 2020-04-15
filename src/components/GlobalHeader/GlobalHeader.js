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
          <Link to={routes.HOME}>
  	    <img src={logo} alt="Logo-icon" />
	    <br/>360&#176; Collaboration
          </Link>
        </div>
        <Navigation />
        <div className={styles.social}>
            <div className={styles.viewCourses}>
                <Button>
                    <Link to={routes.COURSES}>View Courses</Link>
                </Button>
            </div>
            <div className={styles.socialMediaIcons}>
                <a href="https://www.facebook.com">
                    <img src={facebook} alt="Facebook"/>
                </a>
                <a href="https://www.twitter.com">
                    <img src={twitter} alt="Twitter"/>
                </a>
                <a href="https://www.linkedin.com">
                    <img src={linkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://www.youtube.com">
                    <img src={youtube} alt="Youtube"/>
                </a>
            </div>
        </div>

      </header>
    </Headroom>
  )    
};

export default GlobalHeader;
