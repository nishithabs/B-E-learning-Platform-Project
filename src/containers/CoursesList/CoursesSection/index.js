import React from 'react';

import Course from '../Course';

import styles from './CoursesSection.module.css';

const CoursesSection = ({ sectionCourses, sectionHeader }) => {
  return (
    <>
      <h2>{sectionHeader}</h2>
      <section className={styles.courses_section}>
        {
          sectionCourses.map((course) => {
            return (
              <Course
                key={`${sectionHeader}-${course.id}`}
                course={course}
              />
            )
          })
        }
      </section>
    </>
  )
};

export default CoursesSection;
