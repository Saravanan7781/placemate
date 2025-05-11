const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,// optional, to match your lowercase usage
    },
    location: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Companies', companySchema);
