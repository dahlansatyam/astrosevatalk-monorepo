import React from "react";
import { Section } from "../Layout";

type Props = {};

function Membership({}: Props) {
  return (
    <div className="bg-gray-900 bg-cover py-12">
      <Section>
        <div className="grid grid-cols-2 items-center md:grid-cols-12">
          <div className="order-2 col-span-8 space-y-6 text-center text-white md:order-1 lg:gap-y-[27px] lg:text-left">
            <p className="font-[georgia] text-3xl font-semibold lg:text-[40px]">
              Your Customized Membership
            </p>
            <p className="text-sm leading-8 lg:text-[26px]">
              Daily, weekly, monthly, and yearly personalized
              <br />
              astrological guidance at your fingertips.
            </p>
            <button className="rounded-md bg-white py-2 px-4 text-2xl font-medium text-black">
              Plans & Pricing
            </button>
          </div>
          <div className="order-1 col-span-4">
            <img
              src="/main-logo.png"
              alt="astrosevatalk"
              className="mx-auto w-1/2 lg:w-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Membership;
