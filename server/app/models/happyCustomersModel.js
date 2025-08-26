const { default: mongoose } = require("mongoose");

let happyCustomersSchema = new mongoose.Schema(
  {
    customersName: {
      type: String,
      required: true,
    },
    customersMessage: {
      type: String,
      required: true,
    },
    customerImage: {
      type: String,
    },
    status: Boolean,
  },
  { timestamps: true }
);

let HappyCustomersModel = mongoose.model(
  "HappyCustomers",
  happyCustomersSchema
);
module.exports = { HappyCustomersModel };
