import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative grid grid-cols-12 bg-[url('/home-hero-bg.png')] bg-cover py-8 lg:py-[35px]">
      <div className="col-span-3"></div>
      <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[29px] lg:text-5xl">
          Aries Daily Horoscope
        </p>
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[29px] lg:text-3xl">
          28 February 2023
        </p>
      </div>
      <div className="col-span-3">
        <img src="/Horoscopeicons/Aries 1.svg" />
      </div>
    </div>
  );
}

export default Hero;
