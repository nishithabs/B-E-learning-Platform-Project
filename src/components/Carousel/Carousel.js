import React, { useEffect, useReducer } from 'react';

import Arrow from './Arrow';
import InspirationSlide from './InspirationSlide/index';
import Pagination from './Pagination';
import Slide from "./Slide";
import SliderContent from './SliderContent';

import { carouselConstants } from './carouselConstants';
import carouselReducer from './carouselReducer';

import styles from './Carousel.module.css';

const getWidth = () => window.innerWidth;

const Carousel = ({ banner, slides }) => {
  const initialCarouselState = {
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
    length: slides.length,
  };

  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  const { activeSlide, translate, transition } = state;

  const { NEXT, PREV } = carouselConstants;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: NEXT })
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section className={styles.carousel}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {
          banner
            ? (
              slides.map((slide) => (
                <Slide
                  key={slide.id}
                  slide={slide}
                />
              ))
            ) : (
              slides.map((slide) => (
                <InspirationSlide
                  key={slide.id}
                  slide={slide}
                />
              ))
            )
        }
      </SliderContent>

      <Arrow direction="right" handleClick={() => dispatch({ type: NEXT })} />
      <Arrow direction="left" handleClick={() => dispatch({ type: PREV })} />

      <Pagination slides={slides} activeSlide={activeSlide} />
    </section>
  )
};

export default Carousel;
