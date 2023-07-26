"use client";
import Image from "next/image";

import Navbr from "@/coponents/navbar";
import HeaderHero from "@/coponents/headerhero";
import Info from "@/coponents/info";
import Feature from "@/coponents/feature";
import Footer from "@/coponents/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbr />
      <HeaderHero />
      <Info />
      <Feature />
      <Footer />
    </div>
  );
}
