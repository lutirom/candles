"use client";

import "@/app/assets/scss/_cart-menu.scss";

import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function CartMenu({ cartProductsInfo, cartOpen, toggleCart }) {
    console.log("renderCartMenu");

    const orderTotal = cartProductsInfo
        ?.reduce((sum, currentProduct) => {
            return sum + currentProduct.price * currentProduct.amount;
        }, 0)
        .toFixed(2);

    const orderInfo = cartProductsInfo?.map((product) => {
        return (
            <div
                className="product"
                key={product.id}>
                <Image
                    src={product.img}
                    width={75}
                    height={150}
                />
                <div>
                    <p>{product.name}</p>
                    <p className="text-gray-500 text-sm">
                        {product.amount} <span className="text-sm">x</span> ${product.price}
                    </p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="remove w-4 h-4 ml-auto text-gray-500">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
            </div>
        );
    });

    return (
        <div className={`${cartOpen ? "active" : undefined} cart-menu`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-8 h-8 ml-auto"
                onClick={toggleCart}>
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
            <p className={`${baskerville.className} text-lg font-semibold`}>Shopping Cart</p>
            <div className="h-1/2 md:h-3/5 overflow-y-scroll">{orderInfo}</div>
            <p className="mt-4">
                <span className="font-semibold">Subtotal:</span> ${orderTotal}
            </p>
            <div className="cart-btns mt-4 *:p-2 *:w-full">
                <Link
                    href={"/checkout"}
                    className="rounded-full block text-center bg-black text-white"
                    onClick={toggleCart}>
                    Checkout
                </Link>
                <Link
                    href={"/cart"}
                    className="rounded-full block text-center border mt-4"
                    onClick={toggleCart}>
                    View cart
                </Link>
            </div>
        </div>
    );
}
