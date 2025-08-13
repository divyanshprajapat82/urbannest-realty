const { ContactUsModel } = require("../../models/contactUsMsgModel");

let contactUsInsert = async (req, res) => {
  let { contactName, contactEmail, contactPhone, contactMessage } = req.body;
  let obj;
  try {
    let insertObj = {
      contactName,
      contactEmail,
      contactPhone,
      contactMessage,
    };
    let data = await ContactUsModel.insertOne(insertObj);
    obj = {
      status: 1,
      msg: "Done!",
      data,
    };
  } catch (error) {
    obj = {
      status: 0,
      msg: "Not Done!",
    };
  }

  res.send(obj);
};

module.exports = { contactUsInsert };
