import React, { useEffect } from 'react';
import styles from './AmenitiesModal.module.css';
import { FiX, FiWifi, FiMonitor, FiWind } from 'react-icons/fi';
import { MdKitchen, MdPool, MdLocalParking } from 'react-icons/md';
import { BiCctv } from 'react-icons/bi';
import { TbHanger } from 'react-icons/tb';

const iconMap = {
  wifi: <FiWifi />,
  tv: <FiMonitor />,
  kitchen: <MdKitchen />,
  ac: <FiWind />,
  pool: <MdPool />,
  parking: <MdLocalParking />,
  security: <BiCctv />,
  hangers: <TbHanger />
};

const AmenitiesModal = ({ amenities, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const categories = [...new Set(amenities.map(a => a.category))];

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose}>
            <FiX />
          </button>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>What this place offers</h2>
          
          <div className={styles.amenitiesList}>
            {categories.map(category => (
              <div key={category} className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                {amenities.filter(a => a.category === category).map(amenity => (
                  <div key={amenity.id} className={styles.amenityItem}>
                    <div className={styles.icon}>
                      {iconMap[amenity.id] || <FiWifi />}
                    </div>
                    <div className={`${styles.name} ${!amenity.available ? styles.unavailable : ''}`}>
                      {amenity.name}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
