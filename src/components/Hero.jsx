import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id='home' className={styles.hero}>
      {/* <Navbar /> */}
      <div className={styles.hero_text}>
        <h1 className={styles.hero_title}>Mexican Delights Unleashed</h1>
        <p className={styles.hero_desc}>
          Step into the vibrant world of Miguel's and indulge in a culinary
          adventure that will transport your taste buds to the heart of Mexico.
          Our carefully crafted menu showcases an array of mouthwatering dishes
          that celebrate the rich flavors and traditions of Mexican cuisine.
          Come and join us for a culinary journey that will make you shout
          "¡Ole!"
        </p>
        <a href='#reserve'>
          <button className={styles.hero_reserve}>Reserve</button>
        </a>
      </div>
    </section>
  );
};
