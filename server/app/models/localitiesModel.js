const { default: mongoose } = require("mongoose");

let localitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: Boolean,
  },
  { timestamps: true }
);

let LocalitiesModel =
  mongoose.models.Localities || mongoose.model("Localities", localitiesSchema);
module.exports = { LocalitiesModel };
