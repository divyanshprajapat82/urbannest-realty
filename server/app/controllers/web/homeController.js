const { HappyCustomersModel } = require("../../models/happyCustomersModel");
const { LocalitiesModel } = require("../../models/localitiesModel");
// const { LocalitiesModel } = require("../../models/localitiesModel");
const { PropertiesModel } = require("../../models/propertiesModel");
const { PropertyTypeModel } = require("../../models/propertyTypeModel");

let homeProducts = async (req, res) => {
  let data = await PropertiesModel.find()
    .populate("propertyType", "propertyTypeName")
    .populate("locality", "name");
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.PROPERTIESSTATICPATH,
    data,
  };

  res.send(obj);
};

let homeLocalitiesView = async (req, res) => {
  let data = await LocalitiesModel.find().sort({ _id: -1 });
  let obj = {
    status: 1,
    msg: "Data View",
    data,
  };

  res.send(obj);
};

let homePropertyType = async (req, res) => {
  let data = await PropertyTypeModel.find();
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.PROPERTYTYPESTATICPATH,
    data,
  };

  res.send(obj);
};

let homeHappyCustomer = async (req, res) => {
  // let { imageClick } = req.params;
  // let { imageClick } = req.query;
  let imageClick = req.query.imageClick || null;
  console.log(imageClick);
  let data;
  // req.query ?? (await HappyCustomersModel.find().select("_id")[0]);

  if (imageClick) {
    data = await HappyCustomersModel.find({ customerImage: imageClick });
  } else {
    data = await HappyCustomersModel.find().limit(1);
  }

  let dataName = await HappyCustomersModel.find();
  console.log(dataName[0]);
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.HAPPYCUSTOMERSSTATICPATH,
    data,
  };

  res.send(obj);
};

let homeHappyCustomerImg = async (req, res) => {
  let data = await HappyCustomersModel.find();

  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.HAPPYCUSTOMERSSTATICPATH,
    data,
  };

  res.send(obj);
};

let homeJodhpurLocalities = async (req, res) => {
  let data = await LocalitiesModel.find({
    city: { $regex: "^jodhpur$", $options: "i" },
  });

  let obj = {
    status: 1,
    msg: "Data View",
    data,
  };

  res.send(obj);
};

module.exports = {
  homeProducts,
  homeLocalitiesView,
  homePropertyType,
  homeHappyCustomer,
  homeHappyCustomerImg,
  homeJodhpurLocalities,
};
