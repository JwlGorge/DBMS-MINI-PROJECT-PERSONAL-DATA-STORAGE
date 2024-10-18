const mongoose = require('mongoose');

const educationalDetailsSchema = new mongoose.Schema({
    tenthMark: { type: Number, required: false },
    twelfthMark: { type: Number, required: false },
    degree: { type: String, required: false },
    degreeDetails: { type: String, required: false },
    courses: [{
        courseName: { type: String, required: false },
        courseDetails: { type: String, required: false },
        certificate: { type: String, required: false }, // URL or path to the certificate
    }],
});

module.exports = mongoose.model('EducationalDetails', educationalDetailsSchema);