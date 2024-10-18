const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' }, // Optional reference
    document_type: { type: String, required: false }, // Optional field
    document_name: { type: String, required: false }, // Optional field
    document_number: { type: String, required: false }, // Optional field
    document_issuer: { type: String, required: false }, // Optional field
    issue_date: { type: Date, required: false }, // Optional field
    expiry_date: { type: Date, required: false }, // Optional field
    file_path: { type: String, required: false } // Optional field
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Aadhaar Schema with required fields set to false
const adharSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' }, // Optional reference
    adharNumber: { type: String, required: false }, // Optional field
    file_path: { type: String, required: false } // Optional field
});

// PAN Schema with required fields set to false
const panSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User' }, // Optional reference
    panNumber: { type: String, required: false }, // Optional field
    file_path: { type: String, required: false } // Optional field
});

module.exports = {
    Document: mongoose.model('Document', documentSchema),
    Aadhaar: mongoose.model('Aadhaar', adharSchema),
    PAN: mongoose.model('PAN', panSchema),
};
