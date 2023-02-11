import { MegaphoneIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Section } from "../Layout";
import LoginModal from "../LoginModal";
import Navlink from "./Navlink";
import SlideOver from "./SlideOver";

type Props = {};

const links = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/shop",
    name: "Shop",
  },
  {
    url: "/horoscope",
    name: "Weekly Horoscope",
  },
  {
    url: "/muhurat",
    name: "Muhurat",
  },
  {
    url: "/panchang",
    name: "Panchang",
  },
  {
    url: "/liveastrologer",
    name: "Liveastrologer",
  },
  {
    url: "/chat-astrologer",
    name: "ChatAstrologer",
  },
  {
    url: "/talkastrologer",
    name: "Talkastrologer",
  },
  {
    url: "/freekundli",
    name: "FreeKundli",
  },
  {
    url: "/videochat",
    name: "VideoChat",
  },
  {
    url: "/vastu",
    name: "Learn Vastu",
  },
];

function Navbar({}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-[url('/navbar-bg.png')]">
        <Section>
          <div className="flex items-center justify-center py-2 lg:justify-between">
            <div className="">
              <Link href="/" className="text-2xl font-black text-white">
                <div className="flex items-center space-x-2">
                  <img src="/main-logo.png" className="w-[60px]" />
                  <p>AstroSevaTalk</p>
                </div>{" "}
              </Link>
            </div>
            <div className="hidden space-x-[27px] text-base font-bold text-white lg:flex">
              <p>AstrosevaTalk+</p>
              <p className="w-full">ZodiacSign</p>
              <p>Login</p>
            </div>
            {/* <div className="hidden cursor-pointer items-center space-x-3 text-[15px] font-medium lg:flex ">
              {links?.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item?.url}
                    className={` ${
                      item.url === router.pathname
                        ? "text-primary"
                        : "text-white hover:text-primary hover:underline hover:underline-offset-2"
                    } `}
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
              <div
                onClick={() => setIsOpen(true)}
                className="hover:shadow-light flex cursor-pointer space-x-1 rounded-full bg-primary px-3 py-1 text-[15px] font-medium hover:bg-primary/90 hover:shadow-sm"
              >
                <UserIcon className="w-4" />
                <p>Login</p>
              </div>
            </div> */}
            {/* <div className="lg:hidden" onClick={() => setOpen(true)}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div> */}
          </div>
        </Section>
      </div>

      {/* <div className="flex text-white lg:hidden">
        <SlideOver open={open} close={handleClose}>
          <nav className="flex">
            <ul className="w-full space-y-4">
              {links.map((link, i) => (
                <div
                  key={`nav-link-${link.name}-${i + 1}`}
                  className="border-b border-dashed border-primary"
                >
                  <Navlink
                    link={link}
                    isSideOverlay={true}
                    close={handleClose}
                  />
                </div>
              ))}
            </ul>
          </nav>
        </SlideOver>
      </div> */}
      {/* {isOpen && <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
    </>
  );
}

export default Navbar;
