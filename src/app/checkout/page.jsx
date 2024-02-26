import Head from "../components/head";
import "./assets/checkout.scss";
import OpeningBlock from "./components/OpeningBlock";
import { Libre_Baskerville } from "next/font/google";
import getCartProductsInfo from "../func/getCartProductsInfo";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const cartProductsInfo = await getCartProductsInfo();

const orderInfo = cartProductsInfo.map((product) => {
    return (
        <div
            className="flex justify-between py-2 border-b"
            key={product.id}>
            <span>
                {product.name}({product.amount})
            </span>{" "}
            <span className="justify-self-end">${(product.amount * product.price).toFixed(2)}</span>
        </div>
    );
});

const orderTotal = cartProductsInfo
    .reduce((sum, currentProduct) => {
        return sum + currentProduct.price * currentProduct.amount;
    }, 0)
    .toFixed(2);

export default function Checkout() {
    return (
        <div className="checkout-page">
            <Head name={"Checkout"} />
            <section className="checkout">
                <OpeningBlock />
                <form
                    className="checkout-form"
                    action="post">
                    <div className="credentials">
                        <p className={`${baskerville.className} pb-2 text-xl tracking-tighter border-b`}>Billing details</p>
                        <div className="name-block">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="mt-7 block">
                                    First name*
                                </label>
                                <input
                                    type="text"
                                    className="block p-3 border w-full mt-4"
                                    name="first-name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="mt-7 block">
                                    Last name*
                                </label>
                                <input
                                    type="text"
                                    className="block p-3 border w-full mt-4"
                                    name="last-name"
                                />
                            </div>
                        </div>

                        <label
                            htmlFor="company-name"
                            className="mt-7 block">
                            Company name (optional)
                        </label>
                        <input
                            type="text"
                            className="block p-3 border w-full mt-4"
                            name="company-name"
                        />
                        <label
                            htmlFor="country"
                            className="mt-7 block">
                            Country / Region
                        </label>
                        <input
                            type="text"
                            className="block p-3 border w-full mt-4"
                            name="country"
                        />
                        <label
                            htmlFor="city"
                            className="mt-7 block">
                            City
                        </label>
                        <input
                            type="text"
                            className="block p-3 border w-full mt-4"
                            name="city"
                        />
                        <label
                            htmlFor="address"
                            className="mt-7 block">
                            Address
                        </label>
                        <input
                            type="text"
                            className="block p-3 border w-full mt-4"
                            name="address"
                        />
                        <label
                            htmlFor="email"
                            className="mt-7 block">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="block p-3 border w-full mt-4"
                            name="email"
                        />
                        <div className="flex items-center mt-7 gap-3">
                            <input
                                type="checkbox"
                                name="create-account"
                            />
                            <label htmlFor="create-account"> Create account?</label>
                        </div>
                        <label
                            htmlFor="info"
                            className="mt-7 block">
                            Notes (optional)
                        </label>
                        <textarea
                            className="block p-3 border w-full mt-4 min-h-24"
                            name="info"
                            placeholder="Special notes"
                        />
                    </div>
                    <div className="order-info">
                        <div className="lg:bg-gray-50 lg:pb-7 lg:p-6">
                            <p className={`${baskerville.className} pb-2 mt-7 lg:mt-0 text-xl tracking-tighter border-b`}>Your order</p>
                            <div className="mt-7 font-medium ">
                                <div className="flex justify-between py-2 border-b">
                                    <span>Product</span> <span className="justify-self-end">Subtotal</span>
                                </div>
                                {orderInfo}
                                <div className="flex justify-between py-2 border-b">
                                    <span>Subtotal</span> <span className="justify-self-end">${orderTotal}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span>Shipping</span>
                                    <div className="justify-self-end">
                                        <input
                                            type="radio"
                                            className="block"
                                        />
                                        <input
                                            type="radio"
                                            className="block mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span>Total</span> <span className="justify-self-end">Sum</span>
                                </div>
                            </div>
                            <p className="bg-gray-100 p-4 mt-7">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                            <p className="mt-7">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                        </div>
                        <button className="black-btn w-full mt-7 lg:mt-0 uppercase">Place order</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
