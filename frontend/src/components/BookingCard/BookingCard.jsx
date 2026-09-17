import React, { useContext } from 'react';
import styles from './BookingCard.module.css';
import { FaChevronDown } from 'react-icons/fa';
import { ListingContext } from '../../context/ListingContext';

const BookingCard = () => {
  const listingContext = useContext(ListingContext);
  const price = listingContext?.listing?.price || 3850;
  const nights = 5;
  const cleaningFee = 1200;
  const serviceFee = 2500;
  
  const baseTotal = price * nights;
  const finalTotal = baseTotal + cleaningFee + serviceFee;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatCurrency(price)}</span>
          <span className={styles.night}>night</span>
        </div>
      </div>
      
      <div className={styles.formContainer}>
        <div className={styles.datePickerRow}>
          <div className={styles.dateBox}>
            <span className={styles.label}>CHECK-IN</span>
            <span className={styles.value}>10/24/2023</span>
          </div>
          <div className={styles.dateBoxRight}>
            <span className={styles.label}>CHECKOUT</span>
            <span className={styles.value}>10/29/2023</span>
          </div>
        </div>
        
        <div className={styles.guestBox}>
          <div className={styles.guestContent}>
            <span className={styles.label}>GUESTS</span>
            <span className={styles.value}>1 guest</span>
          </div>
          <FaChevronDown className={styles.chevron} />
        </div>
      </div>
      
      <button className={styles.reserveBtn}>Reserve</button>
      
      <p className={styles.chargeText}>You won't be charged yet</p>
      
      <div className={styles.priceBreakdown}>
        <div className={styles.priceRow}>
          <span className={styles.lineItem}>{formatCurrency(price)} × {nights} nights</span>
          <span>{formatCurrency(baseTotal)}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.lineItem}>Cleaning fee</span>
          <span>{formatCurrency(cleaningFee)}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.lineItem}>Airbnb service fee</span>
          <span>{formatCurrency(serviceFee)}</span>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.totalRow}>
        <span>Total before taxes</span>
        <span>{formatCurrency(finalTotal)}</span>
      </div>
    </div>
  );
};

export default BookingCard;
