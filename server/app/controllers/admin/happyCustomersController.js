const { HappyCustomersModel } = require("../../models/happyCustomersModel");
let fs = require("fs");
let customerInsert = async (req, res) => {
  let insertObj = { ...req.body };
  let obj;

  if (req.file) {
    insertObj["customerImage"] = req.file.filename;
  }

  try {
    let data = await HappyCustomersModel.insertOne(insertObj);
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

let customerView = async (req, res) => {
  let data = await HappyCustomersModel.find();
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.HAPPYCUSTOMERSSTATICPATH,
    data,
  };

  res.send(obj);
};

let customerDelete = async (req, res) => {
  let { id } = req.params;
  let obj;

  let imgView = await HappyCustomersModel.find({ _id: id }).select(
    "customerImage"
  );

  for (let v of imgView) {
    let deletePath = "uploads/happyCustomers/" + v.customerImage;
    fs.unlinkSync(deletePath);
  }
  try {
    let data = await HappyCustomersModel.deleteOne({ _id: id });
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

let customerSingle = async (req, res) => {
  let { id } = req.params;
  let data = await HappyCustomersModel.find({ _id: id });
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.HAPPYCUSTOMERSSTATICPATH,
    data,
  };

  res.send(obj);
};

let customerUpdate = async (req, res) => {
  let insertObj = { ...req.body };
  let { id } = req.params;
  let obj;

  if (req.file) {
    insertObj["customerImage"] = req.file.filename;
    let imgView = await HappyCustomersModel.find({ _id: id }).select(
      "customerImage"
    );
    if (imgView?.propertyTypeImage) {
      let deletePath = "uploads/happyCustomers/" + imgView.customerImage;
      fs.unlinkSync(deletePath);
    }
  }

  try {
    let data = await HappyCustomersModel.updateOne(
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
  customerInsert,
  customerView,
  customerDelete,
  customerSingle,
  customerUpdate,
};
