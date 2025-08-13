const { default: mongoose } = require("mongoose");
const { default: slugify } = require("slugify");

let propertyTypeSchema = new mongoose.Schema(
  {
    propertyTypeName: {
      type: String,
      required: true,
    },
    propertyTypeImage: {
      type: String,
    },
    status: Boolean,
    slug: String,
  },
  { timestamps: true }
);

propertyTypeSchema.pre("save", function (next) {
  this.slug = slugify(this.propertyTypeName, { lower: true });
  next();
});

let PropertyTypeModel = mongoose.model("PropertyType", propertyTypeSchema);
module.exports = { PropertyTypeModel };
