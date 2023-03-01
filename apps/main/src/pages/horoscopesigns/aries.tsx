import ConnectCard from "@/components/common/ConnectCard";
import HorscopeFaq from "@/components/Faqandconsult/HorscopeFaq";
import AboutSign from "@/components/horoscopesigns/aries/AboutSign";
import Compatability from "@/components/horoscopesigns/aries/Compatability";
import Hero from "@/components/horoscopesigns/aries/Hero";
import SignsCard from "@/components/horoscopesigns/aries/SignsCard";
import React from "react";

type Props = {};

const aries = (props: Props) => {
  return (
    <div>
      <Hero />
      <AboutSign />
      <ConnectCard />
      <HorscopeFaq />
      <SignsCard />
      <Compatability />
    </div>
  );
};

export default aries;
