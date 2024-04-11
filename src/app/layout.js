import "./globals.css";

export const metadata = {
    title: "Candles",
    description: "Cozy corner",
};

export default function RootLayout({ children }) {
    return <html lang="en">{children}</html>;
}
