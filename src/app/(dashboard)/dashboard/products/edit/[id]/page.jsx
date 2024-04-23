"use server";

import ProductForm from "../../components/productForm";
import getCategories from "../../func/getCategories";

export default async function Edit({ params }) {
    const categories = await getCategories();

    const res = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/get-product/${params.id}`, {
        cache: "no-cache",
    });

    const product = await res.json();

    const categoriesSelect = categories.map((category) => {
        return { value: category.id, label: category.name };
    });

    return (
        <>
            <h2 className=" font-bold text-2xl tracking-wide text-gray-800">Оновити товар</h2>

            <div className=" mt-5">
                <ProductForm
                    categories={categoriesSelect}
                    product={product}
                />
            </div>
        </>
    );
}
