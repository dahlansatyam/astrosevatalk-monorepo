import React from "react";
import { Section } from "../Layout";

type Props = {};

const Nakshtra = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8  lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-center text-2xl font-bold md:text-4xl">
              Nakshatra
            </p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              Another important constituent of Today's panchang is Nakshatra.
              For the unaware, nakshatras are nothing but constellations donning
              the sky. There are as many as 27 Nakshatras in astrology and all
              of them are ruled by some God. Naksahstra were invented by the
              Vedic astrologer to simply further divide the 12 zodiac signs into
              27 parts for better reading and categorising their different
              aspects. Nakshatra most of the time is considered the most
              important element of Panchang reading. 
            </p>
            <p>
              When we divide the 12 zodiac signs into 27 nakshatras, each
              nakshatra contains thirteen degrees and twenty minutes of the
              zodiac. You could be born in any of the 27 nakshatras as
              nakshatras change every one day. Nakshatra are divided into three
              types: Deva, Manuj and Rakshas. As the name suggests, Rakshas
              nakshatras and inauspicious while the remaining bring auspicious
              results for the native most of the time.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Here are the names of all 27 nakshatras in astrology:
              </p>
              <p> No. English Name Devanagari Name Tamil Name Malayalam Name</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>1. Ashvini/Aswini अश्विनी Aswini Aswathi</p>
              <p>2. Bharani भरणी Bharani Bharani</p>
              <p>3. Krittika/Krithika कृत्तिका Karthigai Kaarthika</p>
              <p>4. Rohini रोहिणी Rohini Rohini</p>
              <p>5. Mrigashirsha मृगशीर्ष Mrigasheersham Makeeryam</p>
              <p>6. Ardra आर्द्रा Thiruvaathirai Thiruvaathira</p>
              <p>7. Punarvasu पुनर्वसु Punarpoosam Punartham</p>
              <p>8. Pushya पुष्य Poosam Pooyyam</p>
              <p>9. Ashlesha आश्ळेषा/आश्लेषा Aayilyam Aayilyam</p>
              <p>10. Magha मघा Makam Makham</p>
              <p>11. Purva Phalguni पूर्व फाल्गुनी Pooram Pooram</p>
              <p>12. Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</p>
              <p>13. Hasta हस्त Hastham Atham</p>
              <p>14. Chitra चित्रा Chithirai Chitra </p>
              <p>15. Swati स्वाति Swaathi Chothi</p>
              <p>16. Vishakha विशाखा Visaakam Visaakam</p>
              <p>17. Anuradha अनुराधा Anusham Anizham</p>
              <p>18. Jyeshtha ज्येष्ठा Kettai Thrikketta</p>
              <p>19. Mula मूल Moolam Moolam</p>
              <p>20. Purva Ashadha पूर्वाषाढा Pooraadam Pooraadam</p>
              <p>21. Uttara Ashadha उत्तराषाढा Uthiraadam Uthraadam</p>
              <p>22. Shravana श्रवण Thiruvonam Thiruvonam</p>
              <p>23. Dhanishtha श्रविष्ठा/धनिष्ठा Avittam Avittam</p>
              <p>24. Shatabhisha शतभिषक्/शततारका Chathayam/Sadayam Chathayam</p>
              <p>
                25. Purva Bhadrapada पूर्वभाद्रपदा/पूर्वप्रोष्ठपदा
                PoorattathiPoorattadhi
              </p>
              <p>
                26. Uttara Bhadrapada उत्तरभाद्रपदा/उत्तरप्रोष्ठपदा Uthirattathi
                Uthrattathi
              </p>
              <p>27. Revati रेवती Revathi Revathi</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Nakshtra;
