import React from "react";
import { Section } from "@/components/Layout";

const cards = [
  {
    src: "/aries-card.svg",
    alt: "aries",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/taurus-card.svg",
    alt: "taurus",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/gemini-card.svg",
    alt: "gemini",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/cancer-card.svg",
    alt: "cancer",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/leo-card.svg",
    alt: "leo",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/virgo-card.svg",
    alt: "virgo",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/libra-card.svg",
    alt: "libra",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/scorpio-card.svg",
    alt: "scorpio",
  },
  {
    src: "/sagittarius-card.svg",
    alt: "sagittarius",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/capricorn-card.svg",
    alt: "capricorn",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/aquarius-card.svg",
    alt: "aquarius",
    url: "/horoscopesigns/aries",
  },
  {
    src: "/pisces-card.svg",
    alt: "pisces",
    url: "/horoscopesigns/aries",
  },
];

type Props = {};

const SignsCard = ({}: Props) => {
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
                <img className="h-72 w-44" src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SignsCard;
