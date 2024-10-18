const express = require('express');
const app = express.Router();
const bankController = require('../controllers/Bankcontroller'); // Adjust the path as necessary

// Route to create bank details
app.post('/', bankController.createBankDetails);

// Route to get all bank details
app.get('/', bankController.getAllBankDetails);

module.exports = app;