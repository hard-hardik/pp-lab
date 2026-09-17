const path = require('path');
const fs = require('fs');

const listingDataPath = path.join(__dirname, '../data/listing.json');

const getListingData = () => {
  const data = fs.readFileSync(listingDataPath, 'utf8');
  return JSON.parse(data);
};

exports.getFullListing = (req, res) => {
  try {
    const data = getListingData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve listing data' });
  }
};

exports.getPhotos = (req, res) => {
  try {
    const data = getListingData();
    res.json(data.photos || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve photos' });
  }
};

exports.getReviews = (req, res) => {
  try {
    const data = getListingData();
    res.json(data.reviews || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
};
