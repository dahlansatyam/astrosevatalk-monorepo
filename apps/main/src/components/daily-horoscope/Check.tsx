import React from "react";
import { Section } from "../Layout";

const check = [
  {
    id: 1,
    name: "Tommorow's Horoscope",
    img: "/Checkicons/Tommorow.svg",
  },
  {
    id: 2,
    name: "Yestarday's Horoscope",
    img: "/Checkicons/Yestarday.svg",
  },
  {
    id: 1,
    name: "Weekly's Horoscope",
    img: "/Checkicons/Weekly.svg",
  },
  {
    id: 1,
    name: "Monthly Horoscope",
    img: "/Checkicons/Monthly.svg",
  },
  {
    id: 1,
    name: "Yearly Horoscope",
    img: "/Checkicons/Yearly.svg",
  },
];

type Props = {};

const Check = (props: Props) => {
  return (
    <div className="mt-4 bg-[url('/chat-bg.svg')] py-8">
      <Section>
        <div className="">
          <div>
            <p className="text text-center text-4xl font-bold text-white">
              Also Check
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 py-6 sm:grid-cols-2 md:grid-cols-5">
            {check.map((item, index) => (
              <div
                key={index}
                className="flex h-[135px] w-[142px] flex-col  items-center gap-1 rounded-md bg-[#E2CB85]"
              >
                <img className="h-[85px] w-[88px]" src={item?.img} alt="" />
                <p className="text-center font-semibold px-2 text-black">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Check;
