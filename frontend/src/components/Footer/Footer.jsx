import React from 'react';
import styles from './Footer.module.css';
import { FiGlobe } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Support</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">AirCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighborhood concern</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.heading}>Hosting</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Airbnb your home</a></li>
              <li><a href="#">AirCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.heading}>Airbnb</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Gift cards</a></li>
              <li><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomLeft}>
            <span>© 2024 Airbnb, Inc.</span>
            <span className={styles.dot}>·</span>
            <a href="#">Privacy</a>
            <span className={styles.dot}>·</span>
            <a href="#">Terms</a>
            <span className={styles.dot}>·</span>
            <a href="#">Sitemap</a>
            <span className={styles.dot}>·</span>
            <a href="#">Company details</a>
          </div>
          
          <div className={styles.bottomRight}>
            <div className={styles.localeOptions}>
              <button className={styles.iconBtn}>
                <FiGlobe className={styles.globeIcon} />
                <span>English (IN)</span>
              </button>
              <button className={styles.currencyBtn}>₹ INR</button>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
