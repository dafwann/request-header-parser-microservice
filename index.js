const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Header Parser Microservice</h1><p>Gunakan <code>/api/whoami</code> untuk melihat informasi Anda.</p>');
});

// API endpoint /api/whoami
app.get('/api/whoami', (req, res) => {
  // IP address (x-forwarded-for untuk deploy di Replit/Heroku)
  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Preferred language
  const language = req.headers['accept-language'];

  // Software / User-Agent
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
