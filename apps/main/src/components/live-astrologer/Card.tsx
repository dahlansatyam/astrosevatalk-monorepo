import React from "react";
import { Section } from "../Layout";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="py-8">
      <Section>
        <div className="flex flex-col space-y-4 text-justify">
          <p>
            In a new way to interact with astrologers, Astrotalk brings you
            Astrotalk Live, where you can talk to astrologers via live sessions
            and ask them questions for free. Astrotalk Live is a new and
            innovative way to talk to an astrologer face-to-face and get your
            queries answered while enjoying the best of astrology. On Astrotalk
            live, anyone can get guidance from the best astrologers in India on
            questions spanning across topics such as marriage, career, love,
            health and much more.
          </p>
          <p>
            Talking with astrologers through live sessions is one of the most
            popular features of Astrotalk, as no other app provides this unique
            way to consult an astrologer. Apart from just being unique, the
            feature is easy to use and highly interactive. Accessing an
            astrologer on Astrotalk Live is fairly simple, and so is getting
            your queries answered by them. To have the best experience of live
            sessions, it is recommended that you ask YES and NO questions to the
            astrologer. Also, if you like the session being delivered by an
            astrologer, you can even contribute to their earnings by the means
            of donations.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Card;
