"use client";

import { useEffect, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Testimonal from "@/components/Testimonal";
import Topbar from "@/components/Topbar";
import Work from "@/components/Work";
import React from "react";

const Home = () => {
  const [hearderActive, setHearderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHearderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Topbar />
      {/* Static header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* Animated header */}
      <div
        className={`"transition-transform duration-500 fixed top-0 left-0 z-50 w-full 
       ${hearderActive ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Header />
      </div>

      <Hero />
      <About />
      <Stats />
      <Service />
      <Work />
      <Testimonal />
      <Faq />
      <Contact />
      <Footer />

      {/* temp div */}
      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
};

export default Home;
