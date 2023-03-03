import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Hero from "@/components/kundli/Kundlimatching/Hero";
import ConnectCard from "@/components/common/ConnectCard";
import Check from "@/components/daily-horoscope/Check";
import HorscopeFaq from "@/components/Faqandconsult/HorscopeFaq";
import AboutkundliMatching from "@/components/kundli/Kundlimatching/AboutkundliMatching";
import Matching from "@/components/kundli/Kundlimatching/Matching";
import Horoscopeswipe from "@/components/common/Horoscopeswipe";

type Props = {};

const kundliMatching = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Kundli Matching
          </p>
        </div>
      </Section>
      <Matching />
      <ConnectCard />
      <AboutkundliMatching />
      <HorscopeFaq />
      <Check />
      <Horoscopeswipe />
    </div>
  );
};

export default kundliMatching;
