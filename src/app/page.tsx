"use client";
import Image from "next/image";
import dotenv from "dotenv";
dotenv.config();

import Navbar from "@/coponents/navbar";
import HeaderHero from "@/coponents/headerhero";
import Info from "@/coponents/info";
import Feature from "@/coponents/feature";
import Footer from "@/coponents/Footer";
import { Toaster, toast } from "react-hot-toast";
import Workingtask from "@/coponents/Workingtask";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderHero />
      <Info />
      <Workingtask />
      <Feature />
      <Footer />

      <Toaster position="top-right" />
    </>
  );
}
