import getCart from "../func/getCart";
import Header from "./header";

export default async function HeaderWrapper() {
    const cart = await getCart();

    return <Header cart={cart} />;
}
