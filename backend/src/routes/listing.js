const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');

router.get('/', listingController.getFullListing);
router.get('/photos', listingController.getPhotos);
router.get('/reviews', listingController.getReviews);

module.exports = router;
