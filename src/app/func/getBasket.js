"use server";

import { decrypt, getSession } from "@/session";

export default async function getBasket() {
    const session = await getSession();

    const parsed = await decrypt(session);
    console.log("🚀 ~ getBasket ~ parsed:", parsed);

    // const basket = parsed.user.basket;
    return parsed.user.basket;
}
