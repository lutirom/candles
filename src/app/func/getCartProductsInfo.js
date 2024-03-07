import getCart from "@/app/func/getCart";
import prisma from "@/app/lib/prisma";

export default async function getCartProductsInfo() {
    console.log("Getting Cart Products");

    const cart = await getCart();

    if (!cart) {
        return;
    }

    const productsId = Object.keys(cart).map((product) => {
        return Number(product);
    });

    const productsInfo = await prisma.products.findMany({
        where: {
            id: {
                in: productsId,
            },
        },
    });

    productsInfo.map((product) => {
        return (product.amount = cart[product.id]);
    });

    return productsInfo;
}
