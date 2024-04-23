import ProductForm from "../components/productForm";
import getCategories from "../func/getCategories";

export default async function AddProduct() {
    const categories = await getCategories();
    const categoriesSelect = categories.map((category) => {
        return { value: category.id, label: category.name };
    });

    return (
        <>
            <h2 className=" font-bold text-2xl tracking-wide text-gray-800">Додати новий товар</h2>

            <div className=" mt-5">
                <ProductForm categories={categoriesSelect} />
            </div>
        </>
    );
}
