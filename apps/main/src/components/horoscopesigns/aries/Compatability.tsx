import React from "react";
import { Section } from "@/components/Layout";

type Props = {
  horoscopeType: string | string[] | undefined;
};

const Compatability = ({ horoscopeType }: Props) => {
  const Comparecards = [
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Aries 1.svg",
      btn: `${horoscopeType} And Aries`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Taurus 1.svg",
      btn: `${horoscopeType} And Taurus`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Gemini 1.svg",
      btn: `${horoscopeType} And Gemini`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Cancer 1.svg",
      btn: `${horoscopeType} And Cancer`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/leo 1.svg",
      btn: `${horoscopeType} And leo`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Virgo 1.svg",
      btn: `${horoscopeType} And Virgo`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Libra 1.svg",
      btn: `${horoscopeType} And Libra`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Scorpio 1.svg",
      btn: `${horoscopeType} And Scorpio`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Sagittarius 1.svg",
      btn: `${horoscopeType} And Sagittarius`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Capricon 1.svg",
      btn: `${horoscopeType} And Capricon`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/Acquarius 1.svg",
      btn: `${horoscopeType} And Acquarius`,
    },
    {
      src: "/Horoscopeicons/Aries 1.svg",
      src1: "/Horoscopeicons/pisces 1.svg",
      btn: `${horoscopeType} And pisces`,
    },
  ];
  return (
    <div className="mb-4 bg-[url('/chat-bg.svg')] bg-cover py-12">
      <Section>
        <div>
          <p className="pb-10 text-center text-2xl font-bold text-white md:text-4xl">
            {horoscopeType} Compatibility With Other Signs
          </p>
        </div>
        <div className="grid gap-x-3 gap-y-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {Comparecards?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="flex space-x-6">
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-b-[#e7bb55]  bg-black">
                  <img
                    className=" h-[108px] w-[84px] "
                    src={item?.src}
                    alt=""
                  />
                </div>
                <div className=" flex h-[115px] w-[123px] items-center justify-center rounded-2xl border-b-2 border-b-[#e7bb55]  bg-black">
                  <img className="h-[108px] w-[84px]" src={item?.src1} alt="" />
                </div>
              </div>
              <div className="w-[272px]">
                <button className="w-full rounded-md bg-[#e7bb55] py-1 px-5 text-[18px] font-semibold text-white">
                  {item?.btn}
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
