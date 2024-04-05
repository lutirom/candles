export default async function getDepartments(ref) {
    const req = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/np/get-departments/${ref}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data;
}
