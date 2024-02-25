"use server";

import { v4 as uuidv4 } from "uuid";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function createSession() {
    const user = { id: uuidv4() };
    const res = NextResponse.next();

    const expires = new Date(Date.now() + 259200 * 10000);
    const session = await encrypt({ user, expires });

    res.cookies.set("session", session, { expires, httpOnly: true });

    return res;
}

export async function updateSession(req) {
    const session = req.cookies.get("session")?.value;

    if (!session) {
        return createSession();
    }

    // Add new info and update session
    const parsed = await decrypt(session);
    parsed.expires = new Date(new Date(Date.now() + 259200 * 1000));
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });

    // console.log(parsed);

    return res;
}

export async function encrypt(payload) {
    return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("3 days from now").sign(secret);
}

export async function decrypt(input) {
    const { payload } = await jwtVerify(input, secret, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function getSession() {
    const session = cookies().get("session")?.value;

    return session;
}
