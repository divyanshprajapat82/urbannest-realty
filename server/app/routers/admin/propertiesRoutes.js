let express = require("express");
const multer = require("multer");
const {
  propertiesInsert,
  propertiesView,
  propertiesSingle,
} = require("../../controllers/admin/propertiesController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "urbannest-realty-Images/properties", // folder name in your Cloudinary account
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ quality: "auto" }], // optional optimization
  },
});

let upload = multer({ storage: storage });

let propertiesRoutes = express.Router();

propertiesRoutes.post(
  "/insert",
  upload.fields([
    {
      name: "singleImage",
      maxCount: 1,
    },
    {
      name: "multipleImages",
      maxCount: 5,
    },
  ]),
  propertiesInsert
);
propertiesRoutes.get("/view", propertiesView);
propertiesRoutes.get("/view/:id", propertiesSingle);
// propertiesRoutes.delete("/delete/:id", propertiesDelete);
// propertiesRoutes.put(
//   "/update/:id",
// upload.fields([
//   {
//     name: "singleImage",
//     maxCount: 1,
//   },
//   {
//     name: "multipleImages",
//     maxCount: 5,
//   },
// ]),
//   propertiesUpdate
// );

module.exports = { propertiesRoutes };
