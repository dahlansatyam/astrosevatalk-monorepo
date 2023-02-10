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
    <div className="-mt-20 h-screen bg-[url('/home-hero-bg.png')] bg-cover py-8 lg:py-16">
      <div className="mx-auto mt-8 flex max-w-5xl items-center justify-center space-x-6">
        {links.map((item) => (
          <p
            className={`font-medium text-white ${
              router.pathname === item.url ? "underline underline-offset-8" : ""
            }`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex h-full flex-col items-center justify-center space-y-4">
        <p className="text-2xl font-bold text-[#F0C668]">
          PROFESSIONAL ASTROLOGY CONSULTATIONS
        </p>
        <p className="bg-gradient-from-t bg-gradient-to-b from-[#FDFF44] to-[#C83000] bg-clip-text text-6xl font-black text-transparent">
          Let the stars Guide you
        </p>
      </div>
    </div>
  );
}

export default Hero;
