const { PropertiesModel } = require("../../models/propertiesModel");

let propertiesInsert = async (req, res) => {
  let obj = { ...req.body };

  // if (req.files) {
  //   if (req.files.singleImage) {
  //     obj["singleImage"] = req.files.singleImage[0].filename;
  //   }
  //   if (req.files.multipleImages) {
  //     obj["multipleImages"] = req.files.multipleImages.map(
  //       (items) => items.filename
  //     );
  //   }
  // }
  if (req.files) {
    if (req.files.singleImage) {
      obj["singleImage"] = req.files.singleImage[0].path;
    }
    if (req.files.multipleImages) {
      obj["multipleImages"] = req.files.multipleImages.map(
        (items) => items.path
      );
    }
  }

  let data = await PropertiesModel.insertOne(obj);

  obj = {
    status: 1,
    msg: "Properties Save",
    data,
  };
  //   console.log(obj);

  res.send(obj);
};

let propertiesView = async (req, res) => {
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

let propertiesSingle = async (req, res) => {
  let { id } = req.params;
  let data = await PropertiesModel.find({ _id: id })
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

module.exports = { propertiesInsert, propertiesView, propertiesSingle };
