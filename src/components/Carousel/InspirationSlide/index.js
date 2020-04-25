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
            height: 150,
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
            fontFamily:"sans-serif",
            fontSize: 16,
            color: "rgb(17, 113, 192)",
          }}
        >
          {review1}
        </blockquote>
        <footer>
        <i 
            style={{
              fontFamily:"sans-serif",
              fontSize: 16,
              color: "rgb(17, 113, 192)",
            }}
          >
              {reviewer1}
          </i>
        </footer>
      </div>
      <div>
        <img
          src={image2}
          alt={reviewer2}
          style={{
            height: 150
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
            fontFamily:"sans-serif",
            fontSize: 16,
            color: "rgb(17, 113, 192)",
          }}
        >
          {review2}
        </blockquote>
        <footer>
        <i 
            style={{
              fontFamily:"sans-serif",
              fontSize: 16,
              color: "rgb(17, 113, 192)",
            }}
          >
              {reviewer2}
          </i>
        </footer>
      </div>
      <div>
        <img
          src={image3}
          alt={reviewer3}
          style={{
            height: 150,
          }}
        />
        <blockquote
          style={{
            margin: '0 10px',
            fontFamily:"sans-serif",
            fontSize: 16,
            color: "rgb(17, 113, 192)",
          }}
        >
          {review3}
        </blockquote>
        <footer>
          <i 
            style={{
              fontFamily:"sans-serif",
              fontSize: 16,
              color: "rgb(17, 113, 192)",
            }}
          >
              {reviewer3}
          </i>
        </footer>
      </div>
    </div>
  )
};

export default InspirationSlide;
