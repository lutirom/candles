import { getAdminProducts } from "./../func/adminProducts";

import AdminPagination from "./../components/adminPagination";
import Link from "next/link";
import ProductItem from "./components/ProductItem";

export default async function Products({ searchParams }) {
    const res = await getAdminProducts();

    const products = await res.json();

    const page = searchParams["page"] ? Number(searchParams["page"]) : 1;

    const start = (page - 1) * 12;

    const end = page * 12;

    return (
        <>
            <div className="flex p-3 rounded-md items-center bg-gray-100">
                <Link
                    href={"/dashboard/products/add_product"}
                    className="ml-auto rounded-sm py-1 px-3 bg-green-700 hover:bg-green-600 text-white leading-none">
                    Add
                </Link>
            </div>
            <div className="flex flex-col gap-5 mt-4">
                {products.slice(start, end).map((product) => {
                    return (
                        <ProductItem
                            product={product}
                            key={product.id}
                        />
                    );
                })}
                <div className="flex justify-center mt-12">
                    <AdminPagination
                        searchParams={searchParams}
                        page={page}
                        perPage={12}
                        products={products}
                    />
                </div>
            </div>
        </>
    );
}
