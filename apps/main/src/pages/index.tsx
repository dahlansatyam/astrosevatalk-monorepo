import Head from "next/head";
import { Inter } from "@next/font/google";
import { Button } from "ui";
import About from "@/components/home/About";
import Who from "@/components/home/Who";
import Horoscope from "@/components/home/Horoscope";
import Reviews from "@/components/home/Reviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
        <Who />
        <Horoscope />
        <Reviews />
      </main>
    </>
  );
}
