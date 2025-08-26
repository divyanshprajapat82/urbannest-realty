let express = require("express");
const { default: mongoose } = require("mongoose");
const { adminRouter } = require("./app/routers/admin/adminRoute");
let cors = require("cors");
const { webRouter } = require("./app/routers/web/webRoute");
const { AdminModel } = require("./app/models/adminModel");
const dotenv = require("dotenv");
dotenv.config();
// const dotenv = require("dotenv")
// const { cloudinary } = require("cloudinary")
// import { v2 as cloudinary } from "cloudinary";
// const cloudinary = require("cloudinary").v2;
require("dotenv").config();

let app = express();
app.use(express.json());
app.use(cors());

// app.use(
//   cors({
//     // origin: 'https://urbannest-realty.vercel.app/',
//     origin: [
//       "https://urbannest-realty.vercel.app",
//       "https://urbannest-realty-admin.vercel.app",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use(cors({
//   // origin: 'https://urbannest-realty.vercel.app/',
//   origin: ['https://urbannest-realty.vercel.app','https://urbannest-realty-admin.vercel.app'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export default cloudinary

// console.log(
//   process.env.CLOUDINARY_CLOUD_NAME,
//   process.env.CLOUDINARY_API_KEY,
//   process.env.CLOUDINARY_API_SECRET
// );

app.use("/uploads/accountSetting", express.static("uploads/accountSetting"));
app.use("/uploads/propertyType", express.static("uploads/propertyType"));
app.use("/uploads/happyCustomers", express.static("uploads/happyCustomers"));
app.use("/uploads/properties", express.static("uploads/properties"));
app.use("/uploads/adminProfile", express.static("uploads/adminProfile"));

app.use("/admin", adminRouter);
app.use("/web", webRouter);

// mongoose.connect("mongodb://127.0.0.1:27017/urbannest").then(async (res) => {
mongoose.connect("mongodb://127.0.0.1:27017/urbannest").then(async (res) => {
  // mongoose.connect("mongodb+srv://divyanshprajapat82:Y5EqfC8M4jOqjNWk@cluster0.8jno2cn.mongodb.net/").then(async (res) => {
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
