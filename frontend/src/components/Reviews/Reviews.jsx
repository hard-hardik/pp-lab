import React, { useContext } from 'react';
import styles from './Reviews.module.css';
import { FaStar } from 'react-icons/fa';
import { ListingContext } from '../../context/ListingContext';

const Reviews = () => {
  const listingContext = useContext(ListingContext);
  const rating = listingContext?.listing?.rating?.overall || 4.95;
  const reviewCount = listingContext?.listing?.rating?.totalReviews || 124;
  
  const categories = [
    { name: 'Cleanliness', score: 4.9 },
    { name: 'Accuracy', score: 4.9 },
    { name: 'Communication', score: 5.0 },
    { name: 'Location', score: 4.8 },
    { name: 'Check-in', score: 5.0 },
    { name: 'Value', score: 4.7 }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Sarah',
      date: 'October 2023',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      text: 'Absolutely beautiful home! The pictures do not do it justice. The pool area is incredible and we spent most of our time out there. The host was very communicative and accommodating to our needs.'
    },
    {
      id: 2,
      author: 'Michael',
      date: 'September 2023',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      text: 'Great location and stunning views. The villa was spotless and had everything we needed for a week-long stay. Would highly recommend this place to anyone visiting the area.'
    },
    {
      id: 3,
      author: 'Jessica',
      date: 'August 2023',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      text: 'We had an amazing time at this villa. The kitchen was well stocked, the beds were very comfortable, and the outdoor area is perfect for relaxing. Check-in was a breeze.'
    },
    {
      id: 4,
      author: 'David',
      date: 'July 2023',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      text: 'A perfect getaway! The property is exactly as described and shown in the photos. The neighborhood is quiet but close enough to restaurants and shops. We will definitely be back!'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTitle}>
        <FaStar className={styles.starIcon} />
        {rating} · {reviewCount} reviews
      </h2>
      
      <div className={styles.categoriesGrid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.categoryItem}>
            <span className={styles.categoryName}>{cat.name}</span>
            <div className={styles.scoreContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${(cat.score / 5) * 100}%` }}
                ></div>
              </div>
              <span className={styles.scoreValue}>{cat.score.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewerInfo}>
              <img src={review.avatar} alt={review.author} className={styles.avatar} />
              <div className={styles.reviewerDetails}>
                <span className={styles.reviewerName}>{review.author}</span>
                <span className={styles.reviewDate}>{review.date}</span>
              </div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            {review.text.length > 150 && (
              <button className={styles.showMoreBtn}>Show more</button>
            )}
          </div>
        ))}
      </div>
      
      <button className={styles.showAllReviewsBtn}>
        Show all {reviewCount} reviews
      </button>
      
      <div className={styles.divider}></div>
    </div>
  );
};

export default Reviews;
