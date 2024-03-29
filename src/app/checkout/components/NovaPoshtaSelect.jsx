import { useState, useRef } from "react";
import getSettlements from "../func/getSettlements";
import getCities from "../func/getCities";
import getDepartments from "../func/getDepartments";
import ItemsList from "./ItemsList";
import Image from "next/image";

export default function NovaPoshtaSelect({ npCities }) {
    //TODO: оптимізувати код нової пошти

    const npArea = useRef();
    const npSettlementRegion = useRef();
    const npSettlement = useRef();
    const npDepartment = useRef();
    const npCityCenter = useRef();

    const selectNpMenu = useRef();

    const currentOptions = useRef({
        names: {
            npArea: String,
            npSettlementRegion: String,
            npSettlement: String,
            npCityCenter: String,
            npDepartment: String,
        },
        refs: {
            npArea: String,
            npSettlementRegion: String,
            npSettlement: String,
            npCityCenter: String,
            npDepartment: String,
        },
    });

    const [pending, setPending] = useState(false);

    const [npMenuOpen, setNpMenuOpen] = useState(false);

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

    async function openDpMenu() {
        setPending(true);

        const ref = typeof currentOptions.current.refs.npCityCenter === "string" ? currentOptions.current.refs.npCityCenter : currentOptions.current.refs.npSettlement;

        const departments = await getDepartments(ref, typeof currentOptions.current.refs.npCityCenter === "string").then((res) => {
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
            npCity: String,
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

    function clearSettlement() {
        currentOptions.current.names.npSettlementRegion = String;
        currentOptions.current.refs.npSettlementRegion = String;
        currentOptions.current.names.npSettlement = String;
        currentOptions.current.refs.npSettlement = String;

        npSettlement.current.value = "";
        npSettlementRegion.current.value = "";
    }

    function clearCityCenter() {
        currentOptions.current.names.npCityCenter = String;
        currentOptions.current.refs.npCityCenter = String;

        npCityCenter.current.value = "";
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
        selectNpMenu.current.scrollTop = 0;
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
            if (option.cityCenter) {
                clearSettlement();

                currentOptions.current.names.npCityCenter = option.name;
                currentOptions.current.refs.npCityCenter = option.ref;
                npCityCenter.current.value = option.name;
                npArea.current.value = currentOptions.current.names.npArea;

                const currentOptionsName = { ...currentOptions.current.names };

                setNpDeliveryLocation((prevLocations) => {
                    return { ...prevLocations, names: currentOptionsName };
                });

                setPending(false);
                closeNpMenu();

                return;
            }

            clearCityCenter();

            currentOptions.current.names.npSettlementRegion = option.name;
            currentOptions.current.refs.npSettlementRegion = option.ref;

            const settlements = await getCities(option.ref).then((res) => {
                setPending(false);
                return res;
            });

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
            setPending(false);
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
        <div>
            <div
                className="flex justify-between p-3 border w-full mt-4"
                onClick={openNpMenu}>
                <p className={`${npDeliveryLocation.names?.npSettlement ? "text-gray-500" : "text-gray-300"}`}>
                    {typeof npDeliveryLocation.names?.npSettlement === "string"
                        ? ` ${npDeliveryLocation.names.npSettlement} (${npDeliveryLocation.names.npSettlementRegion}, ${npDeliveryLocation.names.npArea})`
                        : typeof npDeliveryLocation.names?.npCityCenter === "string"
                        ? `${npDeliveryLocation.names.npCityCenter} (${npDeliveryLocation.names.npArea})`
                        : "Area"}
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
                className={`${npDeliveryLocation.names?.npSettlement ? "block" : "hidden"} flex justify-between p-3 border w-full mt-4`}
                onClick={openDpMenu}>
                <p className={`${typeof npDeliveryLocation.names.npDepartment === "string" ? "text-gray-500" : "text-gray-300"}`}>{typeof npDeliveryLocation.names.npDepartment === "string" ? npDeliveryLocation.names.npDepartment : "Виберіть відділення"}</p>
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
                className={`${npMenuOpen ? "fixed" : "hidden"}  menu checkout-menu text-2xl`}
                ref={selectNpMenu}>
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
                <input
                    type="hidden"
                    name="npCityCenter"
                    ref={npCityCenter}
                />
            </div>
            <div
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                className={`${pending ? "block" : "hidden"} fixed top-0 left-0 w-full h-full flex justify-center items-center z-20`}>
                <Image
                    src={"/YlWC.gif"}
                    height={50}
                    width={50}
                />
            </div>
        </div>
    );
}
