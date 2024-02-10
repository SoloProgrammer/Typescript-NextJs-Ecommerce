import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required!"],
  },
  qty: {
    type: Number,
    required: [true, "Product quantity is required!"],
  },
  img: {
    type: String,
    required: [true, "Product image is required!"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required!"],
  },
  slug: {
    type: String,
    required: [true, "Product slug is required!"],
  },
});

export const Product = models["Product"] || model("Product", ProductSchema);
