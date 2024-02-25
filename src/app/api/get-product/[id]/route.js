import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const productId = params.id;
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: Number(productId),
            },
        });

        return NextResponse.json(product, { status: 200 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(err, { status: 200 });
    }
}
