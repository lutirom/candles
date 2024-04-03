import "@/app/(store)/shop/assets/shop.scss";

import Filters from "../components/Filters";
import getProducts from "../func/getProducts";
import Pagination from "../../components/pagination";
import ProductsGrid from "../components/ProductsGrid";

export default async function Shop({ searchParams, params }) {
    //TODO: make redirect 404 if category doesn't exist
    const page = searchParams["page"] ? Number(searchParams["page"]) : 1;

    const perPage = searchParams["perPage"] ? Number(searchParams["perPage"]) : 12;

    const start = (page - 1) * perPage;

    const end = page * perPage;

    const sortParams = {
        sort: searchParams["sort"],
        category: params.category,
    };

    const res = await getProducts(sortParams);

    const products = await res.json();

    return (
        <div className="w-full">
            <Filters
                page={page}
                perPage={perPage}
                products={products}
            />
            <div className="products-block">
                <ProductsGrid
                    products={products}
                    start={start}
                    end={end}
                />
            </div>
            <div className="flex justify-center mt-12">
                <Pagination
                    searchParams={searchParams}
                    page={page}
                    perPage={perPage}
                    products={products}
                />
            </div>
        </div>
    );
}
