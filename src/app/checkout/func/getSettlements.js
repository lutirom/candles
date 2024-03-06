export default async function getSettlements(areaRef) {
    const req = await fetch(`/api/np/get-settlement/${areaRef}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data;
}
