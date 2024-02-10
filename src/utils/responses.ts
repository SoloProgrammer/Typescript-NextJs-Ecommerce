import { NextResponse } from "next/server";

export const SuccessResponse = (message: string, status: number, data: any) =>
  new NextResponse(JSON.stringify({ message, status, data }), { status });

export const ErrorResponse = (message: string, status: number) => {
  return new NextResponse(JSON.stringify({ message, status }), { status });
};
