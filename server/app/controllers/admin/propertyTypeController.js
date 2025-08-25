const { PropertyTypeModel } = require("../../models/propertyTypeModel");
let fs = require("fs");
let propertyTypeInsert = async (req, res) => {
  let insertObj = { ...req.body };
  let obj;

  if (req.file) {
    insertObj["propertyTypeImage"] = req.file.path;
  }



  try {
    let data = await PropertyTypeModel.insertOne(insertObj);
    obj = {
      status: 1,
      msg: "Property Type Saved",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Property Type Not Saved",
      error,
    };
  }

  res.send(obj);
};

let propertyTypeView = async (req, res) => {
  let data = await PropertyTypeModel.find();
  let obj = {
    status: 1,
    msg: "Data View",
    // staticPath: process.env.PROPERTYTYPESTATICPATH,
    data,
  };

  res.send(obj);
};

let propertyTypeDelete = async (req, res) => {
  let { id } = req.params;
  let obj;

  let imgView = await PropertyTypeModel.find({ _id: id }).select(
    "propertyTypeImage"
  );

  for (let v of imgView) {
    let deletePath = "uploads/propertyType/" + v.propertyTypeImage;
    fs.unlinkSync(deletePath);
  }
  try {
    let data = await PropertyTypeModel.deleteOne({ _id: id });
    obj = {
      status: 1,
      msg: "Deleted",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Not Deleted",
      error,
    };
  }

  res.send(obj);
};

let propertyTypeSingle = async (req, res) => {
  let { id } = req.params;
  let data = await PropertyTypeModel.find({ _id: id });
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.PROPERTYTYPESTATICPATH,
    data,
  };

  res.send(obj);
};

let propertyTypeUpdate = async (req, res) => {
  let insertObj = { ...req.body };
  let { id } = req.params;
  let obj;


  if (req.file) {
    insertObj["propertyTypeImage"] = req.file.path;
  }

  try {
    let data = await PropertyTypeModel.updateOne(
      { _id: id },
      {
        $set: insertObj,
      }
    );
    obj = {
      status: 1,
      msg: "Product Type Updated",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Product Type Not Updated",
      error,
    };
  }

  res.send(obj);
};

module.exports = {
  propertyTypeInsert,
  propertyTypeView,
  propertyTypeDelete,
  propertyTypeSingle,
  propertyTypeUpdate,
};
