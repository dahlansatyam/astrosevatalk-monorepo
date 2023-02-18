import Head from "next/head";
import { Inter } from "@next/font/google";
import { Button } from "ui";
import About from "@/components/home/About";
import Who from "@/components/home/Who";
import Horoscope from "@/components/home/Horoscope";
import Reviews from "@/components/home/Reviews";
import Membership from "@/components/home/Membership";
import Astrologer from "@/components/home/Astrologer";
import Shop from "@/components/home/Shop";
import Appointments from "@/components/home/Appointments";
import Services from "@/components/home/Services";
import Hero from "@/components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Who />
        <Horoscope />
        <Services />
        <Appointments />
        <Shop />
        <Astrologer />
        <Reviews />
        <Membership />
      </main>
    </>
  );
}
