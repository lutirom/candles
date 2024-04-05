"use client";

import { addToCart } from "@/app/(store)/func/cart";
import { useState } from "react";

export default function ProductButtons({ productId }) {
    const [quantity, setQuantity] = useState(1);

    const [isAdded, setIsAdded] = useState(false);

    const [notAdded, setNotAdded] = useState(false);

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

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const amount = formData.get("amount");

        const addedToCart = await addToCart(productId, amount);

        if (addedToCart) {
            setIsAdded(true);

            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        } else {
            setNotAdded(true);

            setTimeout(() => {
                setNotAdded(false);
            }, 2000);
        }
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
                //TODO: задати фіксовану ширину кнопці
                type="submit"
                className={`add-cart black-btn uppercase ${isAdded ? "added" : undefined} ${notAdded ? "not-added" : undefined}`}>
                Add to cart
            </button>
        </form>
    );
}
