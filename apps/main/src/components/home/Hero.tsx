import { useRouter } from "next/router";
import React from "react";

type Props = {};

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "",
  },
  {
    name: "Services",
    url: "",
  },
  {
    name: "Appointments",
    url: "",
  },
  {
    name: "Shop",
    url: "",
  },
  {
    name: "Learn",
    url: "",
  },
];

function Hero({}: Props) {
  const router = useRouter();
  return (
    <div className="h-screen bg-[url('/home-hero-bg.png')] bg-cover py-8 lg:py-[35px]">
      <div className="mx-auto hidden max-w-5xl items-center justify-center space-x-[30px] lg:flex">
        {links.map((item) => (
          <p
            className={`text-[20px] font-bold text-white ${
              router.pathname === item.url
                ? "underline decoration-[#B62022] underline-offset-8"
                : ""
            }`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 text-lg font-black text-[#F0C668] lg:mb-[29px] lg:text-[32px]">
          PROFESSIONAL ASTROLOGY CONSULTATIONS
        </p>
        <p className="bg-gradient-from-t h-fit bg-gradient-to-b from-[#FDFF44] to-[#C83000] bg-clip-text text-3xl font-black text-transparent lg:text-[75px] lg:leading-[100px]">
          Let the stars Guide you
        </p>
      </div>
    </div>
  );
}

export default Hero;
