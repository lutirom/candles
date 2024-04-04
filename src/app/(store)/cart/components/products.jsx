"use client";

import { deleteFromCart } from "@/app/(store)/func/cart";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products({ cartProducts }) {
    useEffect(() => {
        setProducts(
            cartProducts.map((product) => {
                return (
                    <div
                        className="border p-4 flex gap-4"
                        key={product.id}>
                        <Image
                            src={product.img}
                            width={75}
                            height={125}
                        />
                        <div className="des self-center">
                            <p>{product.name}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Quantity: <span className="ml-8">{product.amount}</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Subtotal: <span className="ml-8">${(product.amount * product.price).toFixed(2)}</span>
                            </p>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="remove w-4 h-4 ml-auto text-gray-500 cursor-pointer"
                            onClick={() => {
                                deleteFromCart(product.id);
                            }}>
                            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                        </svg>
                    </div>
                );
            })
        );
    }, [cartProducts]);

    const productsHtml = cartProducts.map((product) => {
        return (
            <div
                className="border p-4 flex gap-4"
                key={product.id}>
                <Image
                    src={product.img}
                    width={75}
                    height={125}
                />
                <div className="des self-center">
                    <p>{product.name}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        Quantity: <span className="ml-8">{product.amount}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Subtotal: <span className="ml-8">${(product.amount * product.price).toFixed(2)}</span>
                    </p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="remove w-4 h-4 ml-auto text-gray-500 cursor-pointer"
                    onClick={() => {
                        deleteFromCart(product.id);
                    }}>
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
            </div>
        );
    });
    const [products, setProducts] = useState(productsHtml.length > 0 ? productsHtml : undefined);

    return products;
}
