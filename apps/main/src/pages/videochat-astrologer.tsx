import React from "react";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/Layout";
import Card from "@/components/livevideochat/Card";
import LiveConsulttation from "@/components/Faqandconsult/LiveConsultation";
import LiveFaq from "@/components/Faqandconsult/LiveFaq";
import Hero from "@/components/livevideochat/Hero";
import VideochatConsult from "@/components/Faqandconsult/VideochatConsult";
import VideoChatfaq from "@/components/Faqandconsult/VideoChatfaq";

type Props = {};

const Videochatastrologer = (props: Props) => {
  return (
    <div>
      <Hero />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            {" "}
            Live Video Chat
          </p>
        </div>
      </Section>
      <Card />
      <VideochatConsult />
      <VideoChatfaq />
    </div>
  );
};

export default Videochatastrologer;
