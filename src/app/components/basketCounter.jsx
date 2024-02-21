"use client";

import { signal } from "@preact/signals-react";
import setProductsInBasket from "../func/setProductsInBasket";

export const productsInBasket = signal(0);

export default function BasketCounter() {
    setProductsInBasket(productsInBasket);

    return <p className=" rounded-full bg-red-600 text-white flex justify-center items-center leading-none text-xs w-4 h-4">{productsInBasket}</p>;
}
