import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Section } from "../Layout";

type Props = {
  astrologerList: number[];
};

function TalkCard({ astrologerList }: Props) {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[45px]">
      <Section>
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {astrologerList.map((item) => (
              <div className="flex justify-evenly space-x-4 rounded-xl border-4 border-[#F2CB6E] bg-black p-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  {" "}
                  <div className="rounded-full bg-[#D3B160] p-1">
                    <div className="rounded-full bg-[#FEE8A0] p-1">
                      <img src="/chat.png" alt="chat" />
                    </div>
                  </div>
                  <div className="flex">
                    <StarIcon className="h-5 w-5 text-[#CDB06F]" />
                    <StarIcon className="h-5 w-5 text-[#CDB06F]" />
                    <StarIcon className="h-5 w-5 text-[#CDB06F]" />
                    <StarIcon className="h-5 w-5 text-[#CDB06F]" />
                    <StarIcon className="h-5 w-5 text-[#CDB06F]" />
                  </div>
                  <p className="text-xs font-medium text-white">2090 orders</p>
                </div>
                <div className="space-y-3">
                  <p className="font-[georgia] text-[22px] font-semibold text-[#C6A65A]">
                    Anupam
                  </p>
                  <div className="space-y-2">
                    <p className="text-base text-[#FFF9EA]">
                      Vedic, Vastu, Face reading
                    </p>
                    <p className="text-xs text-[#FFF9EA]">
                      English, Hindi, Punjabi
                    </p>
                    <p className="text-xs text-[#FFF9EA]">
                      Experience: 3 years
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-[#CDB06F]">
                      Free
                    </p>
                    <button className="rounded-lg bg-gradient-to-b from-[#EED387] to-[#F9B800] py-2 px-4 text-base font-semibold text-white">
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mx-auto flex w-fit rounded-lg bg-black py-3 px-6 font-semibold text-white lg:text-[24px]">
            View More
          </button>
        </div>
      </Section>
    </div>
  );
}

export default TalkCard;
