import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FaAirbnb } from 'react-icons/fa';
import { FiSearch, FiGlobe, FiMenu } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <FaAirbnb className={styles.logoIcon} />
          <span className={styles.logoText}>airbnb</span>
        </div>
        
        <div className={styles.searchBar}>
          <button className={styles.searchBtn}>Anywhere</button>
          <span className={styles.divider}></span>
          <button className={styles.searchBtn}>Any week</button>
          <span className={styles.divider}></span>
          <button className={`${styles.searchBtn} ${styles.addGuests}`}>Add guests</button>
          <div className={styles.searchIconWrapper}>
            <FiSearch className={styles.searchIcon} />
          </div>
        </div>

        <div className={styles.rightNav}>
          <button className={styles.hostLink}>Airbnb your home</button>
          <button className={styles.globeBtn}>
            <FiGlobe className={styles.globeIcon} />
          </button>
          <button className={styles.profileMenu}>
            <FiMenu className={styles.menuIcon} />
            <IoPersonCircle className={styles.avatarIcon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
