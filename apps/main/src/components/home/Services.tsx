import React from "react";
import { Section } from "../Layout";

type Props = {};

const services = [
  {
    name: "Compatibility",
    src: "/service-1.png",
  },
  {
    name: "Muhurat",
    src: "/service-2.png",
  },
  {
    name: "Palm Reading",
    src: "/service-3.png",
  },
];

function Services({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
      <Section>
        <div className="">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Our Services
          </h2>
          <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-[3px] border-black"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto h-[390px] w-full rounded-3xl border-[10px] border-white bg-transparent object-contain py-8"
                />
                <p className="-mt-5 bg-black py-[14px] px-[90px] text-center font-[georgia] text-2xl text-white lg:text-[32px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <button className="mx-auto flex w-fit rounded-lg bg-black py-3 px-6 font-semibold text-white lg:text-[28px]">
            View More
          </button>
        </div>
      </Section>
    </div>
  );
}

export default Services;
