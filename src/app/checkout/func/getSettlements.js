export default async function getSettlements(areaRef) {
    const req = await fetch(`/api/np/get-settlement/${areaRef}`, {
        method: "POST",
    });

    const data = await req.json();
    console.log("🚀 ~ getSettlements ~ data:", data.data);

    return data.data;
}
