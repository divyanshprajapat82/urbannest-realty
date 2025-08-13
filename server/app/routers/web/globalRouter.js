let express = require("express");
const {
  globalProducts,
  allProperties,
  propertiesDetails,
} = require("../../controllers/web/globalController");

let globalRouter = express.Router();

globalRouter.get("/accountSetting-view", globalProducts);
globalRouter.get("/property/:slug", allProperties);
globalRouter.get("/property-details/:slug", propertiesDetails);

module.exports = { globalRouter };
