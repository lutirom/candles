import Image from "next/image";
import ParallaxSection from "./components/ParallaxSection";
import Carousel from "./components/Carousel";
import Link from "next/link";

export default function Page() {
    return (
        <div className="home *-[section]:p-0">
            <ParallaxSection
                color="bg-[#E3C0A2]"
                text="Soap">
                <Image
                    className="section-img"
                    src={"/m7-img-1.png"}
                    width={0}
                    height={0}
                    sizes="100vw"></Image>
                <Link
                    href={"/shop"}
                    className="section-btn">
                    Shop more
                </Link>
            </ParallaxSection>
            <ParallaxSection
                color="bg-[#383838]"
                bgImg="bg-[url('/m7-bg-2.jpg')]"
                text="Candle">
                <Image
                    className="section-img"
                    src={"/m7-img-2.png"}
                    width={0}
                    height={0}
                    sizes="100vw"></Image>
                <Link
                    href={"/shop"}
                    className="section-btn">
                    Shop more
                </Link>
            </ParallaxSection>
            <ParallaxSection
                color="bg-[#D39698]"
                bgImg="bg-[url('/m7-bg-3.jpg')]"
                text="Perfume">
                <Image
                    className="section-img"
                    src={"/m7-img-3-2.png"}
                    width={0}
                    height={0}
                    sizes="100vw"></Image>
                <Link
                    href={"/shop"}
                    className="section-btn">
                    Shop more
                </Link>
            </ParallaxSection>
            <ParallaxSection
                text="Gallery"
                bgImg="bg-[url('/m7-bg-4.jpg')]">
                <Carousel
                    images={{}}
                    hasArrows={false}
                    enableCenterMode={true}
                    amountMobile={1}
                />
            </ParallaxSection>
            <ParallaxSection
                text="newsletter"
                color="bg-[#f2c3bf]"
                bgImg="bg-[url('/m7-bg-5.jpg')]">
                <p className="text-center">Subscribe for your email and get 10% off your first order!</p>
                <div className="bg-white p-3">
                    <input
                        type="text"
                        placeholder="Email"
                    />
                    <a
                        className="text-[#b17b72] font-bold uppercase "
                        href="">
                        Subscribe
                    </a>
                </div>
            </ParallaxSection>
        </div>
    );
}
