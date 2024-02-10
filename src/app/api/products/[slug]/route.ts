import { TryCatch } from "@/helpers/TryCatchWrapper";
import ErrorHandler from "@/lib/exceptions";

export const GET = TryCatch(async (req, { params }) => {
  const { slug } = params;
  throw new ErrorHandler("Some Error occured");
});
