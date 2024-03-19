export default async function getDepartments(ref) {
    const req = await fetch(`/api/np/get-departments/${ref}`, {
        method: "POST",
    });

    const data = await req.json();

    return data.data;
}
