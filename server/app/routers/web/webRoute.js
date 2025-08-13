let express = require("express");
const { homeRouter } = require("./homeRoute");
const { globalRouter } = require("./globalRouter");
const { contactUsRouter } = require("./contactUsRouter");

let webRouter = express.Router();

webRouter.use("/home", homeRouter);
webRouter.use("/global", globalRouter);
webRouter.use("/contact-us", contactUsRouter);

module.exports = { webRouter };
