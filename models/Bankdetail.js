const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema([{
    bankName: { type: String, required: false },
    accountNumber: { type: String, required: true },
    ifscCode: { type: String, required: false },
    branch: { type: String, required: false },
    // Add more fields as necessary
}]);

module.exports = mongoose.model('BankDetails', bankDetailsSchema);