import React from 'react';
import { Link } from 'react-router-dom';

import bannerImage from '../../assets/register-page-banner.jpg';

import BannerImage from '../../components/BannerImage';
import Button from '../../components/Button';
import Input from '../../components/Input';

import routes from '../../constants/routes';

import styles from './Register.module.css'

const Register = () => {
  const handleFormReset = () => document.getElementById('register-page-form').reset();

  return (
    <>
      <BannerImage src={bannerImage} alt={'Register page banner'} />
      <section className={styles.register_page}>
        <h1>Welcome!</h1>
        <p>Register Below to Create Your Own Account</p>
        <form id="register-page-form">
          Create an Account
          <Input
            id="register-full-name"
            label="Full Name"
          />
          <Input
            id="register-email"
            label="Email ID"
            type="email"
          />
          <Input
            id="register-password"
            label="Password"
            type="password"
          />
          <Input
            id="register-country"
            label="Country"
          />
          <Input
            id="register-mailing-address"
            isMessage
            label="Mailing Address"
          />
          <Input
            id="register-contact-no"
            label="Contact No"
            type="tel"
          />
          <Input
            id="register-payment"
            label="Payment Info"
          />
          <span className={styles.button}>
            <Button
              onClick={handleFormReset}
            >
              Reset
            </Button>
            <Button>
              <Link to={routes.THANK_YOU}>
                Register
              </Link>
            </Button>
          </span>
        </form>
      </section>
    </>
  )
};

export default Register;
