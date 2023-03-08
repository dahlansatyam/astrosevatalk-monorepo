import React from "react";
import { Section } from "../Layout";
import Link from "next/link";

type Props = {};

const appointment = [
  {
    name: "Chat with Astrologer",
    src: "/Appoinmentshero/icon-01.svg",
    url: "/chat-astrologer",
  },
  {
    name: "Talk to Astrologer",
    src: "/Appoinmentshero/icon-02.svg",
    url: "/talk-astrologer",
  },
  {
    name: "Live Astrologers",
    src: "/Appoinmentshero/icon-03.svg",
    url: "/Live-astrologer",
  },
  {
    name: "Live video chat",
    src: "/Appoinmentshero/icon-04.svg",
    url: "/videochat-astrologer",
  },
];

function AppointmentsHero({}: Props) {
  return (
    <div className="py-8">
      <Section>
        <div className="">
          {/* <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Appointments
          </h2> */}
          <div className="grid  gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {appointment?.map((item, index) => (
              <Link
                key={index}
                href={item?.url}
                className="bg-white/5 flex h-[204px] w-[190px] flex-col items-center justify-center space-y-2 rounded-2xl border-[3px] border-[#D3B160] p-4"
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

export default AppointmentsHero;
