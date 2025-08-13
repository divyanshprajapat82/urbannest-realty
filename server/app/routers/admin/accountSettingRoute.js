let express = require("express");
const multer = require("multer");
const {
  accountSettingInsert,
  accountSettingView,
  accountSettingUpdate,
} = require("../../controllers/admin/accountSettingController");

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    return cb(null, "uploads/accountSetting");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
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
accountSettingRoutes.put("/updata", upload.single("LogoImage"), accountSettingUpdate);

module.exports = { accountSettingRoutes };
