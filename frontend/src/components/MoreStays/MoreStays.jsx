import React from 'react';
import styles from './MoreStays.module.css';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MoreStays = () => {
  const stays = [
    {
      id: 1,
      title: 'Beautiful Studio with a view to die for',
      price: '23,600',
      rating: 4.91,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'NAQAB - 1bhk with private pool',
      price: '42,218',
      rating: 4.95,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      price: '44,506',
      rating: 4.94,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'The Tropical Studio | 5 mins to Beach',
      price: '22,824',
      rating: 4.96,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>More stays nearby</h2>
        <div className={styles.pagination}>
          <span className={styles.pageText}>1 / 2</span>
          <button className={styles.navBtn}><FiChevronLeft /></button>
          <button className={styles.navBtn}><FiChevronRight /></button>
        </div>
      </div>
      
      <div className={styles.carousel}>
        {stays.map((stay) => (
          <div key={stay.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={stay.image} alt={stay.title} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.stayTitle}>{stay.title}</h3>
              <div className={styles.details}>
                <span className={styles.price}>₹{stay.price}</span>
                <div className={styles.ratingBox}>
                  <FaStar className={styles.star} />
                  <span>{stay.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreStays;
