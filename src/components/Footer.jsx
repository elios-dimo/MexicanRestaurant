import React from 'react';
import styles from './Footer.module.css';
import { HiOutlineLocationMarker } from '@react-icons/all-files/hi/HiOutlineLocationMarker';
import { BiPhone } from '@react-icons/all-files/bi/BiPhone';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import logo from '../assets/logo2.png';

export const Footer = () => {
  return (
    <section id='contact' className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.contacts}>
          <h3 className={styles.cont}>Contacts</h3>
          <div className={`${styles.adress} ${styles.flex}`}>
            <HiOutlineLocationMarker />
            <p>5 Rue Dalou, 75015 Paris</p>
          </div>
          <div className={`${styles.number} ${styles.flex}`}>
            <BiPhone />
            <p>+33 156 78 89 56</p>
          </div>
          <div className={`${styles.mail} ${styles.flex}`}>
            <AiOutlineMail />
            <p>miguels@gmail.com</p>
          </div>
        </div>
        <img className={styles.logo} src={logo} alt='Restaurant Logo' />
        <div className={styles.work}>
          <h3 className={styles.hours}>Working Hours</h3>
          <p className={styles.days}>Monday - Friday: 12.00am - 12.00pm</p>
          <p className={styles.days}>Saturday: 12.00am - 12.00pm</p>
          <p className={styles.days}>Sunday: 8.00am - 8.00pm</p>
        </div>
      </div>
    </section>
  );
};
