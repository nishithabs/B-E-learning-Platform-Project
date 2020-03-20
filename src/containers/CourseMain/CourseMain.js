import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CourseMain.module.css';
import Content from './Content'

const CourseMain = () => {
    return(
        <div className={styles.courseContainer}>

            <div className={styles.topBackground}>
                <p>Background Image</p>
            </div>


            <div className={styles.courseInfo}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <p>Logo</p>
                    </div>
                    
                    <div className={styles.courseTitleOuter}>
                        <div className={styles.courseTitleInner}>
                            <ul>
                                <li>Course title:</li>
                                <li>Start date:</li>
                                <li>Location:</li>
                            </ul>
                        </div>
                        <div className={styles.registerBtn}>
                            <Link>Register</Link>
                         </div>
                    </div>
                   
                </div>


                <div className={styles.middle}>
                    <div className={styles.midLeft}>

                        <div className={styles.midLeftTop}>
                            <h1>About this course</h1>
                            <div className={styles.textBox}>
                                <Content/>
                            </div>
                        </div>

                        <div className={styles.midLeftCenter}>
                            <h1>What you learn?</h1>
                            <div className={styles.textBox}>
                                <Content/>
                            </div>
                        </div>

                        <div className={styles.midLeftBottom}>
                            <h1>Meet the instructor</h1>
                            <div className={styles.instructorInfo}>
                                <div className={styles.firstRow}>
                                    <div className={styles.image}>
                                        <p>Image1</p>
                                    </div>
                                    <Content/>
                                </div>
                                <div className={styles.secondRow}>
                                    <div className={styles.image}>
                                        <p>Image2</p>
                                    </div>
                                    <Content/>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.middleRight}>
                        <div className={styles.midRightTop}>
                            <ul>
                                <li> Course Length:</li>
                                <li> Effort: </li>
                                <li> Price: </li>

                            </ul>
                        </div>

                        <div className={styles.midRightBottom}>
                            <h1>Reviews</h1>
                            <div className={styles.reviews}>
                                <div className={styles.image}>
                                    <p>Image</p>
                                </div>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <div className={styles.image}>
                                    <p>Image</p>
                                </div>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <div className={styles.image}>
                                    <p>Image</p>
                                </div>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>

                            <div className={styles.reviews}>
                                <div className={styles.image}>
                                    <p>Image</p>
                                </div>
                                <div className={styles.textBox}>
                                    <Content/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.bottom}>
                    <div className={styles.registerBtn}>
                        <Link>Register</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CourseMain;