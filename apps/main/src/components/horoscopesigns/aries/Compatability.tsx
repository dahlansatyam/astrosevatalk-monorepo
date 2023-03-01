import React from "react";
import { Section } from "@/components/Layout";

const Comparecards = [
  {
    src: "/aries-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/taurus-card.svg",
    src1: "/aries-card.svg",
  },
  {
    src: "/gemini-card.svg",
    src1: "/aries-card.svg",
  },
  {
    src: "/cancer-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/leo-card.svg",
    src1: "/aries-card.svg",
  },
  {
    src: "/virgo-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/libra-card.svg",
    src1: "/aries-card.svg",
  },
  {
    src: "/scorpio-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/scorpio-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/scorpio-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/scorpio-card.svg",
    src1: "/gemini-card.svg",
  },
  {
    src: "/scorpio-card.svg",
    src1: "/gemini-card.svg",
  },
];

type Props = {};

const Compatability = (props: Props) => {
  return (
    <div className="mb-4 bg-black py-12">
      <Section>
        <div>
          <p className="pb-10 text-center text-2xl font-bold text-white md:text-4xl">
            Aries Compatibility With Other Signs
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-3 lg:grid-cols-4">
          {Comparecards?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex gap-6">
                <img
                  className="h-[108px]  w-[84px] rounded-2xl"
                  src={item?.src}
                  alt=""
                />
                <img
                  className="h-[108px]  w-[84px] rounded-2xl"
                  src={item?.src1}
                  alt=""
                />
              </div>
              <div>
                <button className=" rounded-md bg-[#e7bb55] py-1 px-5 text-[22px] font-semibold text-white">
                  Aries With Aries
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Compatability;
