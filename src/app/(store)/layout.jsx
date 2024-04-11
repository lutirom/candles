import HeaderWrapper from "./components/headerWrapper";
import Footer from "./components/footer";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoreLayout({ children }) {
    return (
        <body className={archivo.className}>
            <main>
                <HeaderWrapper />
                {children}
                <Footer />
            </main>
        </body>
    );
}
