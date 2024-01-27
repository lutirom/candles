'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {

    const currentPath = usePathname();

    const active = {
        borderBottom: '1px solid black'
    }

    return (
        <header className={`container mx-auto py-10 flex items-center justify-between`}>
            <nav className="list-none flex gap-3 text-lg">
                <Link href={'/'}>
                    <li style={ currentPath === '/' && active }>Home</li>
                </Link>
                <Link href={'#'}>
                    <li>Shop</li>
                </Link>
                <Link href={'#'}>
                    <li>Pages</li>
                </Link>
                <Link href={'#'}>
                    <li>Blog</li>
                </Link>
            </nav>
            <div className="uppercase text-4xl">Candles</div>
            <div className="right-side flex items-center gap-3 ">
                <form id="global-search" className="search-bar border-bottom border-b ">
                    <input type="text" className="inline py-2 focus-visible:outline-none" placeholder="Search..."/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" inline w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </form>
                <div className="icon cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                </div>
                <div className="icon cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </div>
            </div>
        </header>
    )
}