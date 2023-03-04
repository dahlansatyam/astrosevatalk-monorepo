import Link from "next/link";
import React from "react";
import { Section } from "../Layout";

type Props = {};

const cards = [
  {
    link: "/horoscope/aries",
    src: "/aries-card.svg",
    alt: "aries",
  },
  {
    link: "/horoscope/taurus",
    src: "/taurus-card.svg",
    alt: "taurus",
  },
  {
    link: "/horoscope/gemini",
    src: "/gemini-card.svg",
    alt: "gemini",
  },
  {
    link: "/horoscope/cancer",
    src: "/cancer-card.svg",
    alt: "cancer",
  },
  {
    link: "/horoscope/leo",
    src: "/leo-card.svg",
    alt: "leo",
  },
  {
    link: "/horoscope/virgo",
    src: "/virgo-card.svg",
    alt: "virgo",
  },
  {
    link: "/horoscope/libra",
    src: "/libra-card.svg",
    alt: "libra",
  },
  {
    link: "/horoscope/scorpio",
    src: "/scorpio-card.svg",
    alt: "scorpio",
  },
  {
    link: "/horoscope/sagittarius",
    src: "/sagittarius-card.svg",
    alt: "sagittarius",
  },
  {
    link: "/horoscope/capricorn",
    src: "/capricorn-card.svg",
    alt: "capricorn",
  },
  {
    link: "/horoscope/aquarius",
    src: "/aquarius-card.svg",
    alt: "aquarius",
  },
  {
    link: "/horoscope/pisces",
    src: "/pisces-card.svg",
    alt: "pisces",
  },
];

function Horoscope({}: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[45px]">
      <Section>
        <div className="">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Horoscope Forecast
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              Choose your Moon sign and start reading your FREE Daily Horoscope
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-4 lg:grid-cols-6">
            {cards?.map((item, index) => (
              <div key={index} className="mx-auto">
                <Link href={item.link}>
                  <img src={item.src} alt={item.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Horoscope;
