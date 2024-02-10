import { NextRequest } from "next/server";
import { ErrorResponse } from "../utils/responses";
import ErrorHandler from "../lib/exceptions";
import { HandlerType } from "@/types/types";

export const TryCatch =
  (handler: HandlerType) =>
  async (req: NextRequest, ...args: any[]) => {
    return Promise.resolve(handler(req, ...args)).catch((err: ErrorHandler) => {
      return ErrorResponse(err.message, err.statusCode || 500);
    });
  };
