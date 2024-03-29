import "@/app/shop/assets/shop.scss";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

import Pagination from "./../components/pagination";
import Link from "next/link";

import Head from "./../components/head";
import ProductActions from "./components/ProductActions";
import Filters from "./components/Filters";
import getProducts from "./func/getProducts";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Shop({ searchParams }) {
    const page = searchParams["page"] ? Number(searchParams["page"]) : 1;

    const perPage = searchParams["perPage"] ? Number(searchParams["perPage"]) : 12;

    const start = (page - 1) * perPage;

    const end = page * perPage;

    const params = {
        sort: searchParams["sort"],
    };

    const res = await getProducts(params);

    const products = await res.json();

    const productsOnPage = products.slice(start, end).map((product, index) => {
        return (
            <div
                key={product.id}
                className="product-wrapper">
                <div className="product sale">
                    <Link href={`/product/${product.id}/`}>
                        <Image
                            src={product.img}
                            width={600}
                            height={800}
                            alt={`photo of ${product.name}`}></Image>
                    </Link>
                    <div className="product-actions">
                        <ProductActions productId={product.id} />
                    </div>
                </div>
                <div className="product-description">
                    <p>{product.name}</p>
                    <span className="text-gray-500">{product.price}</span>
                </div>
            </div>
        );
    });

    return (
        <div className="shop-page">
            <Head name="Shop" />

            <section className="products pt-2">
                <div className="container mx-auto flex flex-col lg:flex-row-reverse lg:gap-12">
                    <div className="w-full">
                        <Filters
                            page={page}
                            perPage={perPage}
                            products={products}
                        />
                        <div className="products-block">{productsOnPage}</div>
                        <div className="flex justify-center mt-12">
                            <Pagination
                                searchParams={searchParams}
                                page={page}
                                perPage={perPage}
                                products={products}
                            />
                        </div>
                    </div>

                    <div className="sidebar mt-12">
                        <div className="border w-full flex items-center p-3">
                            <input
                                type="text"
                                placeholder="Search store..."
                                className="w-full focus-visible:outline-none"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="inline w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </div>

                        <div className="categories mt-12">
                            <h3 className={`${baskerville.className} text-2xl font-semibold`}>Categories</h3>
                            <div className="categories-items text-gray-400 ">
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                                <p>
                                    Lorem <span className="ml-auto">(2)</span>
                                </p>
                            </div>
                        </div>

                        <div className="best-sellers mt-12">
                            <h3 className={`${baskerville.className} text-2xl font-semibold`}>Best-Seller</h3>
                            <div className="flex flex-col gap-5 mt-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src={"/products/m5-prod-1-600x800.jpg"}
                                        width={250}
                                        height={200}></Image>
                                    <div className="description">
                                        <p>Lorem</p>
                                        <p className="text-gray-500">$114.00</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src={"/products/m5-prod-2-600x800.jpg"}
                                        width={250}
                                        height={200}></Image>
                                    <div className="description">
                                        <p>Lorem</p>
                                        <p className="text-gray-500">$214.00</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src={"/products/m5-prod-3-600x800.jpg"}
                                        width={250}
                                        height={200}></Image>
                                    <div className="description">
                                        <p>Lorem</p>
                                        <p className="text-gray-500">$314.00</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Image
                                        src={"/products/m5-prod-4-600x800.jpg"}
                                        width={250}
                                        height={200}></Image>
                                    <div className="description">
                                        <p>Lorem</p>
                                        <p className="text-gray-500">$414.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tag mt-12">
                            <h3 className={`${baskerville.className} text-2xl font-semibold`}>Tags</h3>
                            <div className="mt-5 text-gray-500">
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                                <span>Lorem, </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tags">
                <div className="container mx-auto"></div>
            </section>
        </div>
    );
}
