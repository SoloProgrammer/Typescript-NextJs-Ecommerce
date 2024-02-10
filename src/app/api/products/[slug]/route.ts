import { TryCatch } from "@/app/helpers/TryCatchWrapper";
import ErrorHandler from "@/app/lib/exceptions";

export const GET = TryCatch(async (req, { params }) => {
  const { slug } = params;
  throw new ErrorHandler("Some Error occured");
});
