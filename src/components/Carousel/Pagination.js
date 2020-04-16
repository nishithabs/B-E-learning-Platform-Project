import React from 'react';

import Dot from './Dot';

const Pagination = ({ slides, activeSlide }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 25,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {slides.map((slide, index) => (
        <Dot
          key={slide.id}
          active={activeSlide === index}
        />
      ))}
    </div>
  )
};

export default Pagination;
