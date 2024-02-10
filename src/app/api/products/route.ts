import { TryCatch } from "@/helpers/TryCatchWrapper";
import { connectDB } from "@/lib/connect";
import { Product } from "@/models/product";
import { SuccessResponse } from "@/utils/responses";
import { NextRequest } from "next/server";

connectDB();
export const GET = TryCatch(async (req: NextRequest) => {
  const products = await Product.find({});
  return SuccessResponse("All products fetched", 200, products);
});
