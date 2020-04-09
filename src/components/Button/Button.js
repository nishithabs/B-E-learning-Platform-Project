import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ children, type = 'button' }) => {
  return (
    <button
      className={styles.button}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // The content of this button to be rendered
  children: PropTypes.any,
  // The type of this button (reset || submit)
  type: PropTypes.string,
};

export default Button;