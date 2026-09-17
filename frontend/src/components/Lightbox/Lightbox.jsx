import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Lightbox.module.css';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useKeyboard from '../../hooks/useKeyboard';

const Lightbox = ({ isOpen, onClose, photos = [], currentIndex = 0, onNavigate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useLockBodyScroll(isOpen);

  const handlePrevious = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      setImageLoaded(false);
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentIndex < photos.length - 1) {
      setImageLoaded(false);
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, photos.length, onNavigate]);

  useKeyboard({
    key: 'Escape',
    action: onClose,
    isActive: isOpen
  });

  useKeyboard({
    key: 'ArrowLeft',
    action: handlePrevious,
    isActive: isOpen
  });

  useKeyboard({
    key: 'ArrowRight',
    action: handleNext,
    isActive: isOpen
  });

  useEffect(() => {
    if (isOpen && photos.length > 0) {
      const preloadImage = (index) => {
        if (index >= 0 && index < photos.length) {
          const img = new Image();
          img.src = photos[index].url;
        }
      };
      preloadImage(currentIndex - 1);
      preloadImage(currentIndex + 1);
    }
  }, [isOpen, currentIndex, photos]);
  
  const modalRef = useRef(null);
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
    
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen || !photos.length) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const showPrevious = currentIndex > 0;
  const showNext = currentIndex < photos.length - 1;

  return (
    <div 
      className={styles.overlay} 
      role="dialog" 
      aria-modal="true" 
      onClick={handleBackdropClick}
      ref={modalRef}
    >
      <div className={styles.topBar}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close lightbox">
          <FiX />
        </button>
        <div className={styles.counter}>
          {currentIndex + 1} / {photos.length}
        </div>
        <div className={styles.placeholder} />
      </div>

      <div className={styles.contentContainer} onClick={handleBackdropClick}>
        {showPrevious && (
          <button 
            className={`${styles.navButton} ${styles.prevButton}`} 
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
        )}
        
        <div className={styles.imageWrapper}>
          <img 
            key={currentIndex}
            src={photos[currentIndex].url} 
            alt={photos[currentIndex].caption || `Photo ${currentIndex + 1}`}
            className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {showNext && (
          <button 
            className={`${styles.navButton} ${styles.nextButton}`} 
            onClick={handleNext}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
