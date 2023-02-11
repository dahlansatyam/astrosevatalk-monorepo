import React from "react";
import { Section } from "../Layout";

type Props = {};

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

function Horoscope({}: Props) {
  console.log(cards.length);
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
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Horoscope;
