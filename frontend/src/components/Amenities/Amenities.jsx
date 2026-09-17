import React, { useState, useContext } from 'react';
import styles from './Amenities.module.css';
import { FiWifi, FiMonitor, FiWind } from 'react-icons/fi';
import { MdKitchen, MdPool, MdLocalParking } from 'react-icons/md';
import { BiCctv } from 'react-icons/bi';
import { TbHanger } from 'react-icons/tb';
import AmenitiesModal from './AmenitiesModal';
import { ListingContext } from '../../context/ListingContext';

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

const defaultAmenities = [
  { id: 'wifi', name: 'Fast wifi', available: true, category: 'Internet and office' },
  { id: 'kitchen', name: 'Kitchen', available: true, category: 'Home safety' },
  { id: 'pool', name: 'Private pool', available: true, category: 'Outdoor' },
  { id: 'ac', name: 'Air conditioning', available: true, category: 'Heating and cooling' },
  { id: 'parking', name: 'Free parking on premises', available: true, category: 'Parking and facilities' },
  { id: 'tv', name: 'TV', available: true, category: 'Entertainment' },
  { id: 'security', name: 'Security cameras on property', available: false, category: 'Home safety' },
  { id: 'hangers', name: 'Hangers', available: true, category: 'Bedroom and laundry' }
];

const Amenities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const listingContext = useContext(ListingContext);
  const amenities = listingContext?.listing?.amenities || defaultAmenities;
  
  const displayAmenities = amenities.slice(0, 10);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What this place offers</h2>
      
      <div className={styles.grid}>
        {displayAmenities.map((amenity, index) => (
          <div 
            key={amenity.id || amenity.name || index} 
            className={`${styles.amenityItem} ${!amenity.available ? styles.unavailable : ''}`}
          >
            <div className={styles.icon}>
              {iconMap[amenity.id] || <FiWifi />}
            </div>
            <span className={styles.name}>{amenity.name}</span>
          </div>
        ))}
      </div>
      
      {amenities.length > 5 && (
        <button 
          className={styles.showAllBtn}
          onClick={() => setIsModalOpen(true)}
        >
          Show all {amenities.length} amenities
        </button>
      )}
      
      <div className={styles.divider}></div>
      
      {isModalOpen && (
        <AmenitiesModal 
          amenities={amenities} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Amenities;
