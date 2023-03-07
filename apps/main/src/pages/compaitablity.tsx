import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Hero from "@/components/Compatibility/Hero";

type Props = {};

const Compaitablity = (props: Props) => {
  return (
    <div>
      <div>
        <Hero />
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Compaitablity
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Compaitablity;
