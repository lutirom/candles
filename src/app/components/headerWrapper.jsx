import { getCartProductsInfo } from "../func/cart";
import { getCart } from "../func/cart";
import Header from "./header";

export default async function HeaderWrapper() {
    const cart = await getCart();

    const cartProducts = await getCartProductsInfo();

    return (
        <Header
            cart={cart}
            cartProducts={cartProducts}
        />
    );
}
