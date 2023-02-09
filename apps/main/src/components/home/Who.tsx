import React from "react";
import { Section } from "../Layout";

type Props = {};

function Who({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12">
      <Section>
        <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
          <div className="lg:w-1/3">
            <img src="/who.png" alt="who" className="" />
          </div>
          <div className="space-y-6 lg:w-2/3">
            <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Who We Are?
            </h2>
            <p>
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
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Who;
