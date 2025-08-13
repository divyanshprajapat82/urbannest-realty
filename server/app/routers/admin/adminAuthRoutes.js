let express = require("express");
const {
  adminLogin,
  adminView,
  adminProfile,
} = require("../../controllers/admin/adminAuthController");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    return cb(null, "uploads/adminProfile");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

let adminAuthRoutes = express.Router();

adminAuthRoutes.post("/login", adminLogin);
adminAuthRoutes.get("/view", adminView);

adminAuthRoutes.put("/profile", upload.single("adminImage"), adminProfile);
// adminAuthRoutes.get("/view", adminProfileView);

module.exports = { adminAuthRoutes };
