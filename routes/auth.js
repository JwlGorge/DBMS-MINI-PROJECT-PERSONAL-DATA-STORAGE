const express = require('express');
const router = express.Router();
const authController = require('../controllers/Authcontroller');

// User registration and authentication routes
router.post('/register', authController.registerUser);
router.post('/login', authController.authenticateUser);

module.exports = router;
