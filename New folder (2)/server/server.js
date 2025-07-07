// server.js
// Express backend stub for future scalability
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static('../'));

// Example API route (placeholder)
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// TODO: Add more API routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 