'use client'

import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel"

const baskerville = Libre_Baskerville({subsets: ['latin'], weight: ['400']})

export default function ParallaxCarousel() {

    return (
        <Carousel>
          <Carousel.Item>
          <div className="slide slide-1">
            <div className="wrapper">
              <Image src={'/m5-slide-1-2.jpg'} className="mx-auto" width={350} height={350}></Image>
              <h3 className={`${baskerville.className} text-3xl mt-8`}>The soap that looks after your skin</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          </Carousel.Item>
          <Carousel.Item>
          <div className="slide slide-2">
            <div className="wrapper">
              <Image src={'/m5-slide-2-2.jpg'} className="mx-auto" width={350} height={350}></Image>
              <h3 className={`${baskerville.className} text-3xl mt-8`}>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          </Carousel.Item>
          <Carousel.Item>
          <div className="slide slide-3">
            <div className="wrapper">
              <Image src={'/m5-slide-3-2.jpg'} className="mx-auto" width={350} height={350}></Image>
              <h3 className={`${baskerville.className} text-3xl mt-8`}>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>

          </Carousel.Item>
        </Carousel>
    )
}

