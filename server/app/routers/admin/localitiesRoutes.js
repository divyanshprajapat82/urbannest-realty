let express = require("express");
const {
  localitiesInsert,
  localitiesView,
  localitiesDelete,
  localitiesSingle,
  localitiesUpdate,
} = require("../../controllers/admin/localitiesController");

let LocalitiesRoutes = express.Router();

LocalitiesRoutes.post("/insert", localitiesInsert);
LocalitiesRoutes.get("/view", localitiesView);
LocalitiesRoutes.get("/view/:id", localitiesSingle);
LocalitiesRoutes.delete("/delete/:id", localitiesDelete);
LocalitiesRoutes.put("/updata/:id", localitiesUpdate);

module.exports = { LocalitiesRoutes };
