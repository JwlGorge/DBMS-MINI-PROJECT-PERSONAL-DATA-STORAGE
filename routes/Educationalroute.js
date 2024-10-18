const express = require('express');
const app = express.Router();
const educationalController = require('../controllers/Educationalcontroller'); // Adjust the path as necessary

// Route to create educational details
app.post('/', educationalController.createEducationalDetails);

// Route to get all educational details
app.get('/', educationalController.getAllEducationalDetails);

module.exports = app;