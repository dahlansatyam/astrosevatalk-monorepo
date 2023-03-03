import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Hero from "@/components/kundli/FreeKundli/Hero";
import Check from "@/components/daily-horoscope/Check";
import ConnectCard from "@/components/common/ConnectCard";
import HorscopeFaq from "@/components/Faqandconsult/HorscopeFaq";
import AboutKundli from "@/components/kundli/FreeKundli/AboutKundli";
import GenerateKundli from "@/components/kundli/FreeKundli/GenerateKundli";
import Horoscopeswipe from "@/components/common/Horoscopeswipe";

type Props = {};

const kundli = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Free Kundli
          </p>
        </div>
      </Section>
      <GenerateKundli />
      <ConnectCard />
      <AboutKundli />
      <HorscopeFaq />
      <Check />
      <Horoscopeswipe />
    </div>
  );
};

export default kundli;
