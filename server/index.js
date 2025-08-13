let express = require("express");
const { default: mongoose } = require("mongoose");
const { adminRouter } = require("./app/routers/admin/adminRoute");
let cors = require("cors");
const { webRouter } = require("./app/routers/web/webRoute");
const { AdminModel } = require("./app/models/adminModel");
require("dotenv").config();

let app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads/accountSetting", express.static("uploads/accountSetting"));
app.use("/uploads/propertyType", express.static("uploads/propertyType"));
app.use("/uploads/happyCustomers", express.static("uploads/happyCustomers"));
app.use("/uploads/properties", express.static("uploads/properties"));
app.use("/uploads/adminProfile", express.static("uploads/adminProfile"));

app.use("/admin", adminRouter);
app.use("/web", webRouter);

mongoose.connect("mongodb://127.0.0.1:27017/urbannest").then(async (res) => {
  let checkAdmin = await AdminModel.find();
  if (checkAdmin.length == 0) {
    AdminModel.insertOne({
      adminEmail: process.env.ADMINEMAIL,
      adminPassword: process.env.ADMINPASSWORD,
    });
  }
  console.log("DB connected");
  app.listen(process.env.PORT);
});
