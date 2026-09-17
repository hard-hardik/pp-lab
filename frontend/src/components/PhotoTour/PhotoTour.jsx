import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiShare, FiHeart } from 'react-icons/fi';
import styles from './PhotoTour.module.css';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useKeyboard from '../../hooks/useKeyboard';

const roomAmenities = {
  "Living room 1": "Sofa · Air conditioning · Ceiling fan · TV",
  "Living room 2": "Seating area · Natural light",
  "Full kitchen": "Refrigerator · Microwave · Stove · Oven",
  "Bedroom": "Double bed · Air conditioning · Linens",
  "Full bathroom": "Bathtub · Hot water · Hair dryer",
};

const PhotoTour = ({ isOpen, onClose, photos = [], onPhotoClick }) => {
  const containerRef = useRef(null);
  const [activeThumb, setActiveThumb] = useState(0);

  useLockBodyScroll(isOpen);

  useKeyboard({
    key: 'Escape',
    action: onClose,
    isActive: isOpen
  });

  if (!isOpen) return null;

  // Group photos by room
  const roomsMap = new Map();
  photos.forEach((photo) => {
    const roomName = photo.room || 'Additional photos';
    if (!roomsMap.has(roomName)) {
      roomsMap.set(roomName, {
        name: roomName,
        photos: [],
      });
    }
    roomsMap.get(roomName).photos.push(photo);
  });

  const rooms = Array.from(roomsMap.values());

  const handleThumbClick = (index, roomName) => {
    setActiveThumb(index);
    const element = document.getElementById(`room-${roomName.replace(/[\s\W]+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.topBar}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close photo tour">
          <FiChevronLeft size={24} />
        </button>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <FiShare size={18} /> <span className={styles.actionText}>Share</span>
          </button>
          <button className={styles.actionBtn}>
            <FiHeart size={18} /> <span className={styles.actionText}>Save</span>
          </button>
        </div>
      </div>

      <div className={styles.thumbnailStrip}>
        <div className={styles.thumbnailContainer}>
          {rooms.map((room, index) => (
            <button
              key={room.name}
              className={`${styles.thumbnailBtn} ${activeThumb === index ? styles.activeThumb : ''}`}
              onClick={() => handleThumbClick(index, room.name)}
            >
              <div className={styles.thumbImageWrapper}>
                <img src={room.photos[0].url} alt={room.name} className={styles.thumbnailImg} />
              </div>
              <span className={styles.thumbnailLabel}>{room.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mainContent} ref={containerRef}>
        <div className={styles.roomsList}>
          {rooms.map((room, index) => (
            <div key={room.name} id={`room-${room.name.replace(/[\s\W]+/g, '-')}`} className={styles.roomSection}>
              <div className={styles.roomInfo}>
                <h2 className={styles.roomTitle}>{room.name}</h2>
                {roomAmenities[room.name] && (
                  <p className={styles.roomAmenities}>{roomAmenities[room.name]}</p>
                )}
              </div>
              <div className={styles.roomPhotos}>
                {room.photos.map((photo, pIdx) => {
                  const globalIndex = photos.findIndex(p => p.url === photo.url);
                  return (
                    <button key={pIdx} className={styles.photoBtn} onClick={() => onPhotoClick(globalIndex)}>
                      <img src={photo.url} alt={photo.caption || room.name} className={styles.mainPhoto} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoTour;
