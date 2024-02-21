import { NextRequest } from "next/server";
import { updateSession } from "./session";

export async function middleware(req: NextRequest) {
    return await updateSession(req);
}
