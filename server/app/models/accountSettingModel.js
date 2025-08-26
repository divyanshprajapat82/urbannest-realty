const { default: mongoose } = require("mongoose");

let accountSettingSchema = new mongoose.Schema(
  {
    WebsiteTitle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Contact: {
      type: String,
      required: true,
    },
    WebsiteDescription: {
      type: String,
      required: true,
    },
    FacebookLink: {
      type: String,
      required: true,
    },
    InstagramLink: {
      type: String,
      required: true,
    },
    TwitterLink: {
      type: String,
      required: true,
    },
    LinkedInLink: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Map: {
      type: String,
      required: true,
    },
    LogoImage: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

let AccountSettingModel = mongoose.model(
  "AccountSetting",
  accountSettingSchema
);
module.exports = { AccountSettingModel };
