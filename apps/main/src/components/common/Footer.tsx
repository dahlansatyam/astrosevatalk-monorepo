import React from "react";
import { Section } from "../Layout";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

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

          <div className="grid grid-cols-3">
            <div className="space-y-4">
              <p className="text-xl font-semibold underline underline-offset-[6px]">
                Important Links
              </p>
              <ul className="grid grid-cols-2 gap-4 ">
                <Link href="/">
                  {" "}
                  <li className="cursor-pointer">Home</li>
                </Link>
                <Link href="/panchang">
                  <li className="cursor-pointer">panchang</li>
                </Link>
                <Link href="liveastrologer">
                  <li className="cursor-pointer">live-astrologer</li>
                </Link>
                <Link href="chat-astrologer">
                  <li className="cursor-pointer">ChatAstrologer</li>
                </Link>
                <Link href="talkastrologer">
                  <li className="cursor-pointer">TalkAstrologer</li>
                </Link>
                <Link href="freekundli">
                  <li className="cursor-pointer">FreeKundli</li>
                </Link>
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold underline underline-offset-[6px]">
                Contact Us
              </p>
              <ul className="flex flex-col gap-4 ">
                <li className="">We are avilable to 24*7 chat support.</li>
                <li className="">Email ID: contact@AstroSevaTalk.com</li>
              </ul>
              <div className="flex items-center justify-between gap-4 py-4 text-white">
                <FaFacebook size={30} className="cursor-pointer" />
                <FaInstagram
                  size={30}
                  className="
                  cursor-pointer
                "
                />
                <FaTwitter size={30} className="cursor-pointer" />
                <FaYoutube
                  size={30}
                  className="
                  cursor-pointer
                "
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
