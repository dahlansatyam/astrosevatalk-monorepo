import { useRouter } from "next/router";
import React from "react";
import AppointmentsHero from "./AppoinmentsHero";
import Appointments from "./Appointments";
import Link from "next/link";

type Props = {};

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Chat With Astrologer",
    url: "/chat-astrologer",
  },
  {
    name: "Talk To Astrologer",
    url: "/talk-astrologer",
  },
  {
    name: "Live Astrologer",
    url: "/live-astrologer",
  },
  {
    name: "Daily Horoscope",
    url: "/horoscope",
  },
  {
    name: "Live Video Chat",
    url: "/videochat-astrologer",
  },
  {
    name: "Free Kundli",
    url: "/kundli/free-kundli",
  },
  {
    name: "Kundli Matching",
    url: "/kundli/kundli-matching",
  },
  {
    name: "Panchang",
    url: "/panchang",
  },
  {
    name: "Shubh Muhurat",
    url: "/muhurat",
  },
  {
    name: "Compatibility",
    url: "/compaitablity",
  },
  {
    name: "Learn",
    url: "",
  },
];

function Hero({}: Props) {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center justify-between space-y-12 bg-[url('/home-hero-bg.png')] bg-cover py-8 lg:py-[35px]">
      <div className="mx-auto hidden max-w-5xl flex-wrap items-center justify-center space-x-[30px] lg:flex">
        {links.map((item) => (
          <Link href={item?.url}>
            <p
              className={`cursor-pointer text-[20px] font-bold text-white ${
                router.pathname === item.url
                  ? "underline decoration-[#B62022] underline-offset-8"
                  : ""
              }`}
            >
              {item.name}
            </p>
          </Link>
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
      <AppointmentsHero />
    </div>
  );
}

export default Hero;
