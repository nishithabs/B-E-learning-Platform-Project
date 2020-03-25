import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section>
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
          <Button>Submit</Button>
        </span>
      </form>
    </section>
  )
};

export default ContactUs;
