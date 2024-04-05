import { revalidatePath } from "next/cache";

import Head from "../components/head";
import "./assets/checkout.scss";
import OpeningBlock from "./components/OpeningBlock";

import { getCartProductsInfo } from "../func/cart";
import FormCheckout from "./components/FormCheckout";

export default async function Checkout() {
    const cartProductsInfo = await getCartProductsInfo();

    const res = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/np/get-areas`, {
        method: "POST",
    });

    const npCities = await res.json();

    revalidatePath("/checkout");
    return (
        <div className="checkout-page">
            <Head name={"Checkout"} />
            <section className="checkout">
                <OpeningBlock />
                <FormCheckout
                    npCities={npCities.data}
                    cartProductsInfo={cartProductsInfo}
                />
            </section>
        </div>
    );
}
