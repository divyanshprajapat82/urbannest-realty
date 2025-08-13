let express = require("express");
const {
  homeProducts,
  homePropertyType,
  homeHappyCustomer,
  homeHappyCustomerImg,
  homeJodhpurLocalities,
  homeLocalitiesView,
} = require("../../controllers/web/homeController");

let homeRouter = express.Router();

homeRouter.get("/homeProduct-view", homeProducts);
homeRouter.get("/propertyType-view", homePropertyType);
homeRouter.get("/happyCustomer-view", homeHappyCustomer);
homeRouter.get("/happyCustomerImg-view", homeHappyCustomerImg);
homeRouter.get("/jodhpurLocalities-view", homeJodhpurLocalities);
homeRouter.get("/localities-view", homeLocalitiesView);

module.exports = { homeRouter };
