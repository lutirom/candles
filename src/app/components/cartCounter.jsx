"use client";

import { signal } from "@preact/signals-react";

export const numberOfProductsInCart = signal(0);

export default function CartCounter({ cart }) {
    if (cart) {
        const totalAmount = Object.values(cart).reduce((accumulator, currProd) => {
            return accumulator + currProd;
        });

        numberOfProductsInCart.value = totalAmount;
    }

    return <p className={`${!cart ? "hidden" : "flex"} cart-counter bg-red-600 text-xs`}>{numberOfProductsInCart}</p>;
}
