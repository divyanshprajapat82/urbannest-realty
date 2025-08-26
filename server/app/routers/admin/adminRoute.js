let express = require("express");
const {
  accountSetting,
  accountSettingRoutes,
} = require("./accountSettingRoute");
const { propertyTypeRoutes } = require("./propertyTypeRoute");
const { LocalitiesRoutes } = require("./localitiesRoutes");
const { happyCustomersRoute } = require("./happyCustomersRoute");
const { propertiesRoutes } = require("./propertiesRoutes");
const { dashboardRoutes } = require("./dashboardRoutes");
const { adminAuthRoutes } = require("./adminAuthRoutes");

let adminRouter = express.Router();

adminRouter.use("/auth", adminAuthRoutes);
adminRouter.use("/localities", LocalitiesRoutes);
adminRouter.use("/account-setting", accountSettingRoutes);
adminRouter.use("/property-Type", propertyTypeRoutes);
adminRouter.use("/customers", happyCustomersRoute);
adminRouter.use("/properties", propertiesRoutes);
adminRouter.use("/dashboard", dashboardRoutes);

module.exports = { adminRouter };
