import React from "react";
import { Section } from "../Layout";

type Props = {};

function About({}: Props) {
  return (
    <div className="bg-[url('/about-bg.svg')] bg-cover py-8 lg:py-16">
      <Section>
        <div className="space-y-6">
          <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            About US
          </h2>
          <p>
            Astrology, type of divination that involves the forecasting of
            earthly and human events through the observation and interpretation
            of the fixed stars, the Sun, the Moon, and the planets. Devotees
            believe that an understanding of the influence of the planets and
            stars on earthly affairs allows them to both predict and affect the
            destinies of individuals, groups, and nations. Though often regarded
            as a science throughout its history, astrology is widely considered
            today to be diametrically opposed to the findings and theories of
            modern Western science. <br />
            Astrology, type of divination that involves the forecasting of
            earthly and human events through the observation and interpretation
            of the fixed stars, the Sun, the Moon, and the planets. Devotees
            believe that an understanding of the influence of the planets and
            stars on earthly affairs allows them to both predict and affect the
            destinies of individuals, groups, and nations. Though often regarded
            as a science throughout its history, astrology is widely considered
            today to be diametrically opposed to the findings and theories of
            modern Western science. Astrology, type of divination that involves
            the forecasting of earthly and human events through the observation
            and interpretation of the fixed stars, the Sun, the Moon, and the
            planets. Devotees believe that an understanding of the influence of
            the planets and stars on earthly affairs allows them to both predict
            and affect the destinies of individuals, groups, and nations. Though
            often regarded as a science throughout its history, astrology is
            widely considered today to be diametrically opposed to the findings
            and theories of modern Western science. Astrology, type of
            divination that involves the forecasting of earthly and human events
            through the observation and interpretation of the fixed stars, the
            Sun, the Moon, and the planets. Devotees believe that an
            understanding of the influence of the planets and stars on earthly
            affairs allows them to both predict and affect the destinies of
            individuals, groups, and nations. Though often regarded as a science
            throughout its history, astrology is widely considered today to be
            diametrically opposed to the findings and theories of modern Western
            science.
          </p>
        </div>
      </Section>
    </div>
  );
}

export default About;
