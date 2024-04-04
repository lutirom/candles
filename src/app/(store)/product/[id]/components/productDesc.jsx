"use client";

import AnimateHeight from "@/app/(store)/func/animateHeight";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function ProductDesc() {
    const [isOpen, setOpen] = useState(false);

    function handleClick() {
        setOpen(!isOpen);
    }

    return (
        <>
            <p
                className={`${baskerville.className} flex font-bold text-xl text-gray-500`}
                onClick={handleClick}>
                Description <span className="ml-auto">+</span>
            </p>
            <AnimateHeight isOpen={isOpen}>
                <div className="desc mt-6">
                    <Image
                        src={"/product-detail-1.jpg"}
                        width={500}
                        height={500}
                    />
                    <p className={`${baskerville.className} text-2xl mt-6 font-bold`}>Lorem, ipsum dolor.</p>
                    <p className="mt-6 text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid, dolores totam itaque autem laboriosam saepe et ab omnis excepturi pariatur iusto dicta magnam repellat cum facere at est quia.</p>
                </div>
            </AnimateHeight>
        </>
    );
}
