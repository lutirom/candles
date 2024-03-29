"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Filters({ page, perPage, products }) {
    console.log("🚀 ~ Filters ~ perPage:", perPage);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());

            params.set("page", 1);

            params.set(name, value);
            console.log("🚀 ~ Filters ~ params.toString():", params.toString());
            return params.toString();
        },

        [searchParams]
    );

    return (
        <div className="filters-block pt-6 pb-2 sticky top-[72px] bg-white text-gray-400 z-10 container mx-auto">
            <p className="text-[.8em]">
                Showing {(page - 1) * perPage === 0 ? 1 : (page - 1) * perPage}-{(page - 1) * perPage + perPage > products.length ? products.length : (page - 1) * perPage + perPage} of {products.length} results
            </p>
            <div className="filters mt-4 text-sm flex justify-between">
                <div className="flex">
                    <span className="w-32 px-2 justify-between flex items-center relative">
                        Sort by {searchParams.get("sort") === "priceDesc" ? "more expensive" : searchParams.get("sort") === "priceAsc" ? "less expensive" : "default"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 inline">
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="w-full bg-white absolute top-full left-0 border *:py-1 *:px-2 *:cursor-pointer *:block">
                            <p
                                className="border-b hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("sort", "priceAsc")}`);
                                }}>
                                Less expensive
                            </p>
                            <p
                                className="border-b hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("sort", "priceDesc")}`);
                                }}>
                                More expensive
                            </p>
                        </div>
                    </span>
                    <div className="ms-8 w-24 px-2 flex items-center justify-between relative">
                        <p>Show {perPage}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 inline">
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="w-full bg-white absolute top-full left-0 border *:py-1 *:px-2 *:cursor-pointer *:block">
                            <p
                                className="border-b hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("perPage", 4)}`);
                                }}>
                                Show 4
                            </p>
                            <p
                                className="border-b hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("perPage", 8)}`);
                                }}>
                                Show 8
                            </p>
                            <p
                                className="border-b hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("perPage", 12)}`);
                                }}>
                                Show 12
                            </p>
                            <p
                                className="hover:bg-gray-50"
                                onClick={() => {
                                    router.push(`${pathname}?${createQueryString("perPage", 24)}`);
                                }}>
                                Show 24
                            </p>
                        </div>
                    </div>
                </div>
                <span className="flex items-center">
                    Filters
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5">
                        <path
                            fillRule="evenodd"
                            d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
}
