"use server";

import prisma from "@/app/lib/prisma";

export default async function getCategories() {
    const categories = await prisma.categories.findMany();
    return categories;
}
