import HeaderWrapper from "./components/headerWrapper";
import Footer from "./components/footer";

export default function StoreLayout({ children }) {
    return (
        <>
            <HeaderWrapper />
            {children}
            <Footer />
        </>
    );
}
