import React, { useContext } from 'react';
import styles from './PhotoGrid.module.css';
import { FiGrid } from 'react-icons/fi';
import { ListingContext } from '../../context/ListingContext';

const PhotoGrid = ({ onShowAllPhotos, onPhotoClick }) => {
  const { listing } = useContext(ListingContext) || {};
  const photos = listing?.photos || [];

  if (!photos || photos.length < 5) {
    return null;
  }

  // Support both object {url, caption} and plain string photo formats
  const getUrl = (photo) => (typeof photo === 'string' ? photo : photo.url);
  const getAlt = (photo, fallback) => (typeof photo === 'string' ? fallback : photo.caption || fallback);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.mainPhotoWrapper} onClick={() => onPhotoClick?.(0)}>
        <img src={getUrl(photos[0])} alt={getAlt(photos[0], 'Property main view')} className={styles.photo} />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.secondaryGrid}>
        <div className={styles.photoWrapper} onClick={() => onPhotoClick?.(1)}>
          <img src={getUrl(photos[1])} alt={getAlt(photos[1], 'Property view 2')} className={styles.photo} />
          <div className={styles.overlay} />
        </div>
        <div className={`${styles.photoWrapper} ${styles.topRight}`} onClick={() => onPhotoClick?.(2)}>
          <img src={getUrl(photos[2])} alt={getAlt(photos[2], 'Property view 3')} className={styles.photo} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.photoWrapper} onClick={() => onPhotoClick?.(3)}>
          <img src={getUrl(photos[3])} alt={getAlt(photos[3], 'Property view 4')} className={styles.photo} />
          <div className={styles.overlay} />
        </div>
        <div className={`${styles.photoWrapper} ${styles.bottomRight}`} onClick={() => onPhotoClick?.(4)}>
          <img src={getUrl(photos[4])} alt={getAlt(photos[4], 'Property view 5')} className={styles.photo} />
          <div className={styles.overlay} />
        </div>
      </div>

      <button className={styles.showAllBtn} onClick={onShowAllPhotos}>
        <FiGrid className={styles.gridIcon} />
        <span>Show all photos</span>
      </button>
    </div>
  );
};

export default PhotoGrid;
