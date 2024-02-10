import { TryCatch } from "@/app/helpers/TryCatchWrapper";
import { connectDB } from "@/app/lib/connect";
import { Product } from "@/app/models/product";
import { SuccessResponse } from "@/app/utils/responses";
import { NextRequest } from "next/server";

connectDB();
export const GET = TryCatch(async (req: NextRequest) => {
  const products = await Product.find({});
  return SuccessResponse("All products fetched", 200, products);
});
