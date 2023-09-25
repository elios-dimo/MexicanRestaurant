import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo2.png';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    if (window.innerWidth <= 1100) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 1100) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <a href='#'>
          <img src={logo} alt='Logo' className={styles.logo} />
        </a>
        <div className={styles.nav_menu}>
          <ul
            className={` ${
              menuOpen ? styles.menu_items_open : styles.nav_menu_items
            }`}
          >
            <a className={styles.nav_list} href='#home'>
              <li className={styles.nav_menu_item}>Home</li>
            </a>
            <a className={styles.nav_list} href='#about'>
              <li className={styles.nav_menu_item}>About</li>
            </a>
            <a className={styles.nav_list} href='#menu'>
              <li className={styles.nav_menu_item}>Menu</li>
            </a>
            <a className={styles.nav_list} href='#contact'>
              <li className={styles.nav_menu_item}>Contact</li>
            </a>
          </ul>
          <GiHamburgerMenu
            className={styles.menu_icon}
            onClick={handleMenuIconClick}
          />
        </div>
      </nav>
    </>
  );
};
