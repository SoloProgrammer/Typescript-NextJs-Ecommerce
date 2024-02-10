import { NextResponse } from "next/server";

export const ErrorResponse = (error: string, status: number) => {
  return new NextResponse(
    JSON.stringify({ error: { message: error }, status }),
    {
      status,
    }
  );
};
export const SuccessResponse = (
  message: string,
  status: number,
  data?: any
) => {
  return new NextResponse(JSON.stringify({ message, status, data }), {
    status,
  });
};
