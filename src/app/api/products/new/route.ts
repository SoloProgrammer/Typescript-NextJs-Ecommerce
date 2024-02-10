import { TryCatch } from "@/middleware/TryCatchWrapper";
import { Product } from "@/models/product";
import { SuccessResponse } from "@/utils/responses";

export const POST = TryCatch(async (req) => {
  const body = await req.json();
  const newProduct = await new Product({ ...body }).save();
  return SuccessResponse("New Product added", 201, newProduct);
});
