import React from 'react';

const Course = ({ course }) => {
  const {
    certifyingBody,
    role,
    title,
    type,
  } = course;

  return (
    <div>
      <span>Title: {title}</span>
      <br />
      <span>Type: {type}</span>
      <br />
      <span>Certifying Body: {certifyingBody}</span>
      <br />
      <span>Role: {role}</span>
      <br />
    </div>
  )
};

export default Course;
