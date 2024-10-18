const Biodata = require('../models/Biodata');

// Create Biodata
exports.createBiodata = async (req, res) => {
    try {
        // Destructure required fields from req.body
        const {
            first_name,
            last_name,
            dob,
            contact_number,
            address,
            fatherName,
            motherName,
            siblingcount
        } = req.body;

        // Create a new Biodata instance
        const biodata = new Biodata({
            first_name,
            last_name,
            dob,
            contact_number,
            address,
            fatherName,
            motherName,
            siblingcount,
            userId: req.user._id // Associate with user
        });

        // Save the biodata
        await biodata.save();
        res.status(201).json(biodata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Biodata for authenticated user
exports.getAllBiodata = async (req, res) => {
    try {
        const biodata = await Biodata.find({ userId: req.user._id });
        res.json(biodata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
