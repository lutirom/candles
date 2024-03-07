"use client";

export default function OrderInfo({ cartProductsInfo }) {
    const orderInfo = cartProductsInfo?.map((product) => {
        return (
            <div
                className="flex justify-between py-2 border-b"
                key={product.id}>
                <span>
                    {product.name}({product.amount})
                </span>{" "}
                <span className="justify-self-end">${(product.amount * product.price).toFixed(2)}</span>
            </div>
        );
    });

    const orderTotal = cartProductsInfo
        ?.reduce((sum, currentProduct) => {
            return sum + currentProduct.price * currentProduct.amount;
        }, 0)
        .toFixed(2);

    return (
        <>
            <div className="flex justify-between py-2 border-b">
                <span>Product</span> <span className="justify-self-end">Subtotal</span>
            </div>
            {orderInfo}
            <div className="flex justify-between py-2 border-b">
                <span>Subtotal</span> <span className="justify-self-end">${orderTotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
                <span>Shipping</span>
                <div className="justify-self-end">
                    <p>За тарифами Нової Пошти</p>
                </div>
            </div>
        </>
    );
}
