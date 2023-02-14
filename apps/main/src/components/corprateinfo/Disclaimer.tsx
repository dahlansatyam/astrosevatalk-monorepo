import React from "react";
import { Section } from "../Layout";

type Props = {};

const Disclaimer = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="">
          <p className="py-6 text-center text-2xl font-bold text-primary md:text-4xl">
            OUR DISCLAIMER
          </p>
        </div>
        <div className="flex flex-col space-y-5 text-justify">
          <p>
            The information and data contained on astrosevatalk website is to be
            treated purely for your entertainment purposes only. Any prediction
            or other message that you receive is not a substitute for advice,
            programs, or treatment that you would normally receive from a
            licensed professional such as a lawyer, doctor, psychiatrist, or
            financial advisor. Accordingly, astrosevatalk.com provides no
            guarantees, implied warranties, or assurances of any kind, and will
            not be responsible for any interpretation made or use by the
            recipient of the information and data mentioned above.
          </p>
          {/* <p>
            Moreover, astrotalk.com is not a registered firm. It is a product of Codeyeti Software
            Solutions Pvt Ltd. All the transaction and gathered data is / will be accessed by
            CodeYeti.
          </p> */}
        </div>
      </Section>
    </div>
  );
};

export default Disclaimer;
