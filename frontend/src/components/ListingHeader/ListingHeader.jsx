import React, { useContext } from 'react';
import styles from './ListingHeader.module.css';
import { FiShare, FiHeart } from 'react-icons/fi';
import { FaStar, FaMedal } from 'react-icons/fa';
import { ListingContext } from '../../context/ListingContext';

const ListingHeader = () => {
  const listingContext = useContext(ListingContext);
  const listing = listingContext?.listing;
  const title = listing?.title || "Luxury Villa with Private Pool & Ocean View";
  const rating = listing?.rating?.overall || 4.95;
  const reviewsCount = listing?.rating?.totalReviews || 124;
  const isSuperhost = listing?.host?.isSuperhost || true;
  const location = listing?.location?.address || "Candolim, Goa, India";

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>{title}</h1>
      
      <div className={styles.subHeader}>
        <div className={styles.leftInfo}>
          <div className={styles.ratingInfo}>
            <FaStar className={styles.starIcon} />
            <span className={styles.rating}>{rating}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.reviews}>{reviewsCount} reviews</span>
          </div>
          
          {isSuperhost && (
            <>
              <span className={styles.dot}>·</span>
              <div className={styles.superhost}>
                <FaMedal className={styles.medalIcon} />
                <span>Superhost</span>
              </div>
            </>
          )}
          
          <span className={styles.dot}>·</span>
          <span className={styles.location}>{location}</span>
        </div>
        
        <div className={styles.rightActions}>
          <button className={styles.actionBtn}>
            <FiShare className={styles.actionIcon} />
            <span className={styles.actionText}>Share</span>
          </button>
          <button className={styles.actionBtn}>
            <FiHeart className={styles.actionIcon} />
            <span className={styles.actionText}>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
