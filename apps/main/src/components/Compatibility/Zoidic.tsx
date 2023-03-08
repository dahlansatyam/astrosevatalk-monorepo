import React from "react";
import { Section } from "../Layout";

type Props = {};

const Zoidic = (props: Props) => {
  return (
    <div>
      <div className="bg-[#FFF7E5] py-8 lg:py-[51px]">
        <Section>
          <div className="">
            <p className="pb-8 text-center text-2xl font-semibold md:text-[40px]">
              Personality Traits and More
            </p>
            <div>
              <p className="text-[32px]">Zodiac Man</p>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex  h-[272px] items-center justify-center rounded-xl bg-black md:w-2/4">
                  <img
                    className="h-[244px] w-[244px]"
                    src="/compaitablity/zoadicman.svg"
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <p className="text-justify">
                    When trying to understand that female-identified person in
                    your life, their zodiac sign is the door into their personal
                    style, as well as what makes them tick. This in-depth
                    horoscope guide about the zodiac woman in your life has
                    everything you need to know from sex, career, home life,
                    gift ideas, and love compatibility.When trying to understand
                    that female-identified person in your life, their zodiac
                    sign is the door into their personal style, as well as what
                    makes them tick. This in-depth horoscope guide about the
                    zodiac woman in your life has everything you need to know
                    from sex, career, home life, gift ideas, and love
                    compatibility.When trying to understand that
                    female-identified person in your life, their zodiac sign is
                    the door into their personal style, as well as what makes
                    them tick. This in-depth horoscope guide about the zodiac
                    woman in your life has everything you need to know from sex,
                    career, home life, gift ideas, and love compatibility.
                  </p>
                  <p className="font-semibold">CONTINUE READING</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
        <Section>
          <div className="">
            <div>
              <p className="text-[32px]">Zodiac Women</p>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex h-[272px] md:w-2/4  items-center justify-center rounded-xl bg-black">
                  <img
                    className="h-[244px] w-[244px]"
                    src="/compaitablity/zoadicwomen.svg"
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <p className="text-justify">
                    When trying to understand that Male-identified person in
                    your life, their zodiac sign is the door into their personal
                    style, as well as what makes them tick. This in-depth
                    horoscope guide about the zodiac woman in your life has
                    everything you need to know from sex, career, home life,
                    gift ideas, and love compatibility. When trying to
                    understand that Male-identified person in your life, their
                    zodiac sign is the door into their personal style, as well
                    as what makes them tick. This in-depth horoscope guide about
                    the zodiac woman in your life has everything you need to
                    know from sex, career, home life, gift ideas, and love
                    compatibility.When trying to understand that Male-identified
                    person in your life, their zodiac sign is the door into
                    their personal style, as well as what makes them tick. This
                    in-depth horoscope guide about the zodiac woman in your life
                    has everything you need to know from sex, career, home life,
                    gift ideas, and love compatibility.
                  </p>
                  <p className="font-semibold">CONTINUE READING</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Zoidic;
