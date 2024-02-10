import ErrorHandler from "@/lib/exceptions";
import { HandlerType } from "@/types/types";
import { ErrorResponse } from "@/utils/responses";
import { NextRequest } from "next/server";

export const TryCatch =
  (handler: HandlerType) =>
  async (req: NextRequest, ...args: any[]) => {
    return Promise.resolve(handler(req, ...args)).catch((err: ErrorHandler) => {
      return ErrorResponse(
        err.message || "Internal server error",
        err.statusCode || 500
      );
    });
  };
