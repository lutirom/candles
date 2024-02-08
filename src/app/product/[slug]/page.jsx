import "./assets/product.scss";
import Head from "./../../components/head";
import Image from "next/image";
import ButtonQuantity from "./components/buttonQuantity";

export default function Product() {
    return (
        <div className="product-page">
            <Head name="Product name"></Head>
            <section className="product">
                <Image
                    src={"/products/prod-1-600x800.jpg"}
                    height={350}
                    width={350}
                    className="w-full"
                />
                <div className="product-desc py-4">
                    <a
                        href="#"
                        className="text-[var(--highlights)]">
                        Product category
                    </a>
                    <h1 className="text-2xl">Product Name</h1>
                    <p className="mt-4 text-[var(--highlights)] text-2xl font-semibold">$14.00</p>
                    <p className="mt-4 text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aliquam vitae perferendis quod voluptas sint dolorum molestias aspernatur reprehenderit. Incidunt sequi delectus repudiandae nulla facere vel labore laboriosam eligendi officia?</p>
                </div>
                <div className="action-btns ">
                    <div className="cart-buttons flex gap-6 h-14 *:h-full">
                        <ButtonQuantity />
                        <button className="add-cart px-10 uppercase text-white bg-black">Add to cart</button>
                    </div>
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
                    <div className="share-btns rounded-full shadow-lg flex p-3 w-fit text-gray-400">
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
