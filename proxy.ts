import type { NextRequest } from "next/server";
import { proxy as innerProxy } from "./src/proxy";

export function proxy(request: NextRequest) {
  return innerProxy(request);
}

export default function (request: NextRequest) {
  return innerProxy(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
