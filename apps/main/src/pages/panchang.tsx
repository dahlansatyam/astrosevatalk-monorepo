import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Hero from "@/components/panchang/Hero";
import About from "@/components/panchang/About";
import FormPanchang from "@/components/panchang/Form";
import Check from "@/components/daily-horoscope/Check";
import Horoscopeswipe from "@/components/common/Horoscopeswipe";
import WhypanchangUsed from "@/components/panchang/WhypanchangUsed";
import Vaar from "@/components/panchang/Vaar";
import Tithi from "@/components/panchang/Tithi";
import Nakshtra from "@/components/panchang/Nakshtra";
import Yoga from "@/components/panchang/Yoga";
import Karna from "@/components/panchang/Karna";
import AsubhMuhurat from "@/components/panchang/AsubhMuhurat";

type Props = {};

const Panchang = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Today Panchang
          </p>
        </div>
      </Section>
      <About />
      <FormPanchang />
      <AsubhMuhurat />
      <WhypanchangUsed />
      <Vaar />
      <Tithi />
      <Nakshtra />
      <Yoga />
      <Karna />
      <Check />
      <Horoscopeswipe />
    </div>
  );
};

export default Panchang;
