const EducationalDetails = require('../models/Educationaldetail');

// Create Educational Details
exports.createEducationalDetails = async (req, res) => {
    try {
        const educationalDetails = new EducationalDetails(req.body);
        await educationalDetails.save();
        res.status(201).json(educationalDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Educational Details
exports.getAllEducationalDetails = async (req, res) => {
    try {
        const educationalDetails = await EducationalDetails.find();
        res.json(educationalDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};