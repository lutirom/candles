import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    try {
        const products = await prisma.products.findMany();

        return NextResponse.json(products, { status: 200 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(err, { status: 200 });
    }
}
