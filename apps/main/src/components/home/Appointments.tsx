import React from "react";
import { Section } from "../Layout";
import Link from "next/link";

type Props = {};

const appointment = [
  {
    name: "Chat with Astrologer",
    src: "/icon-01.png",
    url: "/chat-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/icon-02.png",
    url: "/talk-astrologer",
  },
  {
    name: "Live Astrologers",
    src: "/icon-03.png",
    url: "/live-astrologer",
  },
  {
    name: "Live video chat",
    src: "/icon-04.png",
    url: "/videochat-astrologer",
  },
];

function Appointments({}: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[46px]">
      <Section>
        <div className="">
          {/* <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Appointments
          </h2> */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {appointment?.map((item, index) => (
              <Link
                key={index}
                href={item?.url}
                className="flex h-[204px] w-[300px] flex-col items-center justify-center space-y-2 rounded-2xl border-[3px] border-[#D3B160] bg-black p-4"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto h-[140px] w-[140px]"
                />
                <p className="items-center text-center font-[georgia] text-sm font-[700]  text-[#D3B160] lg:text-[14px]">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Appointments;
