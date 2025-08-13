const { default: mongoose } = require("mongoose");
const { default: slugify } = require("slugify");

let propertiesSchema = new mongoose.Schema(
  {
    propertyTitle: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    propertyType: {
      type: mongoose.Types.ObjectId,
      ref: "PropertyType",
    },
    locality: {
      type: mongoose.Types.ObjectId,
      ref: "Localities",
    },
    price: {
      type: Number,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    exactAddress: {
      type: String,
      required: true,
    },
    locationMap: {
      type: String,
      required: true,
    },
    propertyStatus: {
      type: String,
      enum: ["1", "2"],
    },
    singleImage: String,
    multipleImages: Array,
    status: Boolean,
    slug: String,
  },
  { timestamps: true }
);

propertiesSchema.pre("save", function (next) {
  this.slug = slugify(this.propertyTitle, { lower: true });
  next();
});

let PropertiesModel = mongoose.model("Properties", propertiesSchema);
module.exports = { PropertiesModel };
