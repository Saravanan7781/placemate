const mongoose = require('mongoose');

const interviewExperienceModel = new mongoose.Schema({
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companies',
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    interview_experience: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model('InterviewExperience', interviewExperienceModel);