"use server";

import { createSession, decrypt, encrypt } from "@/session";
import { cookies } from "next/headers";

export default async function addToCart(id) {
    const session = cookies().get("session")?.value;

    //TODO: find way to handle adding item to cart immediately after session created
    //      this is situation when session wasn't created before hitting button add to cart

    if (!session) {
        createSession();

        return;
    }

    const parsed = await decrypt(session);

    parsed.user.cart = parsed.user.cart !== undefined ? [...parsed.user.cart, id] : [id];

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });
}
