const BankDetails = require('../models/Bankdetail');

// Create or update Bank Details for a user
exports.createOrUpdateBankDetails = async (req, res) => {
    try {
        const { userId, accounts } = req.body; // Extract userId and accounts from request body

        // Check if the user already has bank details
        let bankDetails = await BankDetails.findOne({ userId });

        if (!bankDetails) {
            // If no details exist for the user, create a new entry
            bankDetails = new BankDetails({ userId, accounts });
        } else {
            // If the user already has bank details, append new accounts to the existing list
            bankDetails.accounts.push(...accounts);
        }

        // Save the bank details
        await bankDetails.save();
        res.status(201).json(bankDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Bank Details for a user
exports.getAllBankDetails = async (req, res) => {
    try {
        const { userId } = req.query; // Assuming the userId is sent as a query parameter

        // Find all bank details for the specific user
        const bankDetails = await BankDetails.find({ userId });

        if (bankDetails.length === 0) {
            return res.status(404).json({ message: 'No bank details found for this user.' });
        }

        // Return all bank details for the user
        res.json(bankDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Edit an existing bank account based on userId and accountNumber
exports.editBankAccount = async (req, res) => {
    try {
        const { userId, accountNumber, updatedDetails } = req.body;

        // Find the user's bank details
        const bankDetails = await BankDetails.findOne({ userId });

        if (!bankDetails) {
            return res.status(404).json({ message: 'No bank details found for this user.' });
        }

        // Find the specific account to edit
        const account = bankDetails.accounts.id(accountNumber);

        if (!account) {
            return res.status(404).json({ message: 'Bank account not found.' });
        }

        // Update the account details
        Object.assign(account, updatedDetails);
        
        // Save the updated bank details
        await bankDetails.save();
        res.status(200).json(bankDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a bank account based on userId and accountNumber
exports.deleteBankAccount = async (req, res) => {
    try {
        const { userId, accountNumber } = req.body;

        // Find the user's bank details
        const bankDetails = await BankDetails.findOne({ userId });

        if (!bankDetails) {
            return res.status(404).json({ message: 'No bank details found for this user.' });
        }

        // Remove the specific account
        bankDetails.accounts = bankDetails.accounts.filter(account => account.accountNumber !== accountNumber);

        // Save the updated bank details
        await bankDetails.save();
        res.status(200).json({ message: 'Bank account deleted successfully.', bankDetails });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
