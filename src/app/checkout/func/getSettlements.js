import getAreaCenter from "./getAreaCenter";

export default async function getSettlements(areaRef) {
    const req = await fetch(`/api/np/get-settlement/${areaRef}`, {
        method: "POST",
    });

    const data = await req.json();

    const areaCenter = await getAreaCenter(areaRef);
    console.log("🚀 ~ getSettlements ~ areaCenter:", areaCenter, areaRef);

    if (areaCenter) {
        data.data.unshift(areaCenter);
    }

    return data.data;
}
