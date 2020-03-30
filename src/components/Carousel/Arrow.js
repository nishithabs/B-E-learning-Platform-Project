import React from 'react'
import leftArrow from '../../assets/keyboard_arrow_left-black-18dp.svg';
import rightArrow from '../../assets/keyboard_arrow_right-black-18dp.svg';

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        right: `${direction === 'right' ? `25px` : null}`,
        left: `${direction === 'right' ? null : `25px`}`,
        height: 50,
        width: 50,
        justifyContent: 'center',
        background: 'white',
        borderRadius: '50%',
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'transform ease-in 0.1s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        img: {
          transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
          '&:focus': {
            outline: 0,
          }
        },
      }}
    >
      {direction === 'right' ? <img src={rightArrow} alt="right arrow" /> : <img src={leftArrow} alt="left arrow" />}
    </div>
  );
};

export default Arrow;
