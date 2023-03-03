import React, { useState } from "react";
import { Section } from "../Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { PlayIcon } from "@heroicons/react/24/solid";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Horoscope from "../home/Horoscope";

const cards = [
  {
    src: "/aries-card.svg",
    alt: "aries",
  },
  {
    src: "/taurus-card.svg",
    alt: "taurus",
  },
  {
    src: "/gemini-card.svg",
    alt: "gemini",
  },
  {
    src: "/cancer-card.svg",
    alt: "cancer",
  },
  {
    src: "/leo-card.svg",
    alt: "leo",
  },
  {
    src: "/virgo-card.svg",
    alt: "virgo",
  },
  {
    src: "/libra-card.svg",
    alt: "libra",
  },
  {
    src: "/scorpio-card.svg",
    alt: "scorpio",
  },
  {
    src: "/sagittarius-card.svg",
    alt: "sagittarius",
  },
  {
    src: "/capricorn-card.svg",
    alt: "capricorn",
  },
  {
    src: "/aquarius-card.svg",
    alt: "aquarius",
  },
  {
    src: "/pisces-card.svg",
    alt: "pisces",
  },
];

type Props = {};

function Horoscopeswipe({}: Props) {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className="bg-white py-20">
      <Section>
        <div className="space-y-12">
          <p className="text-center text-2xl font-bold uppercase lg:text-4xl">
            Today’s Horoscope
          </p>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            onActiveIndexChange={(e) => setActive(e.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {cards.map((item, index) => (
              <SwiperSlide key={item.src + index}>
                <img src={item?.src} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative z-20 -mt-6 flex items-center justify-center space-x-4">
            <button className="prev cursor-pointer" aria-label="prev">
              <PlayIcon
                className={`h-10 w-10 rotate-180 rounded-full border-2 border-black p-2 text-black `}
              />
            </button>
            <button className="next cursor-pointer" aria-label="next">
              <PlayIcon
                className={`h-10 w-10 rounded-full border-2 border-black p-2 text-black `}
              />
            </button>{" "}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Horoscopeswipe;
