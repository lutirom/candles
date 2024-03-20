"use client";

import getSignature from "./getSignature";
import getInvoiceId from "./getInvoiceId";

export default async function wayForPay(data, products, orderId, router) {
    //TODO: створити таблицю інвойсів
    const invoiceId = await getInvoiceId(orderId);

    const invoice = `CO${invoiceId}`;

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

    const string = `123_com_ua;123.com.ua;${invoice};1415379863;${productTotalPrice};UAH;${arrProductNames.join(";")};${arrProductAmount.join(";")};${arrProductPrices.join(";")}`;

    const signature = await getSignature(string);

    const wayForPay = new Wayforpay();

    wayForPay.run({
        merchantAccount: "123_com_ua",
        merchantDomainName: "123.com.ua",
        authorizationType: "SimpleSignature",
        merchantSignature: signature,
        orderReference: invoice,
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
            console.log("WfpWidgetEventApproved");
            // TODO: додати статус до order і міняти його тут після оплати
            wayForPay.closeit();
            router.push("/thank-you");
        }
    }

    window.addEventListener("message", closeWayForPay);
}
