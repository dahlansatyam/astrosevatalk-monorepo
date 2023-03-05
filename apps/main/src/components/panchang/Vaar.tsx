import React from "react";
import { Section } from "../Layout";

type Props = {};

const Vaar = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8  lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-center text-2xl font-bold md:text-4xl">Vaar </p>
          </div>
          <div className="text-justify">
            <p>
              Vaar, also called Din, is the easiest thing to understand when
              considering Panchang reading. Vaar means the day of the week. Each
              day of the week does not just differ by its name but is also ruled
              by a different astrological planet. Knowing what planet is ruling
              what day helps you in understanding what kind of effect the day
              can have on you. Below are the names of the day and in the bracket
              is the planet that rules that particular day. 
            </p>
            <div className="mx-4 flex flex-col gap-1">
              <p>. Sunday (Sun)</p>
              <p>. Monday (Moon)</p>
              <p>. Tuesday (Mars)</p>
              <p>. Wednesday (Mercury)</p>
              <p>. Thursday (Jupiter)</p>
              <p>. Friday (Venus)</p>
              <p>. Saturday (Saturn)</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Vaar;
