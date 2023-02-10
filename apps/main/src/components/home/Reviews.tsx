import React from "react";
import { Section } from "../Layout";

type Props = {};

const reviews = [
  {
    name: "Bani Sharma",
    src: "",
    review:
      " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
  {
    name: "Bani Sharma",
    src: "",
    review:
      "Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution. Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
  {
    name: "Bani Sharma",
    src: "",
    review:
      " Astrologer Rohit Shastri ji has helped me with my family issues. I feel really blessed that he has helped me when I actually need some guidance and he suggested me solution.",
  },
];

function Reviews({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12">
      <Section>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Client Reviews
            </h2>
            <h3 className="text-center text-sm font-semibold sm:text-lg lg:text-xl">
              Here about us from our customers
            </h3>
          </div>
          {reviews.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center gap-x-10 rounded-lg bg-white p-4"
            >
              <div className="col-span-1 h-20 w-20 rounded-full border-2 border-black bg-red-200"></div>
              <div className="col-span-11">
                <p className="font-bold">{item.name}</p>
                <p className="text-base">{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Reviews;
