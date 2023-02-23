import React from "react";
import Hero from "@/components/daily-horoscope/Hero";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Card from "@/components/daily-horoscope/Card";
import HoroscopeConsulttation from "@/components/Faqandconsult/HoroscopeConsultation";
import LiveFaq from "@/components/Faqandconsult/LiveFaq";

type Props = {};

const Dailyhoroscope = (props: Props) => {
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
      <HoroscopeConsulttation />
      <LiveFaq />
    </div>
  );
};

export default Dailyhoroscope;
