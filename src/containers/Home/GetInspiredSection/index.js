import React from 'react';

import Carousel from '../../../components/Carousel';

import styles from './GetInspiredSection.module.css';

const slides = [{
    id: 0,
    images: ['', '', ''],
    reviews: ['It was pretty sweet.', 'Yeah, I agree pretty sweet.', 'Pretty, pretty sweet.'],
    reviewers: ['Devin D.', 'Andras P.', 'Shailesh T.'],
  },
  {
    id: 1,
    images: ['', '', ''],
    reviews: ['It was pretty sweet.', 'Yeah, I agree pretty sweet.', 'Pretty, pretty sweet.'],
    reviewers: ['Devin D.', 'Andras P.', 'Shailesh T.'],
}];

const GetInspiredSection = () => {
  return (
    <section className={styles.get_inspired_section}>
      <h3>Get Inspired</h3>
      <Carousel banner={false} slides={slides} />
    </section>
  )
};

export default GetInspiredSection;
