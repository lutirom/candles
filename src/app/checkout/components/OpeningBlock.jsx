"use client";

import AnimateHeight from "@/app/func/animateHeight";
import { useState } from "react";

export default function OpeningBlock() {
    const [isOpen, setIsOPen] = useState({
        login: false,
        coupon: false,
    });

    function toggleLogin(event) {
        event.preventDefault();
        setIsOPen({ ...isOpen, login: !isOpen.login });
    }

    function toggleCoupon(event) {
        event.preventDefault();
        setIsOPen({ ...isOpen, coupon: !isOpen.coupon });
    }

    return (
        <>
            <p className="text-gray-500 bg-gray-100 p-4 mb-8">
                Returning customer?{" "}
                <a
                    href="#"
                    className="pointer focus:text-[var(--highlights)] hover:text-[var(--highlights)]"
                    onClick={toggleLogin}>
                    Click here to login
                </a>{" "}
            </p>
            <AnimateHeight isOpen={isOpen.login}>
                <form
                    className="text-gray-500 overflow-hidden"
                    method="POST">
                    <div className="pb-8">
                        <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                        <label
                            htmlFor="username"
                            className="mt-7 block">
                            Username or email*
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="block p-3 border w-full mt-4"
                        />
                        <label
                            htmlFor="password"
                            className="mt-7 block">
                            Password*
                        </label>
                        <input
                            type="text"
                            name="password"
                            className="block p-3 border w-full mt-4"
                        />

                        <div className="mt-7 flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                className="border border-gray-200"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-3">
                                Remember me
                            </label>
                        </div>

                        <button className="mt-7 black-btn w-full uppercase">Login</button>

                        <p className="mt-7">Forgot your password?</p>
                    </div>
                </form>
            </AnimateHeight>
            <p className="text-gray-500 bg-gray-100 p-4 mb-8">
                Returning customer?{" "}
                <a
                    href="#"
                    className="pointer focus:text-[var(--highlights)] hover:text-[var(--highlights)]"
                    onClick={toggleCoupon}>
                    Click here to login
                </a>{" "}
            </p>
            <AnimateHeight isOpen={isOpen.coupon}>
                <form
                    className="text-gray-500 overflow-hidden"
                    method="POST">
                    <div className="pb-8">
                        <p className="pb-8">If you have have a coupon, please apply it below</p>
                        <input
                            type="text"
                            className="block p-3 border w-full"
                            placeholder="Coupon code"
                        />
                        <button className="mt-4 px-8 py-4 text-center bg-black text-white">Apply coupon</button>
                    </div>
                </form>
            </AnimateHeight>
        </>
    );
}
