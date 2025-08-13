let express = require("express");
const multer = require("multer");
const {
  propertyTypeInsert,
  propertyTypeView,
  propertyTypeDelete,
  propertyTypeSingle,
  propertyTypeUpdate,
} = require("../../controllers/admin/propertyTypeController");

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    return cb(null, "uploads/propertyType");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

let propertyTypeRoutes = express.Router();

propertyTypeRoutes.post(
  "/insert",
  upload.single("propertyTypeImage"),
  propertyTypeInsert
);
propertyTypeRoutes.get("/view", propertyTypeView);
propertyTypeRoutes.get("/view/:id", propertyTypeSingle);
propertyTypeRoutes.delete("/delete/:id", propertyTypeDelete);
propertyTypeRoutes.put(
  "/update/:id",
  upload.single("propertyTypeImage"),
  propertyTypeUpdate
);

module.exports = { propertyTypeRoutes };
