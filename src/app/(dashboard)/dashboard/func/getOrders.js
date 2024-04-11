"use server";

import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export default async function getOrders() {
    try {
        const orders = await prisma.orders.findMany({
            include: {
                products: true,
            },
        });

        return NextResponse.json(orders, { status: 200 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(err, { status: 200 });
    }
}
