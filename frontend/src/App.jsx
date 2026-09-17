import React, { useState, useContext } from 'react';
import { ListingProvider, useListing } from './context/ListingContext';

import Header from './components/Header/Header';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import ListingHeader from './components/ListingHeader/ListingHeader';
import HostInfo from './components/HostInfo/HostInfo';
import Description from './components/Description/Description';
import Amenities from './components/Amenities/Amenities';
import Calendar from './components/Calendar/Calendar';
import Reviews from './components/Reviews/Reviews';
import Map from './components/Map/Map';
import MeetHost from './components/MeetHost/MeetHost';
import ThingsToKnow from './components/ThingsToKnow/ThingsToKnow';
import MoreStays from './components/MoreStays/MoreStays';
import BookingCard from './components/BookingCard/BookingCard';
import Footer from './components/Footer/Footer';
import PhotoTour from './components/PhotoTour/PhotoTour';
import Lightbox from './components/Lightbox/Lightbox';

import './styles/global.css';

function AppContent() {
  const { listing, loading } = useListing();
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = listing?.photos || [];

  const openPhotoTour = () => setIsPhotoTourOpen(true);
  const closePhotoTour = () => setIsPhotoTourOpen(false);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const handleLightboxNavigate = (newIndex) => {
    setLightboxIndex(newIndex);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'var(--font-family)',
        fontSize: '18px',
        color: 'var(--color-text-secondary)'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />
      <main style={{ 
        maxWidth: 'var(--max-width)', 
        margin: '0 auto', 
        padding: '0 24px',
        paddingTop: '24px', 
        paddingBottom: '48px' 
      }}>
        <PhotoGrid 
          onShowAllPhotos={openPhotoTour} 
          onPhotoClick={openPhotoTour} 
        />
        
        <ListingHeader />
        
        <div style={{ 
          display: 'flex', 
          gap: '8%', 
          marginTop: '24px',
          position: 'relative'
        }}>
          <div style={{ flex: '1 1 58%', minWidth: 0 }}>
            <HostInfo />
            <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <Description />
            <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <Amenities />
            <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
            <Calendar />
          </div>
          
          <div style={{ flex: '0 0 34%', position: 'relative' }}>
            <div style={{ position: 'sticky', top: '100px' }}>
              <BookingCard />
            </div>
          </div>
        </div>

        <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Reviews />
        <hr style={{ margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Map />
        <MeetHost />
        <ThingsToKnow />
        <MoreStays />
      </main>
      
      <Footer />

      <PhotoTour 
        isOpen={isPhotoTourOpen} 
        onClose={closePhotoTour} 
        photos={photos}
        onPhotoClick={openLightbox} 
      />
      
      <Lightbox 
        isOpen={isLightboxOpen} 
        onClose={closeLightbox} 
        photos={photos}
        currentIndex={lightboxIndex}
        onNavigate={handleLightboxNavigate}
      />
    </>
  );
}

function App() {
  return (
    <ListingProvider>
      <AppContent />
    </ListingProvider>
  );
}

export default App;
