import React from 'react';

import Course from '../Course';

import styles from './CoursesSection.module.css';

const CoursesSection = ({ sectionCourses, sectionHeader }) => {
  return (
    <section
      className={styles.courses_section}
      id={sectionHeader}
    >
      <h2>{sectionHeader}</h2>
      <div>
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
      </div>
    </section>
  )
};

export default CoursesSection;
