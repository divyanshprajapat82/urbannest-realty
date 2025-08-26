const mongoose = require("mongoose");

let contactUsSchema = new mongoose.Schema({
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    unique: true,
    required: true,
  },
  contactPhone: {
    type: Number,
    required: true,
  },
  contactMessage: {
    type: String,
    required: true,
  },
});

let ContactUsModel = mongoose.model("ContectUs", contactUsSchema);
module.exports = { ContactUsModel };
