import React from "react";
import { Section } from "../Layout";

type Props = {};

function Who({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12">
      <Section>
        <div className="flex flex-col items-center space-y-4 lg:grid lg:grid-cols-12 lg:space-x-6 lg:space-y-0">
          <div className="col-span-3">
            <img src="/who.png" alt="who" className="" />
          </div>
          <div className="col-span-9 space-y-6">
            <h2 className="mb-[18px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
              Who We Are?
            </h2>
            <p className="text-justify text-base font-medium">
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that an understanding of the influence
              of the planets and stars on earthly affairs allows them to both
              predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrically
              opposed to the findings and theories of modern Western science.
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that an understanding of the influence
              of the planets and stars on earthly affairs allows them to both
              predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrically
              opposed to the findings and theories of modern Western science.
              Astrology, type of divination that involves the forecasting of
              earthly and human events through the observation and
              interpretation of the fixed stars, the Sun, the Moon, and the
              planets. Devotees believe that. earthly affairs allows them to
              both predict and affect the destinies of individuals, groups, and
              nations. Though often regarded as a science throughout its
              history, astrology is widely considered today to be diametrica.
            </p>
            <button className="mx-auto flex w-fit rounded-lg bg-black py-3 px-6 font-semibold text-white lg:text-2xl">
              Contact Us
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Who;
