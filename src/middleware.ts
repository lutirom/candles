import { NextRequest } from "next/server";
import { updateSession } from "./session";

export const config = {
    matcher: "/:path*",
};

export async function middleware(req: NextRequest) {
    const regEx = new RegExp("^(?!/(?:_next/static|favicon\\.ico|swc\\.js|api|.*\\.(gif|jpe?g|bmp|png))(?:/|$))");

    if (!regEx.test(req.nextUrl.pathname)) {
        return;
    }

    return await updateSession(req);
}
