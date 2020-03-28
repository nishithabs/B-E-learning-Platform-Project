import React from "react";
import styles from './Coaching.module.css'
import routes from "../../constants/routes";
import {Link} from "react-router-dom";
import Button from "../../components/Button";

const Coaching = () => {
    return(
        <div className={styles.coachingContainer}>
            <div className={styles.banner}>
                <p>Background Image</p>
            </div>
            <div className={styles.title}>
                <h1>Coaching</h1>
            </div>
            <div className={styles.contentBox}>
                <h2>Agile Transformation</h2>
                <p>
                    Want to introduce the power of Agile to your organization?  Our coaches can work with your teams to
                    bring them up to speed.  We will define the roles and responsibilities of the various team members
                    and stakeholders, assist with implementing Agile practices including Scrum, Kanban and Lean, and
                    help to position your group into moving ahead on your own.
                </p>
                <h2>DevOps Transformation</h2>
                <p>
                    Combining both software development and operations, an Agile DevOps environment maximizes
                    productivity by coordinating a shared vision.  This enables your organization to cooperate on a
                    common set of tools and practices, from planning to maintenance.
                </p>
                <h2>Tools Assessment and Implementation</h2>
                <p>
                    Agile is a set of principles – there are a plethora of tools available, but which ones are best for
                    your specific needs and goals?  With this coaching session, we help you assess your current toolset
                    and your organization’s strengths and challenges, and we assemble a collection of tools specific to
                    your requirements.
                </p>
                <div className={styles.contactUsBtn}>
                    <Button>
                        <Link to={routes.CONTACT_US}>Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Coaching;