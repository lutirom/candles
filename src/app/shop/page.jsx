import "@/app/shop/assets/shop.scss";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

import Pagination from "./../components/pagination";
import Link from "next/link";

import Head from "./../components/head";
import ProductActions from "./components/ProductActions";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

const res = await fetch(`${process.env.APP_URL}/api/products`, { next: { revalidate: 3600 } });

const products = await res.json();
console.log("🚀 ~ products:", products);

export default function Shop({ searchParams }) {
    const page = searchParams["page"] ?? 1;

    const perPage = searchParams["perPage"] ?? 12;

    const start = Number(page - 1) * Number(perPage);
    const end = Number(page) * Number(perPage);

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

            <section className="filters-block pt-6 pb-2 sticky top-[72px] bg-white text-gray-400 z-10">
                <div className="container mx-auto">
                    <p className="text-[.8em]">Showing 1-12 of {products.length} results</p>
                    <div className="filters mt-4 text-sm flex justify-between">
                        <div className="flex">
                            <span className="flex items-center">
                                Sort by default
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 inline">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            <span className="ms-8 flex items-center">
                                Show 12
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 inline">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>
                        <span className="flex items-center">
                            Filters
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5">
                                <path
                                    fillRule="evenodd"
                                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>

            <section className="products pt-2">
                <div className="container mx-auto flex flex-col lg:flex-row-reverse lg:gap-12">
                    <div className="w-full">
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

                    <div className="params mt-12">
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
