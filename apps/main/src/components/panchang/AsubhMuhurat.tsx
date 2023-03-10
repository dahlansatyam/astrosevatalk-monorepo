import React from "react";
import { Section } from "../Layout";

type Props = {};

const AsubhMuhurat = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="rounded-xl border-2 border-[#A9A9A9]">
          <h2 className="rounded-t-xl border-b-[#A9A9A9] bg-[#E2CB85] py-3 text-center font-[georgia] text-xl font-semibold sm:text-2xl  lg:text-[36px]">
            Inauspicious Timings (Ashubha Muhurat)
          </h2>
          <table className="w-full text-base">
            <tbody>
              <tr className=" flex  items-center justify-between  border-2 border-b-[#A9A9A9] py-4 px-8">
                <td className="">Kantaka / Mrityu </td>
                <td className=" ">From 04-03-23 02:41:01 AM</td>
                <td className="">To 04-03-23 04:08:23 AM</td>
              </tr>
              <tr className=" flex  items-center justify-between  border-2 border-b-[#A9A9A9] py-4 px-8">
                <td className="">Kantaka / Mrityu </td>
                <td className=" ">From 04-03-23 02:41:01 AM</td>
                <td className="">To 04-03-23 04:08:23 AM</td>
              </tr>
              <tr className=" flex  items-center justify-between  border-2 border-b-[#A9A9A9] py-4 px-8">
                <td className="">Kantaka / Mrityu </td>
                <td className=" ">From 04-03-23 02:41:01 AM</td>
                <td className="">To 04-03-23 04:08:23 AM</td>
              </tr>
              <tr className=" flex  items-center justify-between  border-2 border-b-[#A9A9A9] py-4 px-8">
                <td className="">Kantaka / Mrityu </td>
                <td className=" ">From 04-03-23 02:41:01 AM</td>
                <td className="">To 04-03-23 04:08:23 AM</td>
              </tr>
              <tr className=" flex  items-center justify-between   py-4 px-8">
                <td className="">Kantaka / Mrityu </td>
                <td className=" ">From 04-03-23 02:41:01 AM</td>
                <td className="">To 04-03-23 04:08:23 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
};

export default AsubhMuhurat;
