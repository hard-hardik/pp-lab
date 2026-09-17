const app = require('./src/app');
const https = require('https');
const PORT = process.env.PORT || 5000;

// Simple health check route
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Ping the server every 14 minutes (840000 milliseconds) to prevent Render free tier from sleeping
  const RENDER_URL = 'https://pp-lab.onrender.com/ping';
  
  setInterval(() => {
    https.get(RENDER_URL, (res) => {
      console.log(`Self-ping successful: ${res.statusCode}`);
    }).on('error', (err) => {
      console.error(`Self-ping failed: ${err.message}`);
    });
  }, 14 * 60 * 1000); 
});
