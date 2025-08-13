let express = require("express");
const multer = require("multer");
const {
  propertiesInsert,
  propertiesView,
  propertiesSingle,
} = require("../../controllers/admin/propertiesController");

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    return cb(null, "uploads/properties");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
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
