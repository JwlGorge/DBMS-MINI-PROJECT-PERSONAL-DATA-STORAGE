const express = require('express');
const app = express.Router();
const authController = require('../controllers/Authcontroller');

// User registration and authentication routes
app.post('/register', authController.registerUser );
app.post('/login', authController.authenticateUser );

module.exports = app;