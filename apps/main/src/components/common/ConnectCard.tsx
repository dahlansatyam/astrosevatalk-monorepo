import React from "react";
import { Section } from "../Layout";
import Link from "next/link";

type Props = {};

const ConnectCard = (props: Props) => {
  return (
    <div className="bg-[url('/home-hero-bg.png')] bg-cover py-8 lg:py-[35px]">
      <Section>
        <div>
          <div className="flex flex-col items-center py-6 text-3xl font-bold text-white">
            <p>Connect With an Astrologer on Call or Chat </p>
            <p>for more detailed Predictions</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row">
            <Link href="/talk-astrologer">
              <button className=" rounded-3xl bg-[#e7bb55] py-2 px-5 text-[22px] font-semibold text-white">
                Talk To Astrologer
              </button>
            </Link>
            <Link href="/chat-astrologer">
              <button className=" rounded-3xl bg-[#e7bb55] py-2 px-5 text-[22px] font-semibold text-white">
                Chat With Astrologer
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ConnectCard;
