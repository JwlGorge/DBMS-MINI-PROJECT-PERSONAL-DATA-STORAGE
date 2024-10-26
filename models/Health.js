const mongoose=require('mongoose')
const HealthSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    medicalHistory: [
        {
            condition: String,
            allergy: String,
            medication: String,
            surgery: String,
            notes: String
        }
    ],
    previousAppointments: [
        {
            date: {
                type: Date,
                required: true
            },
            doctorName: {
                type: String,
                required: true
            },
            purpose: {
                type: String,
                required: true
            },
            diagnosis: String,
            treatment: String,
            notes: String
        }
    ]
}, {
    timestamps: true
});
module.exports = mongoose.model('Health', HealthSchema);