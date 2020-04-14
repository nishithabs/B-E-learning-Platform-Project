import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ServiceTile.module.css';

const ServiceTile = ({ children, src, title, url }) => {

  return (
    <div className={styles.services_tile}>
      <h4>{title}</h4>
      <img src={src} alt={title} />
      <p>{children}</p>
      <span>
       
      </span>
    </div>
  )
};

export default ServiceTile;
