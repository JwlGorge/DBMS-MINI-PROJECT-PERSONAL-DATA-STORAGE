const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const createError = require('http-errors');
const authRoutes = require('./routes/auth');
const biodataRoutes = require('./routes/biodata');
const connectDB = require('./config/db');

// Initialize express
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Assuming the function in config/db.js handles MongoDB connection

// Set view engine setup (for HTML views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/biodata', biodataRoutes);

// View Routes
app.use('/', require('./routes/index')); // HTML pages
app.use('/users', require('./routes/users')); // More HTML routes

// 404 Error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
