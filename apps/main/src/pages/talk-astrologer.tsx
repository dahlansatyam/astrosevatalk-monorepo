import React from "react";
import { Section } from "@/components/Layout";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import Hero from "@/components/astrologer-call/Hero";
import TalkCard from "@/components/astrologer-call/TalkCard";
import Consulttation from "@/components/Faqandconsult/Consulttation";
import TalkFaq from "@/components/Faqandconsult/TalkFaq";
import Alert from "@/components/astrologer-call/Alert";

type Props = {};

const astrologerList = [
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
];

const AstrologerCall = ({}: Props) => {
  return (
    <div>
      <Hero />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              {" "}
              Talk To Astrologer
            </p>
          </div>
        </Section>
      </div>
      <TalkCard astrologerList={astrologerList} />

      <Consulttation />
      <TalkFaq />
      <Alert />
    </div>
  );
};

export default AstrologerCall;
