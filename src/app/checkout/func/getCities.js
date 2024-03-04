export default async function getCities(settlementRef) {
    const req = await fetch(`/api/np/get-cities/${settlementRef}`, {
        method: "POST",
    });

    const data = await req.json();
    console.log("🚀 ~ getCities ~ data:", data);

    return data.data;
}
