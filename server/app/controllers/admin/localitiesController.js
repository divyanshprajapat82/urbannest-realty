const { LocalitiesModel } = require("../../models/localitiesModel");

let localitiesInsert = async (req, res) => {
  let { name, city, description } = req.body;
  let obj;
  try {
    let insertObj = {
      name,
      city,
      description,
      status: true,
    };

    let data = await LocalitiesModel.insertOne(insertObj);

    obj = {
      status: 1,
      msg: "Added",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Not Added",
    };
  }

  res.send(obj);
};

let localitiesView = async (req, res) => {
  let data = await LocalitiesModel.find().sort({ _id: -1 });
  let obj = {
    status: 1,
    msg: "Data View",
    data,
  };

  res.send(obj);
};

let localitiesDelete = async (req, res) => {
  let { id } = req.params;
  let obj;
  try {
    let data = await LocalitiesModel.deleteOne({ _id: id });
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

let localitiesSingle = async (req, res) => {
  let { id } = req.params;
  let obj;
  try {
    let data = await LocalitiesModel.findOne({ _id: id });
    obj = {
      status: 1,
      msg: "single Data",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Not Data",
      error,
    };
  }

  res.send(obj);
};

let localitiesUpdate = async (req, res) => {
  let { id } = req.params;
  let { name, city, description } = req.body;
  let obj;
  try {
    let insertObj = {
      name,
      city,
      description,
      status: true,
    };

    let data = await LocalitiesModel.updateOne(
      { _id: id },
      { $set: insertObj }
    );

    obj = {
      status: 1,
      msg: "Updated",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Not Updated",
    };
  }

  res.send(obj);
};

module.exports = {
  localitiesInsert,
  localitiesView,
  localitiesDelete,
  localitiesSingle,
  localitiesUpdate,
};
