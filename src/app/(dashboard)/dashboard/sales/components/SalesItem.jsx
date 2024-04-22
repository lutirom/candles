"use client";

import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SalesItem({ order }) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    function openDetails() {
        setDetailsOpen(!detailsOpen);
    }

    return (
        <div
            className={`order relative border-b cursor-pointer ${detailsOpen ? "opened" : undefined}`}
            onClick={openDetails}>
            <div className="py-1 px-4 grid grid-cols-5 items-center">
                <p>{`${order.client_name} ${order.client_lastname}`} </p>
                <p>01.01</p>
                <p>{order.delivery_info}</p>
                <p className="px-2 py-1 w-fit justify-self-center text-orange-600 bg-orange-300 leading-none rounded-md">Status</p>
                <p className="justify-self-center">
                    {order.products.reduce((accumulator, product) => {
                        return accumulator + product.amount * product.product.price;
                    }, 0)}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${detailsOpen ? "rotate-180" : undefined} w-6 h-6 absolute right-5`}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
            <div className={`order-details`}>
                <div className="grid grid-cols-5 px-4 py-2 bg-gray-50 text-gray-500">
                    <p className="col-span-4">ProductName</p>
                    <p className="justify-self-center">Price</p>
                </div>
                {order.products.map((product) => {
                    return (
                        <div
                            className="grid grid-cols-5 ml-3 my-3 p-1"
                            key={uuidv4()}>
                            <p className="col-span-4">{product.product.name}</p>
                            <p className="justify-self-center">{`${product.amount} x ${product.product.price}`}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
