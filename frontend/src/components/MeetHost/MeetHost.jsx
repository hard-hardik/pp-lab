import React from 'react';
import styles from './MeetHost.module.css';
import { FaStar } from 'react-icons/fa';
import { PiBalloon, PiGraduationCap } from 'react-icons/pi';
import { MdOutlineShield } from 'react-icons/md';

const MeetHost = () => {
  const cohosts = [
    { name: 'Sharath', initial: 'S', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=48&h=48&fit=crop' },
    { name: 'Simran', initial: 'S', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop' },
    { name: 'Shruti', initial: 'S', color: '#ffb6c1' },
    { name: 'Aman Dev Pahwa', initial: 'A', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop' },
    { name: 'Pallavi', initial: 'P', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop' },
    { name: 'Amisha', initial: 'A', color: '#a0c4ff' },
    { name: 'Maria Karen Priyanka', initial: 'M', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop' },
    { name: 'Sanyukta', initial: 'S', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Meet your host</h2>
      
      <div className={styles.content}>
        <div className={styles.leftCol}>
          <div className={styles.hostCard}>
            <div className={styles.cardHeader}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatarMain}>
                  Mirashya
                </div>
                <div className={styles.verifiedBadge}>✓</div>
              </div>
              <div className={styles.hostNames}>
                <h3>Mirashya Homes</h3>
                <p>Host</p>
              </div>
            </div>
            
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>1,463</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>4.68<FaStar className={styles.star} /></span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>2</span>
                <span className={styles.statLabel}>Years hosting</span>
              </div>
            </div>
          </div>
          
          <div className={styles.personalDetails}>
            <div className={styles.detailItem}>
              <PiBalloon className={styles.detailIcon} />
              <span>Born in the 80s</span>
            </div>
            <div className={styles.detailItem}>
              <PiGraduationCap className={styles.detailIcon} />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.sectionBlock}>
            <h4>Co-Hosts</h4>
            <div className={styles.cohostsGrid}>
              {cohosts.map((ch, idx) => (
                <div key={idx} className={styles.cohostItem}>
                  {ch.img ? (
                    <img src={ch.img} alt={ch.name} className={styles.cohostAvatar} />
                  ) : (
                    <div className={styles.cohostAvatarFallback} style={{ backgroundColor: ch.color }}>
                      {ch.initial}
                    </div>
                  )}
                  <span className={styles.cohostName}>{ch.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.sectionBlock}>
            <h4>Host details</h4>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
            <button className={styles.messageBtn}>Message host</button>
          </div>
          
          <div className={styles.paymentWarning}>
            <MdOutlineShield className={styles.shieldIcon} />
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetHost;
