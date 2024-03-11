"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function ThankYouSection() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);
    return (
        <section className="flex justify-center items-center">
            <div>
                <p className={`${baskerville.className} text-xl text-center`}>Дякуємо за ваше замовлення</p>
                <p className="mt-7 text-center">Перенаправлення на головну через...</p>
            </div>
        </section>
    );
}
