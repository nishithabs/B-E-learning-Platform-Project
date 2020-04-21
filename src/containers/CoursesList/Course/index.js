import React from 'react';
import { Link } from 'react-router-dom'

import routes from '../../../constants/routes';

const Course = ({ course }) => {
  const { id, img, title } = course;

  return (
    <Link
      to={{
        pathname: `${routes.COURSES}/${id}`,
        course: course,
      }}
    >
      <img src={img} alt={title} />
      <span>{title}</span>
    </Link>
  )
};

export default Course;
