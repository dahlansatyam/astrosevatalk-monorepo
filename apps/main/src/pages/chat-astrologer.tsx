import ChatCard from "@/components/astrolger-chat/ChatCard";
import Hero from "@/components/astrolger-chat/Hero";
import { Section } from "@/components/Layout";
import { HomeIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const astrologerList = [
  1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
];

function AstrologerChat({}: Props) {
  return (
    <div>
      <Hero />

      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Chat With Astrologer
            </p>
          </div>
        </Section>
      </div>
      <ChatCard astrologerList={astrologerList} />
      <div className="bg-[url('/chat-bg.svg')] bg-cover py-8 lg:py-[49px]">
        <Section>
          <div className="space-y-6">
            <div className="text-center font-[georgia] text-white">
              <h2 className="text-[32px] font-bold">
                How Talking to an astrologer can help you?
              </h2>
              <h3 className="text-2xl">Best online astrology consultation</h3>
            </div>
            <p className="text-justify text-[20px] text-white">
              There’s literally no point in overthinking about your concerns
              when the solution to them is just a call away. Astrotalk brings to
              you a pool of over 500+ astrologers with whom you can contact on
              chat and share with them your problems across all aspects of life
              including love, finance, Vastu, career, luck, marriage and so on.
              Simply put, life is a cocktail of highs and lows, and while we
              enjoy the good times, the bad times, though they teach us a lot,
              can also leave us worried, depressed and sad. Such times can also
              hamper the relationship we share with other people in our lives,
              and we are sure that you wouldn’t want that to happen for
              yourself.
              <br /> Astrotalk, with its exceptional astrology consultant
              services, caters to you the solutions to problems that you might
              be facing in the aforementioned aspects of life. Some problems in
              life are simply the consequence of astronomical factors that make
              it to our fate since the time we are born. To specify, there are
              some predefined dashas that each one of us has to go through in
              life. These dashas, like for example, Shani Dasha, or Rahu Dasha,
              bring all sorts of problems in your life. These problems can lead
              to loss of confidence, wealth, relationship and other such woes.
              Thus it is in the best interest to take necessary actions through
              which such problems can be averted. And astrologers have such
              solutions for you.
              <br /> At Astrotalk, we have a pool of learned astrologers with
              vast experience across various astrology domains like Vedic
              astrology, Numerology, Tarot reading, Reiki healing, Nandi
              astrology, Vastu and so on. You can connect with these astrologers
              and chat with them and ask for solutions to your problems.
              Astrologers use their experience and astrological knowledge to
              guide you and help you with the best solutions.
              <br /> Meanwhile, astrology is not only about solving problems. It
              also works in many other areas, like if you are planning a wedding
              and want to find the shubh muhurat for marriage, simply, chat with
              an astrologer and you will have your answer. Wondering what to
              name your baby or when to host the mundan ceremony for him/her?
              Expert astrologers consultation can help here too. Or simply if
              you are planning to buy a gemstone and wondering what gemstone is
              made for your rashi? In such circumstances too, chatting with the
              astrologer can help you find what gemstone would suit your current
              situation. AstroTalk provides you with the facility to chat with
              astrologer online free and paid in both ways. To find us online,
              you just need to search online chat with astrologer or free astro
              chat or chat with astrologer online free, talk to astrologer
              online, and chat with astrologer near me. The aim of our services
              is to give 100% satisfaction to the users. We offer you many free
              services as well like free kundali and match making.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default AstrologerChat;
