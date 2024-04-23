"use server";

import prisma from "@/app/lib/prisma";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { z } from "zod";

export default async function validateProduct(currentState, formData) {
    const schema = z.object({
        title: z.string().min(3, "Додайте назву. Мінімум 3 символи"),
        shortDesc: z.string(),
        fullDesc: z.string(),
        image: z.string().trim().min(1, "Додайте фото"),
        price: z.number({
            required_error: "Вкажіть ціну",
            invalid_type_error: "Вкажіть ціну",
        }),
        category: z.number(),
    });

    const data = {
        title: formData.get("title"),
        productId: Number(formData.get("productId")),
        shortDesc: formData.get("short-desc"),
        fullDesc: formData.get("full-desc"),
        image: formData.get("image-name"),
        price: formData.get("price").length !== 0 ? Number(formData.get("price")) : "",
        category: Number(formData.get("category")),
    };

    const currentProduct = await prisma.products.findUnique({
        where: {
            id: data.productId,
        },
    });

    const currentImage = await prisma.products.findUnique({
        where: {
            img: data.image,
        },
    });

    function imageExists() {
        return currentImage !== null;
    }

    function productExists() {
        return currentProduct !== null;
    }

    const results = schema.safeParse(data);

    if (!results.success) {
        return { ...currentState, titleErr: results.error.format().title?._errors.join(), imageErr: results.error.format().image?._errors.join(), priceErr: results.error.format().price?._errors.join() };
    }

    if (!productExists()) {
        const image = formData.get("image");

        const buffer = Buffer.from(await image.arrayBuffer());

        const imagePath = `/products/product-${Date.now()}.${image.type.split("/")[1]}`;

        try {
            const savedProduct = await prisma.products.create({
                data: {
                    name: data.title,
                    short_desc: data.shortDesc,
                    full_desc: data.fullDesc,
                    price: data.price,
                    category_id: data.category,
                    img: imagePath,
                },
            });

            await writeFile(path.join(process.cwd(), `public/${imagePath}`), buffer);

            return results;
        } catch (err) {
            console.error("'Error while saving new product:'", err);
            return NextResponse.json(err, { status: 500 });
        }
    }

    try {
        let buffer;
        let imagePath;

        if (!imageExists()) {
            const image = formData.get("image");

            buffer = Buffer.from(await image.arrayBuffer());

            imagePath = `/products/product-${Date.now()}.${image.type.split("/")[1]}`;
        }

        const updateProduct = await prisma.products.update({
            where: {
                id: data.productId,
            },
            data: {
                name: data.title,
                short_desc: data.shortDesc,
                full_desc: data.fullDesc,
                price: data.price,
                category_id: data.category,
                img: !imageExists ? imagePath : data.image,
            },
        });

        if (!imageExists) {
            await writeFile(path.join(process.cwd(), `public/${imagePath}`), buffer);
        }

        return results;
    } catch (err) {
        console.error("Error while updating product:", err);

        return NextResponse.json(err, { status: 500 });
    }
}
