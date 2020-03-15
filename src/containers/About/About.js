import React from "react";

import styles from './About.module.css';

const About = () => {
    return (
        <section>
            <div>
                <h1>About Us</h1>
                <div>
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
                    </p>
                    <div>
                        <ul>
                            <li>
                                Devin Dumais, Andras Palfi, and Shales Tamrakar are Apex’s three lead development consultants.
                            </li>
                            <li>
                                Keith Gutfreund leads Apex’s Product Owner and Content Writer teams.  Keith studied
                                Electrical and Computer Engineering and has been a hardware and software developer for over
                                4 decades.
                            </li>
                            <li>Po-Han (John) Huang and Daniela lead Apex’s Quality certification team.</li>
                            <li>Mingyang Zu is lead consultant for Apex’s Business Analayst certification team.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>What We Do</h3>
                    <p>
                        Apex can help you succeed in three ways:
                        <ul>
                            <li>Training & Certification</li>
                            <li> Coaching</li>
                            <li> Assessment</li>
                        </ul>
                        Training & Certification
                    </p>

                </div>
            </div>

        </section>
    )
};

export default About;