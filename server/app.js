require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const adviceRoutes = require('./routes/adviceRoutes');

// Setup Express and Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/legiwise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setup Routes
app.use('/auth', authRoutes);
app.use('/advice', adviceRoutes);

// Start the Server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
