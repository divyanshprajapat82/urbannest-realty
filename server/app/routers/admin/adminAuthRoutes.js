let express = require("express");
const {
  adminLogin,
  adminView,
  adminProfile,
} = require("../../controllers/admin/adminAuthController");
const multer = require("multer");
// const { default: cloudinary } = require("../../..");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../../utils/cloudinary");


// let storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     return cb(null, "uploads/adminProfile");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// Cloudinary is configured in utils/cloudinary

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "urbannest-realty-Images/adminProfile", // folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ quality: "auto" }], // optional optimization
  },
});

let upload = multer({ storage: storage });

let adminAuthRoutes = express.Router();

adminAuthRoutes.post("/login", adminLogin);
adminAuthRoutes.get("/view", adminView);

adminAuthRoutes.put("/profile", upload.single("adminImage"), adminProfile);
// adminAuthRoutes.get("/view", adminProfileView);

module.exports = { adminAuthRoutes };
