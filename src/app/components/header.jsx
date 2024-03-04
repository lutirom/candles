"use client";

import { useState } from "react";
import "@/app/assets/scss/_header.scss";
import scroll from "../func/scroll";

import CartMenu from "./cartMenu";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";
import MobileMenu from "./mobileMenu";

export default function Header({ cart, cartProductsInfo }) {
    //TODO: optimize rendering of elements in this component - they shouldn't trigger rerendering of each other useMemo??

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [cartOpen, setCartOpen] = useState(false);

    scroll(setScrolled);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function toggleCart() {
        setCartOpen(!cartOpen);
    }

    return (
        <header className={`fixed w-full z-[11]  ${scrolled ? "bg-white text-black" : "text-white"}`}>
            <DesktopHeader
                scrolled={scrolled}
                toggleCart={toggleCart}
                cart={cart}
            />

            <MobileHeader
                toggleCart={toggleCart}
                cart={cart}
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
            />

            <CartMenu
                cartProductsInfo={cartProductsInfo}
                cartOpen={cartOpen}
                toggleCart={toggleCart}
            />

            <MobileMenu
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
            />
        </header>
    );
}
