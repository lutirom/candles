"use server";

import prisma from "./../../lib/prisma";

export default async function getAreaCenter(areaRef) {
    const areaCenterDb = await prisma.cities.findFirst({
        where: {
            np_area_ref: areaRef,
        },
    });
    console.log("🚀 ~ getAreaCenter ~ areaCenterDb:", areaCenterDb);

    if (areaCenterDb.np_ref === null) {
        return false;
    }

    const req = await fetch(`${process.env.APP_URL}/api/np/get-area-center/${areaCenterDb.np_ref}`, {
        method: "POST",
    });

    const data = await req.json();
    console.log("🚀 ~ getAreaCenter ~ data:", data);

    return data.data[0];
}
