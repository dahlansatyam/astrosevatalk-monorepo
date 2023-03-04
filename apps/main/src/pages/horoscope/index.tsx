import React from "react";
import Hero from "@/components/daily-horoscope/Hero";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Card from "@/components/daily-horoscope/Card";
import LiveConsultation from "@/components/Faqandconsult/LiveConsultation";
import HorscopeFaq from "@/components/Faqandconsult/HorscopeFaq";
import AboutHoroscope from "@/components/daily-horoscope/AboutHoroscope";
import Check from "@/components/daily-horoscope/Check";

type Props = {};

const Horoscope = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            {" "}
            Daily Horoscope
          </p>
        </div>
      </Section>
      <Card />
      <AboutHoroscope />
      <LiveConsultation />
      <Check />
      <HorscopeFaq />
    </div>
  );
};

export default Horoscope;
