import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu({ toggleMenu, menuOpen }) {
    const currentPath = usePathname();

    useEffect(() => {
        document.addEventListener("click", clickOutsideMenu);

        return () => {
            document.removeEventListener("click", clickOutsideMenu);
        };
    }, [menuOpen]);

    const mobileMenu = useRef();

    function clickOutsideMenu(event) {
        if (menuOpen && !mobileMenu.current.contains(event.target)) {
            toggleMenu();
        }
    }

    return (
        <div
            className={`${menuOpen ? "active" : undefined} menu mobile-menu mx-auto text-black`}
            ref={mobileMenu}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-8 h-8 ml-auto"
                onClick={toggleMenu}>
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>

            <nav className="list-none text-lg">
                <Link
                    className="mt-8 flex justify-between"
                    href={"/"}>
                    <li
                        className={currentPath === "/" ? "active" : undefined}
                        onClick={toggleMenu}>
                        Home
                    </li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="lightgray"
                        className="w-4 h-4 mr-2">
                        <path
                            fillRule="evenodd"
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
                <Link
                    className="mt-8 flex justify-between"
                    href={"/shop"}>
                    <li
                        className={currentPath === "/shop" ? "active" : undefined}
                        onClick={toggleMenu}>
                        Shop
                    </li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="lightgray"
                        className="w-4 h-4 mr-2">
                        <path
                            fillRule="evenodd"
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
                <Link
                    className="mt-8 flex justify-between"
                    href={"/contact"}>
                    <li
                        className={currentPath === "/contact" ? "active" : undefined}
                        onClick={toggleMenu}>
                        Contact Us
                    </li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="lightgray"
                        className="w-4 h-4 mr-2">
                        <path
                            fillRule="evenodd"
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </nav>
        </div>
    );
}
