import React, { useContext } from 'react';
import styles from './HostInfo.module.css';
import { FiKey, FiMapPin } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';
import { ListingContext } from '../../context/ListingContext';

const HostInfo = () => {
  const listingContext = useContext(ListingContext);
  const listing = listingContext?.listing;
  const host = listing?.host || {
    name: 'Jeremie and Chloe',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100'
  };
  const details = listing?.details || {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1
  };

  return (
    <div className={styles.container}>
      <div className={styles.hostHeader}>
        <div className={styles.hostText}>
          <h2 className={styles.title}>Entire serviced apartment hosted by {host.name}</h2>
          <div className={styles.capacity}>
            <span>{details.guests} guests</span>
            <span className={styles.dot}>·</span>
            <span>{details.bedrooms} bedroom{details.bedrooms !== 1 ? 's' : ''}</span>
            <span className={styles.dot}>·</span>
            <span>{details.beds} bed{details.beds !== 1 ? 's' : ''}</span>
            <span className={styles.dot}>·</span>
            <span>{details.bathrooms} bath{details.bathrooms !== 1 ? 's' : ''}</span>
          </div>
        </div>
        <div className={styles.avatarContainer}>
          <img src={host.avatar} alt={host.name} className={styles.avatar} />
        </div>
      </div>
      
      <div className={styles.divider}></div>

      <div className={styles.highlights}>
        <div className={styles.highlightItem}>
          <FiKey className={styles.highlightIcon} />
          <div className={styles.highlightText}>
            <div className={styles.highlightTitle}>Self check-in</div>
            <div className={styles.highlightDesc}>Check yourself in with the lockbox.</div>
          </div>
        </div>
        
        <div className={styles.highlightItem}>
          <FaMedal className={styles.highlightIcon} />
          <div className={styles.highlightText}>
            <div className={styles.highlightTitle}>{host.name} is a Superhost</div>
            <div className={styles.highlightDesc}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
          </div>
        </div>
        
        <div className={styles.highlightItem}>
          <FiMapPin className={styles.highlightIcon} />
          <div className={styles.highlightText}>
            <div className={styles.highlightTitle}>Great location</div>
            <div className={styles.highlightDesc}>95% of recent guests gave the location a 5-star rating.</div>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
    </div>
  );
};

export default HostInfo;
