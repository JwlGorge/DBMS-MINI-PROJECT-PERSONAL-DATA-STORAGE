const mongoose = require('mongoose');

// Define the individual bank detail schema
const bankDetailSchema = new mongoose.Schema({
  bankName: { type: String, required: false },
  accountNumber: { type: String, required: true },
  ifscCode: { type: String, required: false },
  branch: { type: String, required: false },
  // Add more fields as necessary
});

// Define the main schema that holds an array of bank details
const bankDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming user reference
  accounts: [bankDetailSchema] // Array of bank account details
});

module.exports = mongoose.model('BankDetails', bankDetailsSchema);
