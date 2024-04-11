import { Archivo } from "next/font/google";
import "./layout.scss";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LayoutDashBoard({ children }) {
    return (
        <body className={`${archivo.className} flex dashboard`}>
            <header className="dash-header fixed bg-white top-0 w-full flex justify-between items-center px-5 shadow-md">
                <p className="text-4xl">CandlesLab</p>
                <div className="flex items-center gap-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>

                    <div className="w-12 h-12 rounded-full border-2 border-black user-logo flex justify-center items-center leading-none">
                        <p className="">AH</p>
                    </div>
                </div>
            </header>
            <aside className="side-navigation flex flex-col max-w-32 shadow-md">
                <div className="flex items-center justify-center flex-col h-24 w-32 border-b">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                        />
                    </svg>
                    <p>Sales</p>
                </div>
                <div className="h-24 w-32 border-b"></div>
                <div className="h-24 w-32 border-b"></div>
            </aside>
            <main className="dash-body p-5 flex flex-col bg-gray-50 w-full">
                {children}
                <footer className="mt-auto">dashboard FOOTER</footer>
            </main>
        </body>
    );
}
