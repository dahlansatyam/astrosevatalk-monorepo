import React from "react";
import { Section } from "../Layout";
type Props = {};

const card = [
  {
    id: 1,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 2,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 3,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 4,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 5,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 6,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 7,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
  {
    id: 8,
    img: "/aries-card.svg",
    name: "Aries Daily Horoscope",
    date: "March 21 - April 19",
    note: "Mechanical reactions and going through the motions is just not good enough, you want emotional authentic and greater honesty in relationships even if it is uncomfortable.",
  },
];

const Card = (props: Props) => {
  return (
    <div className="py-8">
      <Section>
        <div className="flex flex-col space-y-4 text-justify">
          <p>
            Looking for today's horoscope? Or yesterday's? Well, on
            Astrosevatalk we have covered everything right from Daily horoscope
            to weekly to monthly horoscope. What is the use of one's Daily
            horoscope you may ask? Well, as per our astrologers, the daily
            horoscope is one of the ways that you can use to plan out your day.
            As per astrology, our day to day life is influenced by the movements
            of planets, as they constantly shift their positions from one sign
            to another. The movement can bring both positive and negative
            influences in one's life, and you knowing such things in advance
            helps you in safeguarding yourself from the uncertainties.
          </p>
          <p>
            So reading Today's horoscope is like a healthy habit one can
            consider adopting as it shall help in changing the outcomes of your
            life. The daily horoscope on Astrosevatalk is prepared by expert
            astrologers and thus is very insightful. The daily horoscope not
            only tells you what's coming for you in the future but also allows
            you remedies that you can adopt to tackle anything negative. The
            Today's horoscope is one of the ways that can help you in steering
            your life in the right direction. So make sure you give it a read.
          </p>
        </div>

        <div className="grid gap-5 py-16 lg:grid-cols-2 ">
          {card.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col rounded-2xl border-4 border-black bg-[#FFF7E5] p-6 md:h-[231px] md:w-[570px] md:flex-row"
            >
              <div className="w-full">
                <img
                  className="w-full md:h-[185px] md:w-[132px]  "
                  src="/aries-card.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 text-justify">
                <div>
                  <p className="text-[22px] font-bold">{item?.name}</p>
                  <p>{item?.date}</p>
                </div>
                <p>
                  <span className="font-bold">Personal:</span> {item?.note}
                </p>
                <p className="flex cursor-pointer justify-end font-bold">
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Card;
