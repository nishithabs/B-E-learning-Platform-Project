import React from 'react';

import styles from './ServiceTile.module.css';

const ServiceTile = ({ children, src, title, url }) => {

  return (
    <div className={styles.services_tile}>
      <h4>{title}</h4>
      <a href={url} alt="Partners-page">
        <img src={src} alt={title} />
        <p>{children}</p>
      </a>
     
    </div>
  )
};

export default ServiceTile;
