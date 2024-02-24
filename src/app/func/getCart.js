"use server";

import { decrypt, getSession } from "@/session";

export default async function getCart() {
    const session = await getSession();

    const parsed = await decrypt(session);

    return parsed.user.cart;
}
