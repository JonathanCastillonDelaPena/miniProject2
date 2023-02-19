const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productModel);
