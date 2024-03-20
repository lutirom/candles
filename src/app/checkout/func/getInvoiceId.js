"use server";
import prisma from "../../lib/prisma";

export default async function getInvoiceId(orderId) {
    const invoice = await prisma.invoices.create({
        data: {
            order_id: orderId,
        },
    });

    return invoice.id;
}
