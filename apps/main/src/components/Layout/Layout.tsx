import Head from "next/head";
import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  return (
    <div className="mx-auto font-[roboto] antialiased">
      <Head>
        <title>AstroSevaTalk</title>
        <link rel="icon" href="/astrosevatalk-logo.svg" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <div>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
