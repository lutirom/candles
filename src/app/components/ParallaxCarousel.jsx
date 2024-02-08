'use client'
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ParallaxCarousel() {
  const sliderSettings = {
    className: "center w-full",
    arrows:false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }

    return (
        <Slider {...sliderSettings}>
          <div>

              <Image src={'/m5-slide-1-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>
 

          </div>
          <div>

              <Image src={'/m5-slide-2-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>

 
          </div>
          <div>     
              <Image src={'/m5-slide-3-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>
          </div>
          <div>

              <Image src={'/m5-slide-1-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>
 

          </div>
          <div>

              <Image src={'/m5-slide-2-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>

 
          </div>
          <div>     
              <Image src={'/m5-slide-3-2.jpg'} className="object-cover w-full " width={350} height={350}></Image>
          </div>
        </Slider>
    )
}

