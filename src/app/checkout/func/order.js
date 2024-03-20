"use server";

import { z } from "zod";
import prisma from "@/app/lib/prisma";
import { clearCart } from "@/app/func/cart";
import { getCartProductsInfo } from "@/app/func/cart";

export async function validateOrder(prevState, formData) {
    console.log("🚀 ~ validateOrder ~ formData:", formData.get("npArea"));
    const products = await getCartProductsInfo();

    if (!products) {
        return { error: "Add product" };
    }

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
        npSettlement: z.string().optional(),
        npCityCenter: z.string().optional(),
        npDepartment: z.string().min(1, { message: "Department is required" }),
    });

    const data = {
        name: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        npArea: formData.get("npArea"),
        npSettlementRegion: formData.get("npSettlementRegion"),
        npSettlement: formData.get("npSettlement"),
        npCityCenter: formData.get("npCityCenter"),
        npDepartment: formData.get("npDepartment"),
    };

    const results = schema.safeParse(data);

    if (!results.success) {
        return { areaError: results.error.format().npArea?._errors.join(), dpError: results.error.format().npDepartment?._errors.join() };
    }

    results.orderDbData = await saveOrder(data, products);

    return results;
}

export async function saveOrder(orderData, products) {
    //TODO: створити механізм зберігання замовлення до оплати

    try {
        const order = await prisma.orders.create({
            data: {
                client_name: orderData.name,
                client_lastname: orderData?.lastName,
                client_email: orderData.email,
                delivery_info: `${orderData?.npSettlement} ${orderData?.npCityCenter} (${orderData?.npSettlementRegion}, ${orderData.npArea}), ${orderData.npDepartment}`,
            },
        });

        await prisma.order_products.createMany({
            data: products.map((product) => {
                return {
                    order_id: order.id,
                    product_id: product.id,
                    amount: product.amount,
                };
            }),
        });

        const data = {
            order: order,
            orderProducts: products,
        };

        await clearCart();

        console.log("Order saved successfully");

        return data;
    } catch (err) {
        console.log("Error while saving - ", err);

        return { error: err };
    }
}
