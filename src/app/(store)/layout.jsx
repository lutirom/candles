import HeaderWrapper from "./components/headerWrapper";
import Footer from "./components/footer";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoreLayout({ children }) {
    return (
        <body className={robotoFlex.className}>
            <main>
                <HeaderWrapper />
                {children}
                <Footer />
            </main>
        </body>
    );
}
