import { NextResponse } from "next/server";

export async function POST(request, { params: { settlementRef } }) {
    const data = {
        apiKey: `${process.env.NOVA_API}`,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: { SettlementRef: settlementRef },
    };

    try {
        const res = await fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            next: {
                revalidate: 86400,
            },
        });

        const resData = await res.json();

        return NextResponse.json(resData, { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json(error, { status: 200 });
    }
}
