const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true }
});

const biodataSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    dob: { type: Date, required: true }, // ISODate will be stored as Date
    contact_number: { type: String, required: true },
    address: addressSchema, // Use the nested address schema
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    siblingcount: { type: Number },
    // Add more fields as necessary
});

module.exports = mongoose.model('Biodata', biodataSchema);
