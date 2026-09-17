import React, { useState, useContext } from 'react';
import styles from './Description.module.css';
import { ListingContext } from '../../context/ListingContext';

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const listingContext = useContext(ListingContext);
  
  const text = listingContext?.listing?.description || `Welcome to our beautiful, modern villa located right by the beach. This stunning property offers breathtaking ocean views, a private infinity pool, and luxurious amenities to make your stay unforgettable. 

The space features an open-concept living area with floor-to-ceiling windows that flood the room with natural light. The fully-equipped gourmet kitchen is perfect for preparing meals with local ingredients. Each bedroom comes with an en-suite bathroom, premium linens, and direct balcony access. 

Outside, you'll find a spacious patio with comfortable lounge seating, a barbecue grill, and dining area perfect for sunset dinners. The property is just a short 5-minute walk to pristine beaches and local attractions.`;

  const previewText = text.substring(0, 250);
  const needsExpansion = text.length > 250;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isExpanded ? (
          <p className={styles.text}>{text}</p>
        ) : (
          <p className={styles.text}>
            {needsExpansion ? `${previewText}...` : text}
          </p>
        )}
      </div>
      
      {needsExpansion && (
        <button 
          className={styles.toggleBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Show more'} 
          <span className={styles.arrow}>{isExpanded ? '<' : '>'}</span>
        </button>
      )}
      
      <div className={styles.divider}></div>
    </div>
  );
};

export default Description;
