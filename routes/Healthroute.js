const express = require('express');
const healthController = require('../controllers/Healthcontroller');
const router = express.Router();

router.post('/medicalHistory', healthController.createMedicalHistory);
router.post('/appointment', healthController.createAppointment);
router.delete('/medicalHistory', healthController.deleteMedicalHistoryEntry);
router.delete('/appointment', healthController.deleteAppointment);
router.get('/medicalHistory', healthController.getMedicalHistory);
router.get('/appointmentHistory', healthController.getAppointmentHistory);

module.exports = router;
