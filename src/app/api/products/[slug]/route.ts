import { TryCatch } from "@/middleware/TryCatchWrapper";
import ErrorHandler from "@/lib/exceptions";
import { SuccessResponse } from "@/utils/responses";

export const GET = TryCatch(async (req, { params }) => {
  const { slug } = params;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  if (!page) throw new ErrorHandler("page query not found", 400);
  return SuccessResponse("Success", 200, { page, slug });
});
