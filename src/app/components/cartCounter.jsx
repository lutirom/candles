"use client";

import { signal } from "@preact/signals-react";

export const numberOfProductsInCart = signal(0);

export default function CartCounter({ cart }) {
    if (cart) {
        numberOfProductsInCart.value = cart.length;
    }

    return <p className=" rounded-full bg-red-600 text-white flex justify-center items-center leading-none text-xs w-4 h-4">{numberOfProductsInCart}</p>;
}
