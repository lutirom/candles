"use server";

export default async function getCities(settlementRef) {
    const req = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/np/get-cities/${settlementRef}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data;
}
