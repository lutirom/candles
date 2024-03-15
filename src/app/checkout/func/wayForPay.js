"use client";

import getSignature from "./getSignature";
import { saveOrder } from "./order";

export default async function wayForPay(data, products) {
    //TODO: створити таблицю інвойсів

    const productTotalPrice = products.reduce((sum, currentProduct) => {
        return sum + currentProduct.price * currentProduct.amount;
    }, 0);

    const arrProductNames = products.map((product) => {
        return product.name;
    });

    const arrProductPrices = products.map((product) => {
        return product.price;
    });

    const arrProductAmount = products.map((product) => {
        return product.amount;
    });

    const string = `123_com_ua;123.com.ua;DH78301215664;1415379863;${productTotalPrice};UAH;${arrProductNames.join(";")};${arrProductAmount.join(";")};${arrProductPrices.join(";")}`;

    const signature = await getSignature(string);

    const wayForPay = new Wayforpay();

    wayForPay.run({
        merchantAccount: "123_com_ua",
        merchantDomainName: "123.com.ua",
        authorizationType: "SimpleSignature",
        merchantSignature: signature,
        orderReference: "DH78301215664",
        orderDate: "1415379863",
        amount: productTotalPrice,
        currency: "UAH",
        productName: arrProductNames,
        productPrice: arrProductPrices,
        productCount: arrProductAmount,
        clientFirstName: data.name,
        clientLastName: data?.lastName,
        clientEmail: data?.email,
        clientPhone: data?.phone,
        language: "UA",
        straightWidget: true,
    });

    function closeWayForPay(e) {
        if (e.data == "WfpWidgetEventApproved") {
            saveOrder(data, products);
            wayForPay.closeit();
        }
    }

    window.addEventListener("message", closeWayForPay);
}
