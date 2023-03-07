import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Check from "@/components/daily-horoscope/Check";
import Horoscopeswipe from "@/components/common/Horoscopeswipe";
import Hero from "@/components/muhurat/Hero";
import About from "@/components/muhurat/About";
import ImportenceofMuhurat from "@/components/muhurat/ImportenceofMuhurat";
import Diffrentmuhurat from "@/components/muhurat/Diffrentmuhurat";
import MustknowFactor from "@/components/muhurat/MustknowFactor";
import Yoga from "@/components/muhurat/Yoga";

type Props = {};

const Muhurat = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Shubh Muhurat
          </p>
        </div>
      </Section>
      <About />
      <ImportenceofMuhurat />
      <Diffrentmuhurat />
      <MustknowFactor />
      <Yoga />
      <Check />
      <Horoscopeswipe />
    </div>
  );
};

export default Muhurat;
