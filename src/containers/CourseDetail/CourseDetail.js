import React from 'react';
import { Link } from 'react-router-dom';

import BannerImage from '../../components/BannerImage';
import Button from '../../components/Button';

import routes from '../../constants/routes';

import instructorImg1 from './assets/instructor_1.jpg';

import bannerImage from './assets/bg_course_page.jpg';
import reviewer1 from './assets/reviewer_1.jpg';
import reviewer2 from './assets/reviewer_2.jpg';
import reviewer3 from './assets/reviewer_3.jpg';
import reviewer4 from './assets/reviewer_4.jpg';

import styles from './CourseDetail.module.css';

const CourseDetail = ({ location }) => {
  const { course } = location;
  const {
      aboutThisCourse,
      cost,
      courseLocation,
      date,
      effortDuration,
      img,
      meetTheInstructors,
      reviews,
      title,
      whatYouLearn,
  } = course;

  return(
    <>
      {console.log('course', course)}
      <BannerImage src={bannerImage} alt='Course Detail page banner image' />
        <div className={styles.courseContainer}>
          <div className={styles.courseInfo}>
            <div className={styles.top}>
            <div className={styles.logo}>
            <img src={img} alt={title}/>
            </div>

            <div className={styles.courseTitleOuter}>
              <div className={styles.courseTitleInner}>
                <ul>
                  <li>Course title: {title}</li>
                  <li>Start date: {date}</li>
                  <li>Location: {courseLocation}</li>
                </ul>
              </div>
              <div className={styles.registerBtn}>
                <Button>
                  <Link
                    to={routes.REGISTER}
                  >
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </div>


          <div className={styles.middle}>
            <div className={styles.midLeft}>
              <div className={styles.midLeftTop}>
                <h1>About this course</h1>
                <div className={styles.textBox}>
                    {aboutThisCourse}
                </div>
              </div>

              <div className={styles.midLeftCenter}>
                <h1>What you learn?</h1>
                  <div className={styles.textBox}>
                    <div dangerouslySetInnerHTML={whatYouLearn} />
                  </div>
              </div>

              <div className={styles.midLeftBottom}>
                <h1>Meet the instructor</h1>
                  <div className={styles.instructorInfo}>
                    <div className={styles.firstRow}>
                      <img src={instructorImg1} alt="instructor-1" />
                        {meetTheInstructors.instructorName}
                        <br />
                        <br />
                        {meetTheInstructors.instructorBio}
                    </div>
                  </div>
              </div>
            </div>

            <div className={styles.middleRight}>
              <div className={styles.midRightTop}>
                <ul>
                  <li>Course Length: {effortDuration}</li>
                  <li>Effort: {effortDuration}</li>
                  <li>Price: {cost}</li>
                </ul>
              </div>

              <div className={styles.midRightBottom}>
                <h1>Reviews</h1>
                  <div className={styles.reviews}>
                    <img src={reviewer1} alt="first-reviewer"/>
                    <div className={styles.textBox}>
                      {reviews[0]}
                    </div>
                  </div>

                  <div className={styles.reviews}>
                    <img src={reviewer2} alt="second-reviewer"/>
                    <div className={styles.textBox}>
                        {reviews[1]}
                    </div>
                  </div>

                  <div className={styles.reviews}>
                    <img src={reviewer3} alt="third-reviewer"/>
                    <div className={styles.textBox}>
                        {reviews[2]}
                    </div>
                  </div>

                  <div className={styles.reviews}>
                    <img src={reviewer4} alt="fourth-reviewer"/>
                    <div className={styles.textBox}>
                        {reviews[3]}
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.registerBtn}>
              <Button>
                <Link
                  to={routes.REGISTER}
                >
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
