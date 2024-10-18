const { Document, Aadhaar, PAN } = require('../models/Document');

// Create a new document
exports.createDocument = async (req, res) => {
    try {
        const document = new Document({
            user_id: req.user._id, // Assuming user ID is attached to the request
            document_type: req.body.document_type,
            document_name: req.body.document_name,
            document_number: req.body.document_number,
            document_issuer: req.body.document_issuer,
            issue_date: req.body.issue_date,
            expiry_date: req.body.expiry_date,
            file_path: req.file.path // Assuming you're using multer for file uploads
        });
        
        await document.save();
        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new Aadhaar document
exports.createAadhaar = async (req, res) => {
    try {
        const newAadhaar = new Aadhaar({
            user_id: req.user._id,
            adharNumber: req.body.adharNumber,
            file_path: req.file.path // Assuming you're using multer for file uploads
        });

        await newAadhaar.save();
        res.status(201).json(newAadhaar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new PAN document
exports.createPAN = async (req, res) => {
    try {
        const newPAN = new PAN({
            user_id: req.user._id,
            panNumber: req.body.panNumber,
            file_path: req.file.path // Assuming you're using multer for file uploads
        });

        await newPAN.save();
        res.status(201).json(newPAN);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all documents for an authenticated user
exports.getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.find({ user_id: req.user._id });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Aadhaar documents for an authenticated user
exports.getAllAadhaar = async (req, res) => {
    try {
        const aadhaars = await Aadhaar.find({ user_id: req.user._id });
        res.json(aadhaars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all PAN documents for an authenticated user
exports.getAllPAN = async (req, res) => {
    try {
        const pans = await PAN.find({ user_id: req.user._id });
        res.json(pans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific document by ID
exports.getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) return res.status(404).json({ message: 'Document not found' });
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
