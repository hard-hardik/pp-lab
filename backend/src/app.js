const express = require('express');
const corsMiddleware = require('./middleware/cors');
const listingRoutes = require('./routes/listing');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use('/api/listing', listingRoutes);

const publicPath = path.join(__dirname, '../public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
