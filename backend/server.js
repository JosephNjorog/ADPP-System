const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dataRoutes = require('./src/routes/dataRoutes');
const predictionRoutes = require('./src/routes/predictionRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/data', dataRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

