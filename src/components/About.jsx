import React from 'react';
import styles from './About.module.css';
import img1 from '../assets/about/a1.jpg';
import img2 from '../assets/about/a2.jpg';
import img3 from '../assets/about/a3.jpg';
import img4 from '../assets/about/a4.jpg';

export const About = () => {
  return (
    <>
      <section id='about' className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_photos}>
            <img src={img1} className={styles.about_photos_one} />
            <img src={img2} className={styles.about_photos_two} />
            <img src={img3} className={styles.about_photos_three} />
            <img src={img4} className={styles.about_photos_four} />
          </div>
          <div className={styles.about_text}>
            <h2>Our Story</h2>
            <p>
              It all began with Don Miguel Ramirez, a visionary chef with a
              passion for Mexican cuisine that rivaled the intensity of the
              hottest chili peppers. Don Miguel's journey took him through the
              bustling markets of Mexico City, the fiery kitchens of Puebla, and
              the serene countryside of Oaxaca. Along the way, he mastered the
              art of blending spices, coaxing the most intricate flavors from
              every ingredient, and crafting unforgettable dishes that danced on
              the taste buds. One fateful evening, while serenading the moon
              with his guitar and enjoying a feast with close friends under a
              starlit sky, Don Miguel had an epiphany. He envisioned a place
              where the essence of Mexico would be preserved, where each dish
              would tell a story, and where every guest would feel the warmth of
              his homeland.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
