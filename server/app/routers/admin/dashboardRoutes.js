let express = require("express");
const {
  dashboardData,
  contactUsSingleView,
} = require("../../controllers/admin/dashboardController");

let dashboardRoutes = express.Router();

dashboardRoutes.get("/view", dashboardData);
dashboardRoutes.get("/contactus-single-view/:id", contactUsSingleView);

module.exports = { dashboardRoutes };
