import React, { useState } from 'react';

import Arrow from './Arrow';
import Pagination from './Pagination';
import Slide from "./Slide";
import SliderContent from './SliderContent';

import styles from './Carousel.module.css';

const Carousel = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { activeIndex, translate, transition } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  };


  return (
    <section className={styles.carousel}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {
          slides.map((slide, index) => (
            <Slide
              key={slide + index}
              content={slide}
            />
          ))
        }
      </SliderContent>

      <Arrow direction="right" handleClick={nextSlide} />
      <Arrow direction="left" handleClick={prevSlide} />

      <Pagination slides={slides} activeIndex={activeIndex} />
    </section>
  )
};

export default Carousel;
