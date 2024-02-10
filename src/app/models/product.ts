import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: [true, "Product name is required"] },
  price: { type: Number, reqired: [true, "Product price is required"] },
  image: { type: String },
});

export const Product =
  mongoose.models["Product"] || model("Product", productSchema);
