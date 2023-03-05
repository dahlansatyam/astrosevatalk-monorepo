import React from "react";
import { Section } from "../Layout";

type Props = {};

const Yoga = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-center text-2xl font-bold md:text-4xl">Yoga</p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              In Panchang, the literal meaning of the word ‘Yoga’ is addition. a
              Yoga is derived from the addition of the Sun's and Moon's position
              in the Zodiac. Each yoga specifies some characteristic of the
              persona.
            </p>
            <p>
              Vaidhriti and Vyatipaat Yogas are mostly avoided when considering
              performing an auspicious act. Out of the remaining Yogas, the
              first three Ghatis of Vajra and Vishkumbha, the first half of
              Parigh, the first five ghatis of Shool, the first nine ghatis of
              Vyaghat, and the first nine ghatis of Gand and Atigand are to be
              discarded for all the auspicious acts. A Ghati is an ancient time
              measurement system, A Ghati is equivalent to the modern 24
              Minutes. There are 27 ‘Yogas’, in Panchang. The first yog
              (Viskumbh) ends when the sum is 13°20'. Second Yog ( Priti) ends
              when it is 26°40' and so on.
            </p>

            <p></p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <div className="">
              <p className="font-semibold">There are 27 yogas, namely:</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                1. Vishakumbha - Achieving - (the native is victorious over
                enemies, gets the property and wealth)
              </p>
              <p>
                2. Preeti -  Happy - (the native is popular, fascinated to the
                opposite gender)
              </p>
              <p>
                3. Aayushman - Grounded - (the native enjoys a long life, is
                enthusiastic)
              </p>
              <p>
                4. Saubhagya -  Wealth - (The person enjoys a contented life
                full of prospects, happiness)
              </p>
              <p>
                5. Shobhana - Beautiful -(The person is sensualist, passionate
                about sex)
              </p>
              <p>
                6. Atiganda -  Risk - (problematic life due to some
                difficulties, prone to accidents)
              </p>
              <p>
                7. Sukarma - Plentiful - (performs honourable activities,
                generous and successful.)
              </p>
              <p>
                8. Dhriti - Entertainment - (enjoys life, good time with
                partner, love to pamper)
              </p>
              <p>
                9. Shoola -  Argumentative - (argumentative and conflicting,
                argumentative, angry.)
              </p>
              <p>
                10. Ganda - Worrying - ( A bit imperfect in terms of principles,
                concerning personality)
              </p>
              <p>
                11. Vriddhi - Perspicacity - (intellectual, unethical and
                discriminating, constantly progresses with age.)
              </p>
              <p>
                12. Dhruva - Dependable - (The native has a stable personality,
                is very focused)
              </p>
              <p>
                13. Vyaghaata - Fierce - (unkind, certainly may hurt others)
              </p>
              <p>
                14. Harshana - Pleasure - (The native is intellectual, pleasures
                in cheerfulness and funniness.)
              </p>
              <p>
                15. Vajra - Power - ( the native tends to be wealthy,
                lascivious, changeable, forceful.)
              </p>
              <p>
                16. Siddhi - Success - (The native has multiple talents;
                defender and follower of others.)
              </p>
              <p>
                17. Vyatipaata - Difficulty - (may face unexpected setbacks,
                unstable)
              </p>
              <p>
                18. Variyaana - luxurious -(loves comfort and amenity, lazy,
                passionate.)
              </p>
              <p>
                {" "}
                19. Parigha - Barrier - (may encounter many problems;
                short-tempered and interfering)
              </p>
              <p>
                20. Shiva - Benevolent - (pleased by seniors and government,
                calm and learned)
              </p>
              <p>
                21. Siddha - Expert - (generous personality, good nature,
                interest in customary and righteousness)
              </p>
              <p>
                22. Saaddhya - Mediation - (full of manners and politeness.)
              </p>
              <p>
                23. Shubha - Favourable - (glossy body but difficulties with
                health, short-temper)
              </p>
              <p>
                24. Shukla - Bright - (talkative and unreliable, tottering and
                changeable mind)
              </p>
              <p>
                25. Brahma -  Reliable- (the native is truthful and stable, has
                ambitions and good judgement.)
              </p>
              <p>
                26. Indra - Headship - (curiosity in training and knowledge;
                obliging, well off.)
              </p>
              <p>
                27. Vaidhriti - Divisive - (dangerous, conniving nature;
                influential and irresistible mentally or physically.)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Yoga;
