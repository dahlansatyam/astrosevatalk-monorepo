import ChatCard from "@/components/astrolger-chat/ChatCard";
import ChatintakeForm from "@/components/astrolger-chat/ChatintakeForm";
import Hero from "@/components/astrolger-chat/Hero";
import ChatFaq from "@/components/Faqandconsult/ChatFaq";
import Consulttation from "@/components/Faqandconsult/Consulttation";
import { Section } from "@/components/Layout";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const astrologerList = [
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
];

function AstrologerChat({}: Props) {
  return (
    <div>
      <Hero />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Chat With Astrologer
            </p>
          </div>
        </Section>
      </div>
      <ChatCard astrologerList={astrologerList} />
      <Consulttation />
      <ChatFaq />
      <ChatintakeForm />
    </div>
  );
}

export default AstrologerChat;
