import React from 'react';

const SliderContent = ({
  children,
  translate,
  transition,
  width
}) => {
  return (
    <div
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: '100%',
        width: `${width}px`,
        display: 'flex',
      }}
    >
      {children}
    </div>
  )
};

export default SliderContent;
