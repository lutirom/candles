"use client";
import { useEffect, useState } from "react";

// export const numberOfProductsInCart = signal(0);

export default function CartCounter({ cart }) {
    const [numberOfProductsInCart, setNumberOfProductsInCart] = useState(0);

    useEffect(() => {
        if (cart || Object.keys(cart).length > 0) {
            const totalAmount = Object.values(cart).reduce((accumulator, currProd) => {
                return accumulator + currProd;
            });

            setNumberOfProductsInCart(totalAmount);
        }
    }, [cart]);

    return <p className={`${!cart ? "hidden" : "flex"} cart-counter bg-red-600 text-xs`}>{numberOfProductsInCart}</p>;
}
