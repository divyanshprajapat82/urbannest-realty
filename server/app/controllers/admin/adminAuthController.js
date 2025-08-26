const { AdminModel } = require("../../models/adminModel");

let adminLogin = async (req, res) => {
  let checkAdmin = await AdminModel.findOne(req.body);

  let resObj;



  if (checkAdmin) {
    resObj = {
      status: 1,
      adminId: checkAdmin._id,
      msg: "loged In",
    };
  } else {
    resObj = {
      status: 0,
      msg: "Invalid UserName or Password!",
    };
  }

  res.send(resObj);
};
let adminView = async (req, res) => {
  let data = await AdminModel.find();

  resObj = {
    status: 1,
    msg: "Loged View",
    // staticPath: process.env.ADMINPROFILESTATICPATH,
    // staticPath: req.file.path,
    data,
  };

  res.send(resObj);
};

let adminProfile = async (req, res) => {
  let { adminName, adminPhone } = req.body;
  let insertObj = { adminName, adminPhone };
  let obj;

  // console.log(req.file.path);


  // if (req.file) {
  //   insertObj["adminImage"] = req.file.fileName;
  // }

  if (req.file) {
    insertObj["adminImage"] = req.file.path; // Cloudinary returns URL in .path
  }

  // if (req.file) {
  //   insertObj["adminImage"] = req.file.filename;

  //   let imgView = await AdminModel.find().select("adminImage");
  //   if (imgView?.LogoImage) {
  //     let deletePath = "uploads/adminProfile/" + imgView.LogoImage;
  //     fs.unlinkSync(deletePath);
  //   }
  // }

  try {
    objData = {};
    let data = await AdminModel.updateOne(objData, { $set: insertObj });
    obj = {
      status: 1,
      msg: "Profile Saved",
      // staticPath: req.file.path,
      // imageUrl: req.file.path,
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Profile Not Saved",
      error,
    };
  }

  res.send(obj);
};

module.exports = { adminLogin, adminView, adminProfile };
