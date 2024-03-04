"use client";

import { useRef, useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import getSettlements from "../func/getSettlements";
import getCities from "../func/getCities";
import ItemsList from "./ItemsList";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function FormCheckout({ npCities, orderInfo, orderTotal }) {
    const npArea = useRef();
    const npSettlement = useRef();
    const npCity = useRef();

    // const [npInfo, setNpInfo] = useState({
    //     settlements: Array,
    //     cities: Array,
    // });

    const [npDeliveryLocation, setNpDeliveryLocation] = useState({
        names: {
            npArea: "",
            npSettlement: "",
            npCity: "",
        },
        items: {
            areas: (
                <ItemsList
                    items={npCities}
                    option={"area"}
                    chooseOption={chooseOption}
                />
            ),
            settlements: "",
            cities: "",
        },
    });

    const [inputFilled, setInputFilled] = useState({
        area: false,
        settlement: false,
        city: false,
    });

    const [npMenuOpen, setNpMenuOpen] = useState(false);

    async function sendReq() {
        const cities = await getCities("e4b03967-4b33-11e4-ab6d-005056801329");
        console.log("🚀 ~ sendReq ~ sett:", cities);
    }

    function toggleNpMenu(e) {
        e.preventDefault();
        setNpMenuOpen(true);
    }

    async function chooseOption(optionType, option) {
        if (optionType === "area") {
            const settlements = await getSettlements(option.ref);
            npArea.current.value = option.ref;

            setNpDeliveryLocation((prevLocations) => {
                return {
                    names: { ...prevLocations.names, npArea: option.name },
                    items: {
                        ...prevLocations.items,
                        settlements: (
                            <ItemsList
                                items={settlements}
                                option={"settlement"}
                                chooseOption={chooseOption}
                            />
                        ),
                    },
                };
            });
            setInputFilled((prevInputFilled) => {
                return { ...prevInputFilled, area: true };
            });

            return;
        }

        if (optionType === "settlement") {
            const cities = await getCities(option.ref);
            npSettlement.current.value = option.ref;

            setNpDeliveryLocation((prevLocations) => {
                return {
                    names: { ...prevLocations.names, npSettlement: option.name },
                    items: {
                        ...prevLocations.items,
                        cities: (
                            <ItemsList
                                items={cities}
                                option={"city"}
                                chooseOption={chooseOption}
                            />
                        ),
                    },
                };
            });
            setInputFilled((prevInputFilled) => {
                return { ...prevInputFilled, settlement: true };
            });

            return;
        }

        if (optionType === "city") {
            console.log("🚀 ~ chooseOption ~ optionType:", optionType);

            setNpDeliveryLocation((prevLocations) => {
                return { ...prevLocations, names: { ...prevLocations.names, npCity: option.name } };
            });
            setInputFilled((prevInputFilled) => {
                return { ...prevInputFilled, city: true };
            });
        }

        setNpMenuOpen(false);
    }

    async function handleForm(formData) {
        console.log(formData.get("areaRef"));
    }

    return (
        <>
            <form
                className="checkout-form"
                action={handleForm}>
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
                        htmlFor="email"
                        className="mt-7 block">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="block p-3 border w-full mt-4"
                        name="email"
                    />
                    <label
                        htmlFor="email"
                        className="mt-7 block">
                        Area
                    </label>
                    <div
                        name="area"
                        placeholder="area"
                        className="flex justify-between p-3 border w-full mt-4"
                        onClick={toggleNpMenu}
                        disabled>
                        <p className="text-gray-300">
                            {npDeliveryLocation.names.npArea} {npDeliveryLocation.names.npSettlement} {npDeliveryLocation.names.npCity}
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5">
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div
                        className="btn bg-black text-white"
                        onClick={sendReq}>
                        Test
                    </div>

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
                    <div className="npOptions">
                        <input
                            type="hidden"
                            name="npArea"
                            ref={npArea}
                        />
                        <input
                            type="hidden"
                            name="npSettlement"
                            ref={npSettlement}
                        />
                        <input
                            type="hidden"
                            name="npCity"
                            ref={npCity}
                        />
                    </div>
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
            <div className={`${npMenuOpen ? "fixed" : "hidden"} menu checkout-menu text-2xl`}>
                <div className="bg-gray-50 p-3">{!inputFilled.area ? npDeliveryLocation.items.areas : !inputFilled.settlement ? npDeliveryLocation.items.settlements : !inputFilled.city ? npDeliveryLocation.items.cities : ""}</div>
            </div>
        </>
    );
}
