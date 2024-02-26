import getCartProductsInfo from "../func/getCartProductsInfo";
import getCart from "../func/getCart";
import Header from "./header";

export default async function HeaderWrapper() {
    const cart = await getCart();
    const cartProductsInfo = await getCartProductsInfo();

    return (
        <Header
            cart={cart}
            cartProductsInfo={cartProductsInfo}
        />
    );
}
