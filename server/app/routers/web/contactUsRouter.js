let express = require("express");
const {
  contactUsInsert,
} = require("../../controllers/web/contactUsController");

let contactUsRouter = express.Router();

contactUsRouter.post("/insert", contactUsInsert);
// contactUsRouter.get("/property/:slug", allProperties);
// contactUsRouter.get("/property-details/:slug", propertiesDetails);

module.exports = { contactUsRouter };
