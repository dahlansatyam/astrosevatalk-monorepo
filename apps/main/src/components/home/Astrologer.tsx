import React from "react";
import { Section } from "../Layout";

type Props = {};

const astrologers = [
  {
    name: "Nishant Singh",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Nitika",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Bharat Singh",
    type: "Taroyt",
    src: "",
  },
  {
    name: "Satyam",
    type: "Taroyt",
    src: "",
  },
];

function Astrologer({}: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-16">
      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Our Astrologers
            </h2>
            <h3 className="text-center text-base font-semibold sm:text-lg lg:text-xl">
              5000+ Best Astrologers from India for Online Consultation
            </h3>
          </div>
          <div className="md:grid-cols3 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {astrologers?.map((item, index) => (
              <div
                key={index}
                className="mt-6 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-[#D3B160] bg-black py-4 px-6"
              >
                <div className="h-24 w-24 rounded-full border-2 border-[#D3B160]"></div>
                <div className="text-center text-[#D3B160]">
                  <p className="text-xl font-semibold">{item?.name}</p>
                  <p>{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Astrologer;
