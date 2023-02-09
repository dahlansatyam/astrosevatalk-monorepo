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
      <div className="bg-gray-900 py-6 px-4 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/" className="text-2xl font-bold text-white">
              {" "}
              AstroSevaTalk
              {/* <div className="w-1/3">
              <Img
                src="main_logo"
                alt="hero"
                width={1700}
                height={584}
                className=""
                isNextImg={true}
              />
            </div> */}
            </Link>
          </div>
          <div className="hidden cursor-pointer items-center space-x-3 text-[15px] font-medium lg:flex ">
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
          </div>
          <div className="lg:hidden" onClick={() => setOpen(true)}>
            {/* <MegaphoneIcon className="text-white w-4" /> */}
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
          </div>
        </div>
      </div>

      <div className="flex text-white lg:hidden">
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
      </div>
      {isOpen && <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
