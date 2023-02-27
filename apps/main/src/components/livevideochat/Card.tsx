import React from "react";
import { Section } from "../Layout";
type Props = {};

const card = [
  {
    id: 1,
    img: "/Rectangle 154.png",
    name: "abha",
  },
  {
    id: 2,
    img: "/Rectangle 154.png",
    name: "aaisha",
  },
  {
    id: 3,
    img: "/Rectangle 154.png",
    name: "amma",
  },
  {
    id: 4,
    img: "/Rectangle 154.png",
    name: "aarti",
  },
  {
    id: 5,
    img: "/Rectangle 154.png",
    name: "joyti",
  },
  {
    id: 6,
    img: "/Rectangle 154.png",
    name: "rita",
  },
  {
    id: 7,
    img: "/Rectangle 154.png",
    name: "riya",
  },
  {
    id: 8,
    img: "/Rectangle 154.png",
    name: "pooja",
  },
  {
    id: 9,
    img: "/Rectangle 154.png",
    name: "babli",
  },
];

const Card = (props: Props) => {
  return (
    <div className="py-8">
      <Section>
        <div className="flex flex-col space-y-4 text-justify">
          <p>
            In a new way to interact with astrologers, Astrosevatalk brings you
            Astrosevatalk Live, where you can talk to astrologers via live
            sessions and ask them questions for free. Astrosevatalk Live is a
            new and innovative way to talk to an astrologer face-to-face and get
            your queries answered while enjoying the best of astrology. On
            Astrosevatalk live, anyone can get guidance from the best
            astrologers in India on questions spanning across topics such as
            marriage, career, love, health and much more.
          </p>
          <p>
            Talking with astrologers through live sessions is one of the most
            popular features of Astrosevatalk, as no other app provides this
            unique way to consult an astrologer. Apart from just being unique,
            the feature is easy to use and highly interactive. Accessing an
            astrologer on Astrosevatalk Live is fairly simple, and so is getting
            your queries answered by them. To have the best experience of live
            sessions, it is recommended that you ask YES and NO questions to the
            astrologer. Also, if you like the session being delivered by an
            astrologer, you can even contribute to their earnings by the means
            of donations.
          </p>
        </div>

        <div className=" mx-auto grid grid-cols-1 gap-5  py-8 md:grid-cols-2 lg:grid-cols-3">
          {card.map((item, index) => (
            <div
              key={index}
              className="mx-auto h-96 w-[300px] items-center rounded-3xl"
            >
              <div className="absolute">
                <img
                  className=" h-full overflow-hidden"
                  src={item?.img}
                  alt=""
                />
              </div>
              <div className="relative m-4 flex  justify-between  ">
                <p className="w-16 rounded-2xl bg-[#CDB06F] text-center font-bold">
                  Go Live
                </p>
                <p className="w-8 rounded-2xl bg-[#CDB06F] text-center font-bold">
                  Go
                </p>
              </div>
              <div className="relative mt-56 bg-black/50">
                <p className="py-2 text-center font-bold text-white">
                  {item?.name}
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
