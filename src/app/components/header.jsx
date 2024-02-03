'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import '@/assets/_header.scss';

export default function Header() {

    useEffect(() => {
        setIsDesktop(window.innerWidth > 768);
    }, []);

    const currentPath = usePathname();
    const [isDesktop, setIsDesktop] = useState();

    const [menuOpen, setMenuOpen] = useState(false);

    const active = {
        borderBottom: '1px solid white'
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    if (isDesktop) {
        return (
            <header className="desktop-header fixed w-full z-10 text-white">
                <div className="container mx-auto py-10 flex items-center justify-between">
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <>
        <header className="fixed w-full z-10 p-4 text-white">
            <div className="flex justify-between">
                <p className="uppercase text-2xl">Candles</p>
                <div className="right-side flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" inline w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 ml-2" onClick={toggleMenu}>
                        <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </header>

        <div className={ `${menuOpen && 'active'} mobile-header mx-auto p-10`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 ml-auto" onClick={toggleMenu}>
                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>

            <nav className="list-none text-lg">
                <Link className="mt-8 flex justify-between" href={'/'}>
                    <li style={ currentPath === '/' && active }>Home</li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightgray" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link className="mt-8 flex justify-between" href={'#'}>
                    <li>Shop</li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightgray" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link className="mt-8 flex justify-between" href={'#'}>
                    <li>Pages</li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightgray" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Link>
                <Link className="mt-8 flex justify-between" href={'#'}>
                    <li>Blog</li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="lightgray" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Link>
            </nav>
        </div>
        </>
    )
}