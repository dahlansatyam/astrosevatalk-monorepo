import React from "react";
import { Section } from "../Layout";

type Props = {};

const cards = [
  {
    name: "Love Compatibility",
    src: "/compaitablity/love.svg",
  },
  {
    name: "work Compatibility",
    src: "/compaitablity/work.svg",
  },
  {
    name: "Chinese Compatibility",
    src: "/compaitablity/chines.svg",
  },
];

function About({}: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-8">
          <p className="text-center">
            Find out how your compatibility compares with your lover, friends,
            family, and more with our compatibility reading for all zodiac
            signs.
          </p>
          <div>
            <div className="mb-[42px] grid grid-cols-1 gap-6 md:grid-cols-3">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border-[3px] border-black bg-[#FFF7E5]"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="mx-auto h-[272px] w-[151px]"
                  />
                  <p className=" bg-black  py-3 text-center text-[22px] text-white">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
