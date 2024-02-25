"use server";

import { createSession, decrypt, encrypt } from "@/session";
import { cookies } from "next/headers";

export default async function addToCart(id, amount) {
    const session = cookies().get("session")?.value;

    //TODO: find way to handle adding item to cart immediately after session created
    //      this is situation when session wasn't created before hitting button add to cart

    if (!session) {
        createSession();

        return;
    }

    const parsed = await decrypt(session);

    if (parsed.user.cart) {
        parsed.user.cart = parsed.user.cart[id] ? { ...parsed.user.cart, [id]: Number(parsed.user.cart[id]) + Number(amount ? amount : 1) } : { ...parsed.user.cart, [id]: Number(amount ? amount : 1) };
    } else {
        parsed.user.cart = { [id]: Number(amount ? amount : 1) };
    }

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });
}
