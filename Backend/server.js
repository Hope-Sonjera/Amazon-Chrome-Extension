const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

// Connect to MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/AmazonScraper';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', routes);

// Start server
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
