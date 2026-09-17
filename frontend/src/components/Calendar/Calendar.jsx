import React from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  // Simple mockup calendar structure
  const renderMonth = (monthName, startIndex, days) => (
    <div className={styles.month}>
      <h3 className={styles.monthName}>{monthName} 2024</h3>
      <div className={styles.weekdays}>
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <div className={styles.daysGrid}>
        {Array.from({ length: startIndex }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptyDay}></div>
        ))}
        {Array.from({ length: days }).map((_, i) => (
          <div key={`day-${i}`} className={styles.day}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>5 nights in Candolim</h2>
        <p className={styles.subtitle}>Oct 24, 2024 - Oct 29, 2024</p>
      </div>

      <div className={styles.calendarsWrapper}>
        {renderMonth("October", 2, 31)}
        {renderMonth("November", 5, 30)}
      </div>

      <div className={styles.actions}>
        <button className={styles.keyboardBtn}>
          <span className={styles.keyboardIcon}>⌨</span>
        </button>
        <button className={styles.clearBtn}>Clear dates</button>
      </div>

      <div className={styles.divider}></div>
    </div>
  );
};

export default Calendar;
