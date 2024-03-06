"use client";

import { useEffect, useRef, useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import { useFormState } from "react-dom";
import getSettlements from "../func/getSettlements";
import getCities from "../func/getCities";
import getDepartments from "../func/getDepartments";
import ItemsList from "./ItemsList";
import Image from "next/image";
import createOrder from "../func/createOrder";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function FormCheckout({ npCities, orderInfo, orderTotal }) {
    const initialState = {
        areaError: "",
        dpError: "",
    };

    const areaInput = useRef();

    const npArea = useRef();
    const npSettlementRegion = useRef();
    const npSettlement = useRef();
    const npDepartment = useRef();

    const currentOptions = useRef({
        names: {
            npArea: String,
            npSettlementRegion: String,
            npSettlement: String,
            npDepartment: String,
        },
        refs: {
            npArea: String,
            npSettlementRegion: String,
            npSettlement: String,
            npDepartment: String,
        },
    });

    const [pending, setPending] = useState(false);

    const [state, formAction] = useFormState(createOrder, initialState);

    const [npDeliveryLocation, setNpDeliveryLocation] = useState({
        names: Object,
        items: (
            <ItemsList
                items={npCities}
                optionType={"area"}
                chooseOption={chooseOption}
            />
        ),
    });

    const [npMenuOpen, setNpMenuOpen] = useState(false);

    useEffect(() => {
        if (state?.areaError?.length > 1) {
            areaInput.current.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }

        if (state?.dpError?.length > 1) {
            areaInput.current.scrollIntoView({ behavior: "smooth", block: "center" });
            return;
        }
    }, [state]);

    async function sendReq() {
        const dep = await getDepartments(currentOptions.current.refs.npSettlement);
        console.log("🚀 ~ sendReq ~ dep:", dep);
    }

    async function openDpMenu() {
        const departments = await getDepartments(currentOptions.current.refs.npSettlement).then((res) => {
            setPending(false);
            return res;
        });

        setNpDeliveryLocation((prevLocations) => {
            return {
                ...prevLocations,
                items: (
                    <ItemsList
                        items={departments}
                        optionType={"department"}
                        chooseOption={chooseOption}
                    />
                ),
            };
        });
        setNpMenuOpen(true);
    }

    function openNpMenu() {
        setNpMenuOpen(true);
    }

    function closeNpMenu() {
        resetNpMenu();
        setNpMenuOpen(false);
    }

    function resetNpMenu() {
        currentOptions.current.names = {
            npArea: String,
            npSettlementRegion: String,
            npSettlement: String,
            npDepartment: String,
        };
        setNpDeliveryLocation((prevLocations) => {
            return {
                ...prevLocations,
                items: (
                    <ItemsList
                        items={npCities}
                        optionType={"area"}
                        chooseOption={chooseOption}
                    />
                ),
            };
        });
    }

    async function previousOptions() {
        if (typeof currentOptions.current.names.npArea !== "string") {
            return;
        }

        if (typeof currentOptions.current.names.npSettlementRegion !== "string") {
            resetNpMenu();
            return;
        }

        if (typeof currentOptions.current.names.npSettlement !== "string") {
            currentOptions.current.names.npSettlementRegion = String;
            const settlementRegions = await getSettlements(currentOptions.current.refs.npArea);

            setNpDeliveryLocation((prevLocations) => {
                return {
                    ...prevLocations,
                    items: (
                        <ItemsList
                            items={settlementRegions}
                            optionType={"settlementRegion"}
                            chooseOption={chooseOption}
                        />
                    ),
                };
            });
        }
    }

    async function chooseOption(optionType, option) {
        setPending(true);
        if (optionType === "area") {
            const settlementRegions = await getSettlements(option.ref).then((res) => {
                setPending(false);
                return res;
            });

            currentOptions.current.names.npArea = option.name;

            currentOptions.current.refs.npArea = option.ref;

            setNpDeliveryLocation((prevLocations) => {
                return {
                    ...prevLocations,
                    items: (
                        <ItemsList
                            items={settlementRegions}
                            optionType={"settlementRegion"}
                            chooseOption={chooseOption}
                        />
                    ),
                };
            });
        }

        if (optionType === "settlementRegion") {
            const settlements = await getCities(option.ref).then((res) => {
                setPending(false);
                return res;
            });
            currentOptions.current.names.npSettlementRegion = option.name;
            currentOptions.current.refs.npSettlementRegion = option.ref;

            setNpDeliveryLocation((prevLocations) => {
                return {
                    ...prevLocations,
                    items: (
                        <ItemsList
                            items={settlements}
                            optionType={"settlement"}
                            chooseOption={chooseOption}
                        />
                    ),
                };
            });
        }

        if (optionType === "settlement") {
            currentOptions.current.names.npSettlement = option.name;
            currentOptions.current.refs.npSettlement = option.ref;
            npArea.current.value = currentOptions.current.names.npArea;
            npSettlementRegion.current.value = currentOptions.current.names.npSettlementRegion;
            npSettlement.current.value = currentOptions.current.names.npSettlement;
            const currentOptionsName = { ...currentOptions.current.names };

            setNpDeliveryLocation((prevLocations) => {
                return { ...prevLocations, names: currentOptionsName };
            });

            closeNpMenu();
        }

        if (optionType === "department") {
            currentOptions.current.refs.npDepartment = option.ref;
            currentOptions.current.names.npDepartment = option.name;
            npDepartment.current.value = option.name;

            setNpDeliveryLocation((prevLocations) => {
                return { ...prevLocations, names: { ...prevLocations.names, npDepartment: option.name } };
            });

            setPending(false);
            closeNpMenu();
        }
    }

    return (
        <>
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
                    <p className="text-red-500">{state?.areaError}</p>
                    <div
                        className="flex justify-between p-3 border w-full mt-4"
                        onClick={openNpMenu}
                        ref={areaInput}>
                        <p className={`${npDeliveryLocation.names?.npSettlement ? "text-gray-500" : "text-gray-300"}`}>{npDeliveryLocation.names?.npSettlement ? ` ${npDeliveryLocation.names.npSettlement} (${npDeliveryLocation.names.npSettlementRegion}, ${npDeliveryLocation.names.npArea})` : "Area"}</p>
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
                    <div className={`${npDeliveryLocation.names?.npSettlement ? "block" : "hidden"}`}>
                        <p className="mt-7 block">Відділення*</p>
                        <p className="text-red-500">{state?.dpError}</p>
                        <div
                            className="flex justify-between p-3 border w-full mt-4"
                            onClick={openDpMenu}>
                            <p className={`${npDeliveryLocation.names.npDepartment ? "text-gray-500" : "text-gray-300"}`}>{npDeliveryLocation.names.npDepartment ? npDeliveryLocation.names.npDepartment : "Виберіть відділення"}</p>
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
                    </div>
                    <div
                        className="btn bg-black text-white mt-7"
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
                            name="npSettlementRegion"
                            ref={npSettlementRegion}
                        />
                        <input
                            type="hidden"
                            name="npSettlement"
                            ref={npSettlement}
                        />
                        <input
                            type="hidden"
                            name="npDepartment"
                            ref={npDepartment}
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
                                    <p>За тарифами Нової Пошти</p>
                                </div>
                            </div>
                        </div>
                        <p className="bg-gray-100 p-4 mt-7">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                        <p className="mt-7">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                    </div>
                    <button className="black-btn w-full mt-7 lg:mt-0 uppercase">Place order</button>
                </div>
            </form>
            <div className={`${npMenuOpen ? "fixed" : "hidden"}  menu checkout-menu text-2xl`}>
                <div
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                    className={`${pending ? "block" : "hidden"} fixed top-0 left-0 w-full h-full flex justify-center items-center`}>
                    <Image
                        src={"/YlWC.gif"}
                        height={50}
                        width={50}
                    />
                </div>
                <div className="flex justify-between -mt-3 mb-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={previousOptions}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-8 h-8 ml-auto"
                        onClick={closeNpMenu}>
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </div>

                <div className="bg-gray-50 p-3">{npDeliveryLocation.items}</div>
            </div>
        </>
    );
}
