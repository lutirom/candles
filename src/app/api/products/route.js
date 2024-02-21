import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const products = await prisma.products.findMany();

        return NextResponse.json(products, { status: 200 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(err, { status: 200 });
    }
}
