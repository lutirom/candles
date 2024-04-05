import "./assets/product.scss";

import { Libre_Baskerville } from "next/font/google";
import Head from "./../../components/head";
import Image from "next/image";
import Carousel from "@/app/(store)/components/Carousel";
import ProductDesc from "./components/productDesc";
import ProductButtons from "./components/productButtons";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Product({ params }) {
    console.log(`https://${process.env.VERCEL_URL}/api/get-product/${params.id}`);
    const res = await fetch(`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/api/get-product/${params.id}`, {
        cache: "no-cache",
    });
    console.log(res);

    const product = await res.json();

    return (
        <div className="product-page">
            <Head name="Product name"></Head>
            <section className="product">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        <Image
                            src={product.img}
                            height={350}
                            width={350}
                            className="w-full md:w-1/2"
                        />
                        <div>
                            <div className="product-desc py-4">
                                <a
                                    href="#"
                                    className="text-[var(--highlights)]">
                                    Product category
                                </a>
                                <h1 className="text-2xl">{product.name}</h1>
                                <p className="mt-4 text-[var(--highlights)] text-2xl font-semibold">{product.price}</p>
                                <p className="mt-4 text-sm text-gray-500">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam vitae perferendis quod voluptas sint dolorum molestias aspernatur reprehenderit. Incidunt sequi delectus repudiandae nulla facere vel labore laboriosam eligendi officia?
                                </p>
                            </div>
                            <div className="action-btns ">
                                <ProductButtons productId={params.id} />
                                <div className="user-btns mt-4 text-sm text-gray-500">
                                    <span>Add to wishlist</span>
                                    <span className="ml-10">Add to compare</span>
                                </div>
                            </div>

                            <div className="char text-sm mt-8 flex flex-col gap-3">
                                <p className="uppercase">Product code</p>
                                <p>
                                    Category<span className="text-gray-500 ml-2">Room candle</span>
                                </p>
                                <p>
                                    Tag<span className="text-gray-500 ml-2">Candle</span>
                                </p>
                                <p>
                                    Smell<span className="text-gray-500 ml-2">Cherry</span>
                                </p>
                            </div>

                            <div className="share-btns-block mt-8 flex gap-6 items-center">
                                <span className="font-bold text-sm">Share:</span>
                                <div className="share-btns shadow-lg text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`about-product -mx-6 md:mx-0 mt-10 p-6 bg-gray-50 md:bg-transparent`}>
                        <div className="controls mx-auto">
                            <div>
                                <p className={`${baskerville.className} flex font-bold text-xl text-gray-500`}>
                                    Description <span className="ml-auto">+</span>
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <p className={`${baskerville.className} flex font-bold text-xl text-gray-500`}>
                                    Rewiews <span className="ml-auto">+</span>
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="full-desc grid">
                                <ProductDesc />
                                {/* <p className={`${baskerville.className} flex font-bold text-xl text-gray-500`}>
                                    Description <span className="ml-auto">+</span>
                                </p>
                                <div className="desc-wrapper">
                                    <div className="desc mt-6">
                                        <Image
                                            src={"/product-detail-1.jpg"}
                                            width={500}
                                            height={500}
                                        />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid, dolores totam itaque autem laboriosam saepe et ab omnis excepturi pariatur iusto dicta magnam repellat cum facere at est quia.</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="reviews mt-4 md:mt-0">
                                <p className={`${baskerville.className} flex font-bold text-xl text-gray-500`}>
                                    Rewiews <span className="ml-auto">+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="related-products">
                <div className="container mx-auto">
                    <Carousel
                        images={{}}
                        hasArrows={true}
                        enableCenterMode={false}
                        amountMobile={2}
                    />
                </div>
            </section>
        </div>
    );
}
