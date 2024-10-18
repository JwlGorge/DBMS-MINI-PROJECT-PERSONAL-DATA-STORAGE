const express = require('express');
const router = express.Router();
const {
    createDocument,
    createAadhaar,
    createPAN,
    getAllDocuments,
    getAllAadhaar,
    getAllPAN,
    getDocumentById
} = require('../controllers/DocumentController');
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you have an authentication middleware
const multer = require('multer'); // For handling file uploads

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Change 'uploads/' to your desired upload folder

// Document routes
router.post('/documents', authenticate, upload.single('file'), createDocument); // Create a new document
router.get('/documents', authenticate, getAllDocuments); // Get all documents

// Aadhaar routes
router.post('/aadhaar', authenticate, upload.single('file'), createAadhaar); // Create a new Aadhaar document
router.get('/aadhaar', authenticate, getAllAadhaar); // Get all Aadhaar documents

// PAN routes
router.post('/pan', authenticate, upload.single('file'), createPAN); // Create a new PAN document
router.get('/pan', authenticate, getAllPAN); // Get all PAN documents

// Get a specific document by ID
router.get('/documents/:id', authenticate, getDocumentById); // Get document by ID

module.exports = router;
