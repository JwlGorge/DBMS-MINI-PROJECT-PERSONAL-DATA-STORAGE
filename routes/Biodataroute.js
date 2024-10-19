const express = require('express');
const router = express.Router();
const { createBiodata, getAllBiodata } = require('../controllers/Biodatacontroller');
const { authenticate } = require('../middleware/Authmiddleware');

// Create Biodata
router.post('/biodata', authenticate, createBiodata);

// Get all Biodata for authenticated user
router.get('/biodata', authenticate, getAllBiodata);

module.exports = router;