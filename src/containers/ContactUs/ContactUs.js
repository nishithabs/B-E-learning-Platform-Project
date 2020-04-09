import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import routes from '../../constants/routes';

import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section>
      <h1>Contact Us</h1>
      <form className={styles.contact_us_form}>
        Contact Form
        <Input
          id="contact-us-first-name"
          label="First Name"
        />
        <Input
          id="contact-us-last-name"
          label="Last Name"
        />
        <Input
          id="contact-us-email"
          label="Email"
        />
        <Input
          id="contact_us_message"
          isMessage
          label="Message"
        />
        <span className={styles.button}>
          <Button>
            <Link to={routes.THANK_YOU}>
              Submit
            </Link>
          </Button>
        </span>
      </form>
    </section>
  )
};

export default ContactUs;
