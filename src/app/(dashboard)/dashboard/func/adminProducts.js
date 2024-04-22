"use server";

import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function getAdminProducts(sortParams) {
    try {
        let category;
        if (sortParams) {
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

export async function hideProduct(id) {
    try {
        const status = await prisma.products.update({
            where: {
                id: id,
            },
            data: {
                status: 0,
            },
        });
        console.log("🚀 ~ hideProduct ~ status:", status);

        return "success";
    } catch (err) {
        console.log(err);

        return "error";
    }
}

export async function showProduct(id) {
    try {
        const status = await prisma.products.update({
            where: {
                id: id,
            },
            data: {
                status: 1,
            },
        });
        console.log("🚀 ~ showProduct ~ status:", status);

        return "success";
    } catch (err) {
        console.log(err);

        return "error";
    }
}
