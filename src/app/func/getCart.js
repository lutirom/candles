"use server";

import { decrypt, getSession } from "@/session";

export default async function getCart() {
    const session = await getSession();

    if (!session) return;

    const parsed = await decrypt(session);
    // console.log("🚀 ~ getCart ~ parsed:", parsed);

    return parsed.user.cart;
}
