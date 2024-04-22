"use client";

import Image from "next/image";
import { hideProduct, showProduct } from "../../func/adminProducts";
import { useState } from "react";

export default function ProductItem({ product }) {
    const [hidden, setHidden] = useState(product.status === 1 ? false : true);

    async function changeStatus(product) {
        if (product.status === 1) {
            const status = await hideProduct(product.id);

            if (status === "success") {
                product.status = 0;
                setHidden(!hidden);
            }

            return;
        }

        const status = await showProduct(product.id);

        if (status === "success") {
            product.status = 1;
            setHidden(!hidden);
        }
    }

    return (
        <div className="product flex justify-between items-center p-3 shadow-md">
            <Image
                src={product.img}
                height={150}
                width={150}
            />
            <p>{product.name}</p>
            <p>{product.price} грн</p>
            <div>
                <button className="btn w-24 border hover:bg-black hover:text-white">Edit</button>
                {hidden ? (
                    <button
                        onClick={() => changeStatus(product)}
                        className="leading-none text-sm w-24 mt-2 px-6 py-2 border border-green-400 hover:bg-green-500 hover:text-white">
                        Show
                    </button>
                ) : (
                    <button
                        onClick={() => changeStatus(product)}
                        className="leading-none text-sm w-24 mt-2 px-6 py-2 border border-orange-400 hover:bg-orange-500 hover:text-white">
                        Hide
                    </button>
                )}
            </div>
        </div>
    );
}
