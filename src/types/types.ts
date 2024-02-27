import { NextRequest } from "next/server";

export type HandlerType = (req: NextRequest, ...args: any[]) => void;