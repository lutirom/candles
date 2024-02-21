import getBasket from "./getBasket";

export default async function setProductsInBasket(productsInBasket) {
    const basket = await getBasket();

    productsInBasket.value = basket.length;
}
