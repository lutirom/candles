"use client";

import { useEffect, useRef, useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import { useFormState } from "react-dom";
import { validateOrder } from "../func/order";
import OrderInfo from "./OrderInfo";
import NovaPoshtaSelect from "./NovaPoshtaSelect";
import wayForPay from "../func/wayForPay";
import WayForPayScript from "./WayForPayScript";
import { useRouter } from "next/navigation";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function FormCheckout({ npCities, cartProductsInfo }) {
    const initialState = {
        areaError: "",
        dpError: "",
    };

    const areaError = useRef();
    const dpError = useRef();

    const [state, formAction] = useFormState(validateOrder, initialState);

    const router = useRouter();
    useEffect(() => {
        if (state?.areaError?.length > 1) {
            areaError.current.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        if (state?.dpError?.length > 1) {
            dpError.current.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        if (state?.success) {
            wayForPay(state.data, state.orderDbData.orderProducts, state.orderDbData.order.id, router);
        }
    }, [state]);

    async function sendReq() {}

    return (
        <>
            <WayForPayScript />
            <p className="text-red-500 mb-7">{state?.error}</p>
            <form
                className="checkout-form"
                action={formAction}>
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
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="mt-7 block">
                                Last name
                            </label>
                            <input
                                type="text"
                                className="block p-3 border w-full mt-4"
                                name="last-name"
                            />
                        </div>
                    </div>
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
                    <p className="mt-7 block">Area*</p>
                    <p
                        className="text-red-500"
                        ref={areaError}>
                        {state?.areaError}
                    </p>
                    <p
                        className="text-red-500"
                        ref={dpError}>
                        {state?.dpError}
                    </p>
                    <NovaPoshtaSelect npCities={npCities} />

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
                            <OrderInfo cartProductsInfo={cartProductsInfo} />
                        </div>
                        <p className="bg-gray-100 p-4 mt-7">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                        <p className="mt-7">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                    </div>
                    <button className="black-btn w-full mt-7 lg:mt-0 uppercase">Place order</button>
                </div>
            </form>
        </>
    );
}
