import Image from "next/image";
import Head from "./../components/head";
import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function ShopLayout({ children }) {
    return (
        <div className="shop-page">
            <Head name="Shop" />

            <section className="products">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-8">
                    <div className="sidebar">
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
                                <Link href={`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/shop`}>
                                    All <span className="ml-auto">(2)</span>
                                </Link>
                                <Link href={`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/shop/candles`}>
                                    Candles <span className="ml-auto">(2)</span>
                                </Link>
                                <Link href={`${process.env.NODE_ENV === "development" ? `http://${process.env.APP_URL}` : `https://${process.env.VERCEL_URL}`}/shop/soap`}>
                                    Soap <span className="ml-auto">(2)</span>
                                </Link>
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
                    <div className="flex flex-col lg:flex-row-reverse lg:gap-12">{children}</div>
                </div>
            </section>
        </div>
    );
}
