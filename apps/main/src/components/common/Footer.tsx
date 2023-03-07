import React from "react";
import { Section } from "../Layout";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

const corprate = [
  {
    id: 1,
    title: "Refund & Cancellation Policy",
    url: "/corprate/refund",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    url: "/corprate/refund",
  },
  {
    id: 3,
    title: " Privacy Policy",
    url: "/corprate/privacy",
  },
  {
    id: 4,
    title: " About Us",
    url: "/corprate/about",
  },
  {
    id: 5,
    title: "Disclaimer",
    url: "/corprate/disclaimer",
  },
];

const importantlinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "panchang",
    url: "/panchang",
  },
  {
    id: 3,
    title: "live-astrologer",
    url: "/live-astrologer",
  },
  {
    id: 4,
    title: "ChatAstrologer",
    url: "/chat-astrologer",
  },
  {
    id: 5,
    title: "TalkAstrologer",
    url: "/corprate/disclaimer",
  },
  {
    id: 6,
    title: "FreeKundli",
    url: "/freekundli",
  },
  {
    id: 7,
    title: "Daily Horoscope",
    url: "/horoscope",
  },
  {
    id: 8,
    title: "Live Video Chat",
    url: "/videochat-astrologer",
  },
  {
    id: 9,
    title: "Aries",
    url: "/horoscopesigns/aries",
  },
  {
    id: 10,
    title: "Free Kundli",
    url: "/kundli/free-kundli",
  },
  {
    id: 11,
    title: "Kundli Matching",
    url: "/kundli/kundli-matching",
  },
  {
    id: 12,
    title: "Shubh Muhurat",
    url: "/muhurat",
  },
];

const social = [
  {
    icon: <FaFacebook size={30} />,
    url: "https://www.facebook.com/profile.php?id=100089188385234",
  },
  {
    icon: <FaInstagram size={30} />,
    url: "https://www.instagram.com/astrosevatalk/",
  },
  {
    icon: <FaTwitter size={30} />,
    url: "https://twitter.com/AstrosevaTalk",
  },
  {
    icon: <FaPinterest size={30} />,
    url: "https://in.pinterest.com/astrosevatalk/",
  },
  {
    icon: <FaLinkedin size={30} />,
    url: "https://www.linkedin.com/in/astrosevatalk/",
  },
];

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-black py-12 px-4  text-white lg:px-12">
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold underline underline-offset-[6px]">
              About AstroSevatalk
            </p>

            <p className="text-justify">
              AstroSevatalk is the best astrology website for online Astrology
              predictions. Talk to Astrologer on call and get answers to all
              your worries by seeing the future life through Astrology Kundli
              Predictions from the best Astrologers from India. Get best future
              predictions related to Marriage, love life, Career or Health over
              call, chat, query or report.{" "}
            </p>
          </div>
          {/* <div>
          <p className="font-semibold text-xl">Horoscope</p>
          <hr className="w-32   text-white my-2" />
          <ul className="flex flex-col gap-4 ">
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Today,s Horoscope
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Horoscope 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Today,s Love Horoscope
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Weekly Horoscope
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Monthly Horoscope
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Yearly Horoscope
            </li>
          </ul>
        </div> */}

          {/* <div>
          <p className="font-semibold text-xl">Shubh Muhurat 2023</p>
          <hr className="w-32   text-white my-2" />
          <ul className="flex flex-col gap-4 ">
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Annanprashan Muhurat 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Gold Buying Muhurat 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Bhoomi Pujan Muhurat 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Griha Pravesh Muhurat 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Mundan Muhurat 2023
            </li>
            <li className="hover:text-primary hover:underline-offset-2 hover:underline cursor-pointer">
              Marriage Muhurat 2023
            </li>
          </ul>
        </div> */}

          <div className="grid lg:grid-cols-3">
            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Important Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {importantlinks.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2">
                      {item?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Corporate Info</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {corprate.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2">
                      {item?.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Contact Us</p>
              <hr className="my-2   w-32 text-white" />
              <ul className="flex flex-col gap-4 ">
                <li className="">We are avilable to 24*7 chat support.</li>
                <li className="">Email ID: Support@astrosevatalk.com</li>
              </ul>

              <ul className="grid grid-cols-4 items-center justify-between gap-4 py-4 text-white">
                {social.map((item, index) => (
                  <Link key={index} href={item?.url}>
                    <li className="cursor-pointer">{item?.icon}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Contact Us</p>
              <hr className="my-2   w-32 text-white" />
              <ul className="flex flex-col gap-4 ">
                <li className="">We are avilable to 24*7 chat support.</li>
                <li className="">Email ID: Support@astrosevatalk.com</li>
              </ul>
              <div className="grid grid-cols-4 items-center justify-between gap-4 py-4 text-white">
                <Link href="https://www.facebook.com/profile.php?id=100089188385234">
                  <FaFacebook size={30} className="cursor-pointer" />
                </Link>
                <Link href="https://www.instagram.com/astrosevatalk/">
                  <FaInstagram
                    size={30}
                    className="
                  cursor-pointer
                "
                  />
                </Link>
                <Link href="https://twitter.com/AstrosevaTalk">
                  <FaTwitter size={30} className="cursor-pointer" />
                </Link>
                <Link href="https://in.pinterest.com/astrosevatalk/">
                  <FaPinterest
                    size={30}
                    className="
                  cursor-pointer
                "
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/astrosevatalk/">
                  <FaLinkedin size={30} className="cursor-pointer" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
