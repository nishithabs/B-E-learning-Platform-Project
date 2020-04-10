import React from 'react';

import styles from './InspirationSlide.module.css';

const InspirationSlide = ({ slide }) => {
  const { images, reviews, reviewers } = slide;
  const [ image1, image2, image3 ] = images;
  const [ review1, review2, review3 ] = reviews;
  const [ reviewer1, reviewer2, reviewer3 ] = reviewers;
  return (
    <div className={styles.inspiration_slide}>
      <div>
        <img
          src={image1}
          alt={reviewer1}
          style={{
            border: '1px solid black',
            height: 150,
            width: 150,
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
          }}
        >
          {review1}
        </blockquote>
        <footer>
          <i>{reviewer1}</i>
        </footer>
      </div>
      <div>
        <img
          src={image2}
          alt={reviewer2}
          style={{
            border: '1px solid black',
            height: 150,
            width: 150,
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
          }}
        >
          {review2}
        </blockquote>
        <footer>
          <i>{reviewer2}</i>
        </footer>
      </div>
      <div>
        <img
          src={image3}
          alt={reviewer3}
          style={{
            border: '1px solid black',
            height: 150,
            width: 150,
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
          }}
        >
          {review3}
        </blockquote>
        <footer>
          <i>{reviewer3}</i>
        </footer>
      </div>
    </div>
  )
};

export default InspirationSlide;
