import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

const Slide = ({ slide }) => {
  const { buttonText, href, image, copy } = slide;
  return (
    <div
      style={{
        height: 400,
        width: '100%',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <p
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'azure',
          color: 'rgb(17, 113, 192)',
          width: '25%',
        }}
      >
      {copy}
      </p>
      <span
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
        }}
      >
        <Button>
          <Link to={href}>{buttonText}</Link>
        </Button>
      </span>
    </div>
  )
};

export default Slide;
