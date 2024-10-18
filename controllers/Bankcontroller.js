const BankDetails = require('../models/Bankdetail');

// Create Bank Details
exports.createBankDetails = async (req, res) => {
    try {
        const bankDetails = new BankDetails(req.body);
        await bankDetails.save();
        res.status(201).json(bankDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Bank Details
exports.getAllBankDetails = async (req, res) => {
    try {
        const bankDetails = await BankDetails.find();
        res.json(bankDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};