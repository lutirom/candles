import Image from "next/image";
import '@/assets/_head.scss'
import ParallaxSection from "./components/head";
import ParallaxCarousel from './components/ParallaxCarousel';

export default function Page() {
  return (
      <>
      <ParallaxSection color='bg-[#E3C0A2]' text='Soap'>
        <Image src={'/m7-img-1.png'} width={0} height={0} sizes="100vw"></Image>
        <button className="section-btn">Shop more</button>
      </ParallaxSection>
      <ParallaxSection color='bg-[#383838]' bgImg="bg-[url('/m7-bg-2.jpg')]" text='Candle'>
        <Image src={'/m7-img-2.png'} width={0} height={0} sizes="100vw"></Image>
        <button className="section-btn">Shop more</button>
      </ParallaxSection>
      <ParallaxSection color='bg-[#D39698]' bgImg="bg-[url('/m7-bg-3.jpg')]" text='Perfume'>
        <Image src={'/m7-img-3-2.png'} width={0} height={0} sizes="100vw"></Image>
        <button className="section-btn">Shop more</button>
      </ParallaxSection>
      <ParallaxSection text='Gallery' bgImg="bg-[url('/m7-bg-4.jpg')]">
        <ParallaxCarousel/>
      </ParallaxSection>
      <ParallaxSection text='newsletter' color='bg-[#f2c3bf]' bgImg="bg-[url('/m7-bg-5.jpg')]">
        <p className="text-center">Subscribe for your email and get 10% off your first order!</p>
        <div className="bg-white p-3">
          <input type="text" placeholder="Email" />
          <a className="text-[#b17b72] font-bold uppercase " href="">Subscribe</a>
        </div>
      </ParallaxSection>
    </>
  );
}
