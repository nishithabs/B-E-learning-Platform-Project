import React from 'react';

import styles from './BannerImage.module.css';

const BannerImage = ({ src, alt }) => {
  return (
    <div className={styles.banner_image}>
      <img src={src} alt={alt} />
    </div>
  )
};

export default BannerImage;
