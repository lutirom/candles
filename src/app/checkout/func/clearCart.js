"use server";

import { decrypt, encrypt, getSession } from "@/session";
import { cookies } from "next/headers";

export default async function clearCart() {
    const session = await getSession();

    const parsed = await decrypt(session);

    delete parsed.user.cart;

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });
}
