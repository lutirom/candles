import { NextResponse } from "next/server";

export default async function getProducts(params) {
    try {
        if (params.sort === "priceAsc") {
            const products = await prisma.products.findMany({
                orderBy: [
                    {
                        price: "asc",
                    },
                ],
            });
            return NextResponse.json(products, { status: 200 });
        }

        if (params.sort === "priceDesc") {
            const products = await prisma.products.findMany({
                orderBy: [
                    {
                        price: "desc",
                    },
                ],
            });
            return NextResponse.json(products, { status: 200 });
        }

        const products = await prisma.products.findMany({
            orderBy: [
                {
                    id: "asc",
                },
            ],
        });

        return NextResponse.json(products, { status: 200 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(err, { status: 200 });
    }
}
