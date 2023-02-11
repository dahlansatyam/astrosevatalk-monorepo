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
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[45px]">
      <Section>
        <div className="">
          <div className="mb-[35px]">
            <h2 className="mb-[15px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[48px]">
              Our Astrologers
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-2xl">
              5000+ Best Astrologers from India for Online Consultation
            </h3>
          </div>
          <div className="md:grid-cols3 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {astrologers?.map((item, index) => (
              <div
                key={index}
                className="mt-6 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-[#D3B160] bg-black py-4 px-6"
              >
                <div className="h-[120px] w-[120px] rounded-full border-[5px] border-[#D3B160]"></div>
                <div className="text-center font-[georgia] text-[#D3B160]">
                  <p className="text-[22px] font-semibold">{item?.name}</p>
                  <p className="text-base font-semibold">{item.type}</p>
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
