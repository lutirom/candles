import { NextResponse } from "next/server";

export default async function getProducts(sortParams) {
    try {
        let category;
        if (sortParams.category) {
            category = await prisma.categories.findFirst({
                where: {
                    name: sortParams.category,
                },
            });
        }

        if (sortParams.sort === "priceAsc") {
            const products = await prisma.products.findMany({
                where: {
                    category_id: category?.id,
                },
                orderBy: [
                    {
                        price: "asc",
                    },
                ],
            });
            return NextResponse.json(products, { status: 200 });
        }

        if (sortParams.sort === "priceDesc") {
            const products = await prisma.products.findMany({
                where: {
                    category_id: category?.id,
                },
                orderBy: [
                    {
                        price: "desc",
                    },
                ],
            });
            return NextResponse.json(products, { status: 200 });
        }

        const products = await prisma.products.findMany({
            where: {
                category_id: category?.id,
            },
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
