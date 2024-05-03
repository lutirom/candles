"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export default function ThankYouSection() {
    //TODO: зробить відлік
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);
    return (
        <section className="flex justify-center items-center">
            <div>
                <p className={`${nunito.className} text-xl text-center`}>Дякуємо за ваше замовлення</p>
                <p className="mt-7 text-center">Перенаправлення на головну через...</p>
            </div>
        </section>
    );
}
