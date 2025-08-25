let express = require("express");
const multer = require("multer");
const {
  customerInsert,
  customerView,
  customerSingle,
  customerDelete,
  customerUpdate,
} = require("../../controllers/admin/happyCustomersController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../../utils/cloudinary");

// let storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     return cb(null, "uploads/happyCustomers");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "urbannest-realty-Images/happyCustomers", // folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ quality: "auto" }], // optional optimization
  },
});

let upload = multer({ storage: storage });

let happyCustomersRoute = express.Router();

happyCustomersRoute.post(
  "/insert",
  upload.single("customerImage"),
  customerInsert
);
happyCustomersRoute.get("/view", customerView);
happyCustomersRoute.get("/view/:id", customerSingle);
happyCustomersRoute.delete("/delete/:id", customerDelete);
happyCustomersRoute.put(
  "/update/:id",
  upload.single("customerImage"),
  customerUpdate
);

module.exports = { happyCustomersRoute };
