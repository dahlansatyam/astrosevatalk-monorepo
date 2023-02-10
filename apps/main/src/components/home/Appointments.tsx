import React from "react";
import { Section } from "../Layout";

type Props = {};

const appointment = [
  {
    name: "Chat with Astrologer",
    src: "/icon-01.png",
  },
  {
    name: "Talk to Astrologer",
    src: "/icon-02.png",
  },
  {
    name: "Live Astrologers",
    src: "/icon-03.png",
  },
  {
    name: "Live video chat",
    src: "/icon-04.png",
  },
];

function Appointments({}: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-16">
      <Section>
        <div className="space-y-6">
          <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            Appointments
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {appointment?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 rounded-2xl border-2 border-[#D3B160] bg-black p-4"
              >
                <img src={item.src} alt={item.name} className="mx-auto w-1/2" />
                <p className="text-center text-xl font-semibold text-[#D3B160]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Appointments;
