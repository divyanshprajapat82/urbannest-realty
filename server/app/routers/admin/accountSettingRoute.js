let express = require("express");
const multer = require("multer");
const {
  accountSettingInsert,
  accountSettingView,
  accountSettingUpdate,
} = require("../../controllers/admin/accountSettingController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../../utils/cloudinary");

// let storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     return cb(null, "uploads/accountSetting");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "urbannest-realty-Images/accountSetting", // folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ quality: "auto" }], // optional optimization
  },
});

let upload = multer({ storage: storage });

let accountSettingRoutes = express.Router();

accountSettingRoutes.post(
  "/insert",
  upload.single("LogoImage"),
  accountSettingInsert
);
accountSettingRoutes.get("/view", accountSettingView);
accountSettingRoutes.put(
  "/updata",
  upload.single("LogoImage"),
  accountSettingUpdate
);

module.exports = { accountSettingRoutes };
