"use server";

import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export default async function createOrder(prevState, formData) {
    const schema = z.object({
        name: z
            .string({
                required_error: "name is required",
            })
            .min(2),
        lastName: z.string(),
        email: z.string().email(),
        npArea: z.string().min(1, { message: "Area is required" }),
        npSettlementRegion: z.string(),
        npSettlement: z.string(),
        npDepartment: z.string().min(1, { message: "Department is required" }),
    });

    const results = schema.safeParse({
        name: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        npArea: formData.get("npArea"),
        npSettlementRegion: formData.get("npSettlementRegion"),
        npSettlement: formData.get("npSettlement"),
        npDepartment: formData.get("npDepartment"),
    });
    console.log("🚀 ~ createOrder ~ results:", results);

    if (!results.success) {
        return { areaError: results.error.format().npArea?._errors.join(), dpError: results.error.format().npDepartment?._errors.join() };
    }

    try {
        const res = await prisma.orders.create({
            data: {
                client_name: results.data.name,
                client_email: results.data.email,
                delivery_info: `${results.data.npSettlement} (${results.data.npSettlementRegion}, ${results.data.npArea}), ${results.data.npDepartment}`,
            },
        });

        console.log("Order saved successfully");

        // return { areaError: NextResponse.json(res, { status: 200 }) };
    } catch (err) {
        console.log("Error while saving - ", err);

        // return { areaError: NextResponse.json(err, { status: 500 }) };
    }
}
