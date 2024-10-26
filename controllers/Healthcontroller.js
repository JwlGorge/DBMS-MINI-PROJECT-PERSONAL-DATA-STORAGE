const Health = require('../models/Health');

// Create a new medical history entry for a user
exports.createMedicalHistory = async (req, res) => {
    try {
        const { userId, medicalHistory } = req.body;

        // Find or create a health record for the user
        let healthRecord = await Health.findOne({ userId });
        if (!healthRecord) {
            // If no record exists, create a new one with provided medical history
            healthRecord = new Health({ userId, medicalHistory: [medicalHistory] });
        } else {
            // If record exists, add new entry to medicalHistory
            healthRecord.medicalHistory.push(medicalHistory);
        }

        await healthRecord.save();
        res.status(201).json("successfullysaved");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Create a new appointment entry for a user
exports.createAppointment = async (req, res) => {
    try {
        const { userId, appointment } = req.body;

        // Find or create a health record for the user
        let healthRecord = await Health.findOne({ userId });
        if (!healthRecord) {
            // If no record exists, create a new one with provided appointment
            healthRecord = new Health({ userId, previousAppointments: [appointment] });
        } else {
            // If record exists, add new entry to previousAppointments
            healthRecord.previousAppointments.push(appointment);
        }

        await healthRecord.save();
        res.status(201).json(healthRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a specific medical history entry
exports.deleteMedicalHistoryEntry = async (req, res) => {
    try {
        const { userId, entryId } = req.body;

        const healthRecord = await Health.findOne({ userId });
        if (!healthRecord) {
            return res.status(404).json({ message: 'No health record found for this user.' });
        }

        healthRecord.medicalHistory = healthRecord.medicalHistory.filter(entry => entry._id.toString() !== entryId);
        await healthRecord.save();

        res.status(200).json({ message: 'Medical history entry deleted successfully.', healthRecord });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a specific appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body;

        const healthRecord = await Health.findOne({ userId });
        if (!healthRecord) {
            return res.status(404).json({ message: 'No health record found for this user.' });
        }

        healthRecord.previousAppointments = healthRecord.previousAppointments.filter(
            appointment => appointment._id.toString() !== appointmentId
        );
        await healthRecord.save();

        res.status(200).json({ message: 'Appointment deleted successfully.', healthRecord });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get all medical history for a user
exports.getMedicalHistory = async (req, res) => {
    try {
        const { userId } = req.query;

        const healthRecord = await Health.findOne({ userId });
        if (!healthRecord || healthRecord.medicalHistory.length === 0) {
            return res.status(404).json({ message: 'No medical history found for this user.' });
        }

        res.status(200).json({ medicalHistory: healthRecord.medicalHistory });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all previous appointments for a user
exports.getAppointmentHistory = async (req, res) => {
    try {
        const { userId } = req.query;

        const healthRecord = await Health.findOne({ userId });
        if (!healthRecord || healthRecord.previousAppointments.length === 0) {
            return res.status(404).json({ message: 'No appointment history found for this user.' });
        }

        res.status(200).json({ previousAppointments: healthRecord.previousAppointments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

