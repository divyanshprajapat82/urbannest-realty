const mongoose = require("mongoose");

let adminSchema = new mongoose.Schema({
  adminName: String,
  adminEmail: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  adminPhone: Number,
  adminImage: String,
  adminPassword: String,
});

let AdminModel = mongoose.model("Admin", adminSchema);
module.exports = { AdminModel };
