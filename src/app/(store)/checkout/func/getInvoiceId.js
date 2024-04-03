"use server";
import prisma from "@/app/lib/prisma";

export default async function getInvoiceId(orderId) {
    const invoice = await prisma.invoices.create({
        data: {
            order_id: orderId,
        },
    });

    return invoice.id;
}
