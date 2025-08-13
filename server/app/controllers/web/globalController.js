const { AccountSettingModel } = require("../../models/accountSettingModel");
const { PropertiesModel } = require("../../models/propertiesModel");
const { PropertyTypeModel } = require("../../models/propertyTypeModel");

let globalProducts = async (req, res) => {
  let data = await AccountSettingModel.find();

  let obj = {
    status: 1,
    msg: "Data View",
    data,
  };

  res.send(obj);
};

let allProperties = async (req, res) => {
  let { slug } = req.params;

  console.log(slug);

  let slugData = await PropertyTypeModel.findOne({ slug });

  let data = await PropertiesModel.find({ propertyType: slugData._id })
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

let propertiesDetails = async (req, res) => {
  let { slug } = req.params;

  console.log(slug);

  // let slugData = await PropertyTypeModel.findOne({ slug });

  let data = await PropertiesModel.find({ slug })
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

module.exports = { globalProducts, allProperties, propertiesDetails };
