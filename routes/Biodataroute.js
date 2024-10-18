const express = require('express');
const router = express.Router();
const { createBiodata, getAllBiodata } = require('../controllers/biodataController');
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you have an authentication middleware

// Create Biodata
router.post('/biodata', authenticate, createBiodata); // Create a new biodata entry

// Get all Biodata for authenticated user
router.get('/biodata', authenticate, getAllBiodata); // Get all biodata entries for the user

module.exports = router;
