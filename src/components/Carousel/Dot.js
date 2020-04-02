import React from 'react';

const Dot = ({ active }) => {
  return (
    <span
      style={{
        padding: 10,
        marginRight: 5,
        cursor: 'pointer',
        borderRadius: '50%',
        background: `${active ? 'white' : 'black'}`,
      }}
    />
  )
};

export default Dot;
