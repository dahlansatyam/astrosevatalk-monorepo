import ConnectCard from "@/components/common/ConnectCard";
import HorscopeFaq from "@/components/Faqandconsult/HorscopeFaq";
import AboutSign from "@/components/horoscopesigns/aries/AboutSign";
import Compatability from "@/components/horoscopesigns/aries/Compatability";
import Hero from "@/components/horoscopesigns/aries/Hero";
import SignsCard from "@/components/horoscopesigns/aries/SignsCard";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const SingleHoroscope = (props: Props) => {
  const router = useRouter();

  const horoscopeType = router.query.slug;

  console.log("horoscopr", horoscopeType);
  return (
    <div>
      <Hero horoscopeType={horoscopeType} />
      <AboutSign horoscopeType={horoscopeType} />
      <ConnectCard />
      <HorscopeFaq />
      <SignsCard />
      <Compatability horoscopeType={horoscopeType} />
    </div>
  );
};

export default SingleHoroscope;
