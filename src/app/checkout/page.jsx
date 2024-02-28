import Head from "../components/head";
import "./assets/checkout.scss";
import OpeningBlock from "./components/OpeningBlock";

import getCartProductsInfo from "../func/getCartProductsInfo";
import FormCheckout from "./components/FormCheckout";

const cartProductsInfo = await getCartProductsInfo();

const res = await fetch(`${process.env.APP_URL}/api/np/get-cities`, { method: "POST" });

const npCities = await res.json();

const orderInfo = cartProductsInfo?.map((product) => {
    return (
        <div
            className="flex justify-between py-2 border-b"
            key={product.id}>
            <span>
                {product.name}({product.amount})
            </span>{" "}
            <span className="justify-self-end">${(product.amount * product.price).toFixed(2)}</span>
        </div>
    );
});

const orderTotal = cartProductsInfo
    ?.reduce((sum, currentProduct) => {
        return sum + currentProduct.price * currentProduct.amount;
    }, 0)
    .toFixed(2);

export default function Checkout() {
    return (
        <div className="checkout-page">
            <Head name={"Checkout"} />
            <section className="checkout">
                <OpeningBlock />
                <FormCheckout
                    npCities={npCities.data}
                    orderInfo={orderInfo}
                    orderTotal={orderTotal}
                />
            </section>
        </div>
    );
}
