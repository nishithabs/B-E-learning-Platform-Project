import React from 'react';

const Slide = ({ content }) => {
  return (
    <div
      style={{
        height: 400,
        width: '100%',
        backgroundImage: `url('${content}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  )
};

export default Slide;
