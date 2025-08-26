const { AccountSettingModel } = require("../../models/accountSettingModel");
let fs = require("fs");

let accountSettingInsert = async (req, res) => {
  let insertObj = { ...req.body };
  let obj;

  if (req.file) {
    insertObj["LogoImage"] = req.file.path;
  }

  try {
    let data = await AccountSettingModel.insertOne(insertObj);
    obj = {
      status: 1,
      msg: "Setting Saved",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Setting Not Saved",
      error,
    };
  }

  res.send(obj);
};

let accountSettingView = async (req, res) => {
  let data = await AccountSettingModel.find();
  let obj = {
    status: 1,
    msg: "Data View",
    staticPath: process.env.ACCOUNTSETTINGSTATICPATH,
    data,
  };

  res.send(obj);
};

let accountSettingUpdate = async (req, res) => {
  let insertObj = { ...req.body };
  let obj;

  // if (req.file) {
  //   insertObj["LogoImage"] = req.file.filename;
  // }
  // let imgView = await AccountSettingMidel.find().select("LogoImage");

  // for (let v of imgView) {
  //   let deletePath = "uploads/accountSetting/" + v.LogoImage;
  //   // console.log(deletePath);
  //   fs.unlinkSync(deletePath);
  // }

  if (req.file) {
    insertObj["LogoImage"] = req.file.path;

    // let imgView = await AccountSettingModel.find().select("LogoImage");
    // if (imgView?.LogoImage) {
    //   let deletePath = "uploads/accountSetting/" + imgView.LogoImage;
    //   fs.unlinkSync(deletePath);
    // }
  }

  try {
    let objData = {};
    let data = await AccountSettingModel.updateOne(objData, {
      $set: insertObj,
    });
    obj = {
      status: 1,
      msg: "Setting Updated",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Setting Not Updated",
      error,
    };
  }

  res.send(obj);
};
module.exports = {
  accountSettingInsert,
  accountSettingView,
  accountSettingUpdate,
};
