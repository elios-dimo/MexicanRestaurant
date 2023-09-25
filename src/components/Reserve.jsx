import React, { useState } from 'react';
import styles from './Reserve.module.css';
import { Footer } from './Footer';

export const Reserve = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    guests: '',
    Date: '',
    Time: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send it to an API, etc.)

    // Clear the form inputs
    setFormData({
      name: '',
      surname: '',
      phone: '',
      guests: '',
      Date: '',
      Time: '',
    });
  };

  return (
    <>
      <section id='reserve' className={styles.reserve}>
        <h2>Reserve</h2>
        <form className={styles.reserve_form} onSubmit={handleSubmit}>
          <div className={styles.fullname}>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                className={styles.name}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='surname'>Surname</label>
              <input
                type='text'
                id='surname'
                className={styles.surname}
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label htmlFor='phone'>Phone</label>
          <input
            type='number'
            id='phone'
            name='phone'
            className={styles.phone}
            value={formData.phone}
            onChange={handleInputChange}
          />
          <label htmlFor='guests'>Guests</label>
          <input
            type='number'
            id='guests'
            className={styles.guests}
            max='1'
            value={formData.guests}
            onChange={handleInputChange}
          />
          <div className={styles.datetime}>
            <div>
              <label htmlFor='Date'>Date</label>
              <input
                type='date'
                id='Date'
                className={styles.date}
                value={formData.Date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='Time'>Time</label>
              <input
                type='time'
                id='Time'
                className={styles.time}
                value={formData.Time}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className={styles.sub_reserve} type='submit'>
            Reserve
          </button>
        </form>
        <Footer />
      </section>
    </>
  );
};
