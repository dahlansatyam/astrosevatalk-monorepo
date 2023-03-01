import React from "react";
import { Section } from "@/components/Layout";

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

const SignsCard = (props: Props) => {
  return (
    <div>
      <Section>
        <div className="flex flex-col space-y-6 py-8 ">
          <div>
            <p className="text-center text-4xl font-bold ">
              Read For Other Signs{" "}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-4 lg:grid-cols-6">
            {cards?.map((item, index) => (
              <div key={index} className="mx-auto">
                <img className="w-44 h-72" src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SignsCard;
