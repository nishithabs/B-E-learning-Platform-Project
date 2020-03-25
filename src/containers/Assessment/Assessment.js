import React from 'react';
import styles from './Assessment.module.css';
import routes from '../../constants/routes';
import {Link} from 'react-router-dom';
import content from './Content';
import Button from '../../components/Button'

const Assessment = () => {
    return(
        <div className={styles.assessmentContainer}>
            <div className={styles.top}>
                <p>Background image</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bFirst}>
                    <div className={styles.dummy}>
                        <div className={styles.contactUsBtn}>
                            <Link>Dummy</Link>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h1>Maturity Assessment</h1>
                    </div>
                    <div className={styles.contactUsBtn}>
                        <Button>
                            <Link to={routes.CONTACT_US}>Contact Us</Link>
                        </Button>
                    </div>
                </div>
                <div className={styles.bSecond}>
                    <h1>Why Assessment?</h1>
                    <p>{content.placeholder}</p>
                </div>
                <div className={styles.bThird}>
                    <h1> What are the different types of assessment?</h1>
                    <div>
                        <h2>Leadership assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                    <div>
                        <h2>Organization assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                    <div>
                        <h2>Porfolio assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                    <div>
                        <h2>Program assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                    <div>
                        <h2>Team assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                    <div>
                        <h2>Individual assessment:</h2>
                        <p>{content.placeholder}</p>
                    </div>
                </div>

                <div className={styles.bFourth}>
                    <div className={styles.contactUsBtn}>
                        <Button>
                            <Link to={routes.CONTACT_US}> Contact Us</Link>
                        </Button>
                    </div>

                </div>

            </div>
        </div>
        

    );
}

export default Assessment;