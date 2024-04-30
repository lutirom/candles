import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./session";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const config = {
    matcher: "/:path*",
};

export default auth(async (req) => {
    const regEx = new RegExp("^(?!/(?:_next/static|favicon\\.ico|swc\\.js|api|.*\\.(gif|jpe?g|bmp|png))(?:/|$))");

    if (req.nextUrl.pathname.startsWith("/dashboard") && !req.auth) {
        const url = req.url.replace(req.nextUrl.pathname, "/login");
        return Response.redirect(url);
    }

    if (!regEx.test(req.nextUrl.pathname)) {
        return;
    }

    return await updateSession(req);
});
