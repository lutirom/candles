import Head from "../components/head";
import { getCartProductsInfo } from "@/app/func/cart";
import Products from "./components/products";
import "./assets/scss/cart-page.scss";
import Link from "next/link";

const cartProducts = await getCartProductsInfo();

const orderTotal = cartProducts
    .reduce((sum, currentProduct) => {
        return sum + currentProduct.price * currentProduct.amount;
    }, 0)
    .toFixed(2);

export default function Cart() {
    if (cartProducts.length === 0) {
        return (
            <div className="cart-page">
                <Head name={"Cart"} />
                <section className="cart">
                    <div className="flex justify-center items-center flex-col">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={0.5}
                            stroke="currentColor"
                            className="w-96 h-96">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        <p className="text-4xl">Your cart is currently empty</p>
                        <Link
                            href="/shop"
                            className="btn border uppercase mt-14 hover:bg-[var(--highlights)] hover:text-white transition-all">
                            Return to shop
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <Head name={"Cart"} />
            <section className="cart">
                <div className="*:mt-4">
                    <Products cartProducts={cartProducts} />
                </div>
                <form action="post">
                    <input
                        type="text"
                        className="mt-7 border py-2 px-4 w-full"
                        placeholder="Coupon code"
                    />
                    <button className="btn mt-4 bg-black text-white text-sm w-full">Apply coupon</button>
                </form>
                <div className="px-4 py-8 mt-7 *:mt-4 bg-gray-50">
                    <p className="text-2xl">Cart Totals</p>
                    <div className="flex">
                        <p className="text-gray-500">Subtotal:</p> <span className="ml-auto">${orderTotal}</span>
                    </div>
                    <div className="flex">
                        <p className="text-gray-500">Shipping:</p> <span className="ml-auto">111</span>
                    </div>
                    <div className="flex">
                        <p className="text-gray-500">Total:</p> <span className="ml-auto">111</span>
                    </div>
                </div>
                <Link
                    href={"/checkout"}
                    className="btn bg-black text-white text-sm w-full uppercase">
                    Proceed to checkout
                </Link>
            </section>
        </div>
    );
}
