import { useEffect } from "react";

export default function scroll(setState) {
    useEffect(() => {
        if (window.scrollY > 10) {
            console.log("Scroll");
            setState(true);
        }

        window.addEventListener("scroll", toggleHeader);

        return () => {
            window.removeEventListener("scroll", toggleHeader);
        };
    }, []);

    function toggleHeader() {
        if (window.scrollY > 10) {
            setState(true);
            return;
        }

        setState(false);
    }
}
