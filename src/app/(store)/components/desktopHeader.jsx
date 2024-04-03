import { usePathname } from "next/navigation";
import Link from "next/link";
import CartCounter from "./cartCounter";

export default function DesktopHeader({ scrolled, toggleCart, cart }) {
    const currentPath = usePathname();

    return (
        <div className="desktop-header container mx-auto py-10 items-center justify-between">
            <Link
                href={"/"}
                className="uppercase text-4xl">
                Candles
            </Link>

            <div className="right-side flex items-center gap-3 ">
                <nav className="list-none flex gap-5 lg:gap-10 text-lg">
                    <Link href={"/"}>
                        <li className={currentPath === "/" ? "active" : undefined}>Home</li>
                    </Link>
                    <Link href={"/shop"}>
                        <li className={currentPath === "/shop" ? "active" : undefined}>Shop</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li>Contact Us</li>
                    </Link>
                </nav>
                <form
                    id="global-search"
                    className="search-bar ml-6 border-bottom border-b">
                    <input
                        type="text"
                        className={`inline py-2 bg-transparent ${scrolled ? "placeholder:text-gray-300" : "placeholder:text-white"}  focus-visible:outline-none`}
                        placeholder="Search..."
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className=" inline w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </form>
                <div className="icon cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </div>
                <div
                    className="icon cursor-pointer"
                    onClick={toggleCart}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    <CartCounter cart={cart} />
                </div>
            </div>
        </div>
    );
}
