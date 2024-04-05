"use server";

import getAreaCenter from "./getAreaCenter";

export default async function getSettlements(areaRef) {
    const req = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/np/get-settlement/${areaRef}`, {
        method: "POST",
    });

    const data = await req.json();

    const areaCenter = await getAreaCenter(areaRef);

    if (areaCenter) {
        data.data.unshift(areaCenter);
    }

    return data.data;
}
