"use client";

import addToCart from "@/app/shop/func/addToCart";
import { useState } from "react";

export default function ProductButtons({ productId }) {
    const [quantity, setQuantity] = useState(1);

    console.log("Button render");

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        if (quantity === 1) {
            return;
        }

        setQuantity(quantity - 1);
    }

    function handleInput(event) {
        setQuantity(Number(event.target.value));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const amount = formData.get("amount");

        addToCart(productId, amount);
    }

    return (
        <form
            name="addToCart"
            className="cart-buttons flex gap-6 h-14 *:h-full"
            onSubmit={handleSubmit}>
            <div className="quantity w-fit p-2 border *:inline leading-none text-gray-500 ">
                <button
                    className="w-8 h-full text-lg"
                    onClick={decrement}
                    type="button">
                    -
                </button>
                <input
                    type="number"
                    name="amount"
                    className="w-10 h-full text-center "
                    value={quantity}
                    onInput={handleInput}
                />
                <button
                    className="w-8 h-full text-lg"
                    onClick={increment}
                    type="button">
                    +
                </button>
            </div>
            <button
                type="submit"
                className="add-cart black-btn uppercase">
                Add to cart
            </button>
        </form>
    );
}
