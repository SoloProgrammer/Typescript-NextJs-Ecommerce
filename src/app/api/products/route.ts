import connectDB from "@/lib/connect";
import { TryCatch } from "@/middleware/TryCatchWrapper";
import { Product } from "@/models/product";
import { SuccessResponse } from "@/utils/responses";

connectDB();

export const GET = TryCatch(async (req) => {
  const products = await Product.find({});
  return SuccessResponse("Products fetched", 200, products);
});