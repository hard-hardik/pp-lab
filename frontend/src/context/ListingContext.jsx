import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import fallbackData from '../data/listingData';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || '';
        const response = await axios.get(`${baseUrl}/api/listing`);
        setListing(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch listing, using fallback data", err);
        setListing(fallbackData);
        setError("Could not load fresh data. Showing offline version.");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, []);

  return (
    <ListingContext.Provider value={{ listing, loading, error }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListing = () => useContext(ListingContext);
