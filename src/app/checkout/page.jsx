import Head from "../components/head";
import "./assets/checkout.scss";
import OpeningBlock from "./components/OpeningBlock";
import { Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function Checkout() {
    return (
        <div className="checkout-page">
            <Head name={"Checkout"} />
            <section className="checkout">
                <OpeningBlock></OpeningBlock>
                <form action="post">
                    <p className={`${baskerville.className} pb-2 text-xl tracking-tighter border-b`}>Billing details</p>
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
                    <p className={`${baskerville.className} pb-2 mt-7 text-xl tracking-tighter border-b`}>Your order</p>
                    <div className="mt-7 font-medium grid grid-cols-2 *:py-3 [&>*:nth-child(3n)]:p-0">
                        <span>Product</span> <span className="justify-self-end">Subtotal</span>
                        <div className="border-b col-span-2"></div>
                        <span>Product name</span> <span className="justify-self-end">$7.99</span>
                        <div className="border-b col-span-2"></div>
                        <span>Subtotal</span> <span className="justify-self-end">$7.99</span>
                        <div className="border-b col-span-2"></div>
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
                        <div className="border-b col-span-2"></div>
                        <span>Total</span> <span className="justify-self-end">$7.99</span>
                    </div>

                    <p className="bg-gray-100 p-4 mt-7">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <p className="mt-7">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                    <button className="black-btn w-full mt-7 uppercase">Place order</button>
                </form>
            </section>
        </div>
    );
}
