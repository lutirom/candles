"use server";

import prisma from "@/app/lib/prisma";
import { createSession, decrypt, encrypt, getSession } from "@/session";
import { cookies } from "next/headers";

export async function getCart() {
    const session = await getSession();

    if (!session) return;

    const parsed = await decrypt(session);

    return parsed.user.cart;
}

export async function getCartProductsInfo() {
    console.log("Getting Cart Products");

    const cart = await getCart();
    console.log("🚀 ~ getCartProductsInfo ~ cart:", cart);

    if (!cart) {
        return;
    }

    const productsId = Object.keys(cart).map((product) => {
        return Number(product);
    });

    const productsInfo = await prisma.products.findMany({
        where: {
            id: {
                in: productsId,
            },
        },
    });

    productsInfo.map((product) => {
        return (product.amount = cart[product.id]);
    });

    return productsInfo;
}

export async function addToCart(id, amount) {
    let session = await getSession();

    if (!session) {
        const res = await createSession();
        const newSession = res.cookies.get("session").value;

        session = newSession;
    }

    const parsed = await decrypt(session);

    if (parsed.user.cart) {
        parsed.user.cart = parsed.user.cart[id] ? { ...parsed.user.cart, [id]: Number(parsed.user.cart[id]) + Number(amount ? amount : 1) } : { ...parsed.user.cart, [id]: Number(amount ? amount : 1) };
    } else {
        parsed.user.cart = { [id]: Number(amount ? amount : 1) };
    }

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    try {
        cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });

        return true;
    } catch (err) {
        console.error("there is an error - ", err);

        return false;
    }
}

export async function deleteFromCart(id) {
    const session = await getSession();

    const parsed = await decrypt(session);

    delete parsed.user.cart[id];

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });
}

export async function clearCart() {
    const session = await getSession();

    const parsed = await decrypt(session);

    delete parsed.user.cart;

    const expires = new Date(new Date(Date.now() + 259200 * 1000));

    cookies().set("session", await encrypt(parsed), { expires, httpOnly: true });
}
