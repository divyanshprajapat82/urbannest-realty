const { ContactUsModel } = require("../../models/contactUsMsgModel");
const { HappyCustomersModel } = require("../../models/happyCustomersModel");
const { LocalitiesModel } = require("../../models/localitiesModel");
const { PropertiesModel } = require("../../models/propertiesModel");
const { PropertyTypeModel } = require("../../models/propertyTypeModel");

let dashboardData = async (req, res) => {
  let localities = await LocalitiesModel.find();
  let properties = await PropertiesModel.find();
  let propertyTye = await PropertyTypeModel.find();
  let customers = await HappyCustomersModel.find();
  let contactUs = await ContactUsModel.find();

  let data = {
    localities,
    properties,
    propertyTye,
    customers,
    contactUs,
  };

  let obj = {
    status: 1,
    msg: "Dashboard Data",
    data,
  };

  res.send(obj);
};

let contactUsSingleView = async (req, res) => {
  let { id } = req.params;
  let data = await ContactUsModel.find({ _id: id });
  let obj = {
    status: 1,
    msg: "Dashboard Data",
    data,
  };

  res.send(obj);
};

module.exports = { dashboardData, contactUsSingleView };
