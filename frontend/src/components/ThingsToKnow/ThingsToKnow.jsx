import React from 'react';
import styles from './ThingsToKnow.module.css';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { MdOutlineShield } from 'react-icons/md';

const ThingsToKnow = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Things to know</h2>
      
      <div className={styles.grid}>
        <div className={styles.column}>
          <div className={styles.iconWrapper}><FiCalendar size={24} /></div>
          <h3 className={styles.columnTitle}>Cancellation policy</h3>
          <p className={styles.text}>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
          <p className={styles.text}>Review this host's full policy for details.</p>
          <button className={styles.linkBtn}>Learn more</button>
        </div>
        
        <div className={styles.column}>
          <div className={styles.iconWrapper}><FiClock size={24} /></div>
          <h3 className={styles.columnTitle}>House rules</h3>
          <p className={styles.text}>Check-in after 2:00 pm</p>
          <p className={styles.text}>Checkout before 11:00 am</p>
          <p className={styles.text}>3 guests maximum</p>
          <button className={styles.linkBtn}>Learn more</button>
        </div>
        
        <div className={styles.column}>
          <div className={styles.iconWrapper}><MdOutlineShield size={24} /></div>
          <h3 className={styles.columnTitle}>Safety & property</h3>
          <p className={styles.text}>Carbon monoxide alarm not reported</p>
          <p className={styles.text}>Smoke alarm not reported</p>
          <p className={styles.text}>Exterior security cameras on property</p>
          <button className={styles.linkBtn}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
