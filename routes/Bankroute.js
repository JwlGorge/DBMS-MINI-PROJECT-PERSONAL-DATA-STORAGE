const express = require('express');
const router = express.Router();
const bankController = require('../controllers/Bankcontroller');

// Route to create or update bank details
router.post('/bankdetail', bankController.createOrUpdateBankDetails);

// Route to get all bank details
router.get('/bankdetail', bankController.getAllBankDetails);

// Route to edit a bank account
router.put('/bankdetail/edit', bankController.editBankAccount);

// Route to delete a bank account
router.delete('/bankdetail/delete', bankController.deleteBankAccount);

module.exports = router;
