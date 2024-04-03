"use server";

import prisma from "@/app/lib/prisma";

export default async function getAreaCenter(areaRef) {
    const areaCenterDb = await prisma.cities.findFirst({
        where: {
            np_area_ref: areaRef,
        },
    });

    if (areaCenterDb.np_ref === null) {
        return false;
    }

    const req = await fetch(`${process.env.APP_URL}/api/np/get-area-center/${areaCenterDb.np_ref}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data[0];
}
