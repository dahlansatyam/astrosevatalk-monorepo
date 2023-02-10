import React from "react";
import { Section } from "../Layout";

type Props = {};

const shoppingList = [
  {
    name: "Love Score",
    src: "/shop-01.png",
  },
  {
    name: "Career Report",
    src: "/shop-02.png",
  },
  {
    name: "Gem",
    src: "/shop-03.png",
  },
];

function Shop({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12">
      <Section>
        <div className="space-y-6">
          <h2 className="text-center text-xl font-semibold sm:text-3xl lg:text-4xl">
            Shop
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {shoppingList.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-[3px] border-black"
              >
                <img src={item.src} alt={item.name} className="mx-auto w-5/6" />
                <p className="-mt-5 bg-black py-2 text-center text-2xl text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <button className="mx-auto flex w-fit rounded-lg bg-black py-2 px-4 font-semibold text-white">
            View More
          </button>
        </div>
      </Section>
    </div>
  );
}

export default Shop;
