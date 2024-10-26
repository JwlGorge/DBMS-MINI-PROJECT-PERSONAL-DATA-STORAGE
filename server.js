const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const biodataRoutes = require('./routes/Biodataroute');
const bankRoutes = require('./routes/Bankroute'); 
const educationRoutes=require('./routes/Educationalroute');
const health=require('./routes/Healthroute');

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Check if environment variables are set
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not set in the .env file.');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/biodata', biodataRoutes); // This is biodata-specific
app.use('/api/bank', bankRoutes); // Now using /api/bank route
app.use('/api/edu',educationRoutes);
app.use('/api/health',health);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
