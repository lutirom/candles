export default async function getDepartments(settlementRef) {
    const req = await fetch(`/api/np/get-departments/${settlementRef}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data;
}
