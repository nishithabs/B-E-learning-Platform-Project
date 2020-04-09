import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  isMessage,
  label,
  name,
  type = "text",
  placeholder,
}) => {
  let component;

  if (isMessage) {
    component = (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          style={{
            lineHeight: 1,
            height: 150,
          }}
        />
      </div>
    );
  } else {
    component = (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }

  return component;
};

Input.propTypes = {
  // This inputs unique identifier
  id: PropTypes.string.isRequired,
  // If true, render large input element
  isMessage: PropTypes.bool,
  // The text to display next to the input
  label: PropTypes.string,
  // The name of this input
  name: PropTypes.string,
  // The type of this input
  type: PropTypes.string,
  // The text to display inside this input
  placeholder: PropTypes.string,
};

export default Input;
