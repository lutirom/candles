import getCart from "@/app/func/getCart";
import { PrismaClient } from "@prisma/client";

export default async function getProductsInfo() {
    const prisma = new PrismaClient();

    const cart = await getCart();

    const productsId = Object.keys(cart).map((product) => {
        return Number(product);
    });

    const productsInfo = await prisma.products.findMany({
        where: {
            id: {
                in: productsId,
            },
        },
        select: {
            id: true,
            name: true,
            price: true,
        },
    });

    productsInfo.map((product) => {
        return (product.amount = cart[product.id]);
    });

    return productsInfo;
}
