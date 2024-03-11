import { Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export default function ThankYou({thankYouOpen}) {

    return (
        <div className={`${thankYouOpen ? "flex" : "hidden"} thank-you`}>
            <div className="flex flex-col p-6 w-4/5 h-1/2 md:w-1/2 bg-white rounded-lg shadow-lg">
                <p className={`${baskerville.className} text-xl text-center`}>Дякуємо за ваше замовлення! </p>
                <p className="text-center">Менеджер зв'яжеться з вами</p>
                <div className="flex h-full items-center justify-center">
                    <p>Повернення на головну</p>
                </div>
            </div>
        </div>
    );
}
