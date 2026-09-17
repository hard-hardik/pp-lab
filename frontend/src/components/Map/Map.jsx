import React, { useContext } from 'react';
import styles from './Map.module.css';
import { FiHome, FiPlus, FiMinus, FiSearch, FiChevronRight } from 'react-icons/fi';
import { ListingContext } from '../../context/ListingContext';

const Map = () => {
  const listingContext = useContext(ListingContext);
  const location = listingContext?.listing?.location;
  const address = location?.address || "Candolim, Goa, India";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Where you'll be</h2>
      <div className={styles.addressLine}>{address}</div>
      
      <div className={styles.mapWrapper}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.ocean}></div>
          <div className={styles.land}></div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          
          <div className={styles.gridOverlay}></div>

          <button className={styles.searchBtn}>
            <FiSearch size={16} />
          </button>

          <div className={styles.zoomControls}>
            <button className={styles.zoomBtn}><FiPlus size={20} /></button>
            <button className={styles.zoomBtn}><FiMinus size={20} /></button>
          </div>

          <div className={styles.pinContainer}>
            <div className={styles.pinBackground}>
              <FiHome className={styles.pinIcon} size={24} />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.exactLocationText}>
        Exact location will be provided after booking.
      </div>
      
      <div className={styles.highlightsContainer}>
        <h3 className={styles.highlightsTitle}>Neighbourhood highlights</h3>
        <p className={styles.description}>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className={styles.showMoreBtn}>
          Show more <FiChevronRight size={14} className={styles.chevron} />
        </button>
      </div>
      
      <div className={styles.divider}></div>
    </div>
  );
};

export default Map;
