const mongoose = require('mongoose');

const allUsersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    college_email: { type: String, required: true, unique: true },
    personal_email: { type: String },
    tenth_percent: { type: Number },
    twelth_percent: { type: Number },
    department: { type: String },
    role: {
      type: String,
      enum: ['Admin', 'Staff', 'Student', 'Guest'],
      default: 'Student',
    },
    picture: { type: String },
    cgpa: { type: Number, min: 0, max: 10, required: true },
    contact_number: { type: String },

    register_number: { type: String, unique: true,required:true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    dob: { type: Date },
    degree: { type: String, enum: ['B.Tech', 'B.E', 'M.Tech', 'M.E', 'Other'] },
    diplomo: { type: String }, // Assuming optional spelling
    current_arrears: { type: Number, default: 0 },
    backlog_history: { type: Number, default: 0 },
    accomodation: { type: String, enum: ['Hostel', 'Day Scholar', 'Other'] },
    resume: { type: String }, // Resume URL
    leetcode: { type: String },
    github: { type: String },
    linkedin: { type: String },
    batch: { type: String },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model('AllUsers', allUsersSchema);
