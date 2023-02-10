import React from "react";
import { Section } from "../Layout";

type Props = {};

function Membership({}: Props) {
  return (
    <div className="bg-[url('/membership-bg.png')] bg-cover py-12 lg:py-0">
      <Section>
        <div className="grid grid-cols-2 items-center md:grid-cols-12">
          <div className="order-2 col-span-8 space-y-6 text-center text-white md:order-1 lg:space-y-8 lg:text-left">
            <p className="text-3xl font-semibold lg:text-4xl">
              Your Customized Membership
            </p>
            <p className="text-sm lg:text-xl">
              Daily, weekly, monthly, and yearly personalized
              <br />
              astrological guidance at your fingertips.
            </p>
            <button className="rounded-md bg-white py-2 px-4 font-semibold text-black">
              Plans & Pricing
            </button>
          </div>
          <div className="order-1 col-span-4">
            <img src="/main-logo.png" alt="astrosevatalk" />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Membership;
