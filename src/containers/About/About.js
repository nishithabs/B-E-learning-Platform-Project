import React from "react";

import BannerImage from '../../components/BannerImage';

import styles from './About.module.css';
import bannerImage from '../../assets/about_banner.png'

const About = () => {
    return (
        <>
            <BannerImage src={bannerImage} alt="About Us Banner" />
            <section>
                <div className={styles.aboutContainer}>
                    <div className={styles.top}>
                        <h1>About Us</h1>
                    </div>
                    <div className={styles.contentBox}>
                        <h3>Who We Are</h3>
                        <p>
                            Apex is a boutique consulting firm with decades of software development experience.  We grew up in the
                            era of structured design methodologies, adapted our learnings to the rapid development approaches, and
                            graduated to Agile.
                            <br/>
                            <br/>
                            Partnering with many of the original Agile founders, we worked hand-in-hand with them to implement Agile
                            software development practices at companies like IBM, Lotus and Verizon.
                            Raj Heda, President and CEO of Apex, is a leading author, teacher and world-renowned industry
                            consultant.  All our internal experts are master’s degree students at Boston University’s Metropolitan
                            College.
                            <ul>
                                <li>
                                    Devin Dumais, Andras Palfi, and Shailesh Tamrakar are Apex’s three lead development consultants.
                                </li>
                                <li>
                                    Keith Gutfreund leads Apex’s Product Owner and Content Writer teams.  Keith studied
                                    Electrical and Computer Engineering and has been a hardware and software developer for over
                                    4 decades.
                                </li>
                                <li>Po-Han (John) Huang and Daniela lead Apex’s Quality certification team.</li>
                                <li>Mingyang Zu is lead consultant for Apex’s Business Analayst certification team.</li>
                            </ul>
                        </p>
                        <h3>What We Do</h3>
                        <p>
                            Apex can help you succeed in three ways:
                            <ul>
                                <li>Training & Certification: our 1-2 day training courses are specifically designed to
                                    prepare you for the Agile certification exams from SAFe, Scrum.org, and Scrum Alliance.
                                    You can train with confidence due to our Apex guarantee: if you do not succeed in
                                    passing the certification, you may re-enroll in the training at no additional cost.</li>
                                <li> Coaching: Apex offers customized coaching from our expert staff.  We can coach your
                                    team, your executives, and your organization.   Please contact us for more details.</li>
                                <li> Assessment: Apex uniquely offers a suite of detailed assessments to determine your
                                    specific organization’s capabilities and needs.  See our different assessment offerings
                                    here (click link to Assessment page) for more details.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;
