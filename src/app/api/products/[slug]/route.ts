import { TryCatch } from "@/middleware/TryCatchWrapper";
import { Product } from "@/models/product";
import { ErrorResponse, SuccessResponse } from "@/utils/responses";

type paramsType = {
  params: {
    slug: String;
  };
};

export const GET = TryCatch(async (req, { params }: paramsType) => {
  const { slug } = params;

  const product = await Product.findOne({ slug });

  if (!product) return ErrorResponse("Product not found!", 404);

  return SuccessResponse("Slug extracted", 200, product);
});

export const PUT = TryCatch(async (req, { params }: paramsType) => {
  const updatedData = await req.json();

  const { slug } = params;
  const udpateStats = await Product.updateOne(
    { slug },
    { $set: { ...updatedData } }
  );

  return SuccessResponse("Product updated successfully!", 201, { udpateStats });
});
