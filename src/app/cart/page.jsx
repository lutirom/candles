import Image from "next/image";
import Head from "../components/head";
import getCartProductsInfo from "../func/getCartProductsInfo";
import "./assets/scss/cart-page.scss";
import Link from "next/link";

const cartProductsInfo = await getCartProductsInfo();

const orderInfo = cartProductsInfo.map((product) => {
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
                className="remove w-4 h-4 ml-auto text-gray-500">
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
        </div>
    );
});

const orderTotal = cartProductsInfo
    .reduce((sum, currentProduct) => {
        return sum + currentProduct.price * currentProduct.amount;
    }, 0)
    .toFixed(2);

export default function Cart(second) {
    return (
        <div className="cart-page">
            <Head name={"Cart"} />
            <section className="cart">
                <div className="*:mt-4">{orderInfo}</div>
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
                <Link href={'/checkout'} className="btn bg-black text-white text-sm w-full uppercase">Proceed to checkout</Link>
            </section>
        </div>
    );
}
