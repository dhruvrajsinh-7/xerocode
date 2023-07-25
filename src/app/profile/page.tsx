"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Logo from "public/logo.png";
import hero from "public/heroimg.png";
import bghero from "public/bghero.png";
import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col font-sans">
      <div className="w-full flex justify-between border-b-2">
        <Image className="p-2" width={100} height={100} src={Logo} alt="" />
        {/* <button
        onClick={logout}
        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button> */}
        <div className="flex flex-col justify-center">
          <button
            // onClick={getUserDetails}
            className="border-white border-2 rounded-full  text-white font-bold py-2 px-4 mx-7 "
          >
            xerocode
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <div className=" bg-gradient-to-r font-semibold  text-5xl leading-normal via-purple-500 from-pink-500 to-red-500 text-transparent bg-clip-text">
          Integrate AI Throughout Your Workflow
        </div>
        <div className="text-white text-5xl my-6">Code Doctor</div>
        <h2 className="text-white w-[40%] text-center text-xl text-left mb-10">
          Make processes where AI collaborates with your team throughout the
          whole development process.
        </h2>
        <div>
          <form>
            <div className="flex w-4/3 rounded-full px-4 py-2 items-center  justify-center border-2">
              <input
                className=" w-4/3 h-10 outline-none bg-black text-white"
                type="text"
                placeholder="your email"
              />
              <button
                className="border-white border-2  rounded-full text-xs text-white font-bold py-2 px-2 "
                type="submit"
              >
                join whishlist
              </button>
            </div>
          </form>
        </div>
        <div className="w-full relative">
          <Image
            width={1900}
            height={500}
            className="absolute top-0 left-0 z-0"
            src={bghero}
            alt=""
          />
          <div className="relative z-10">
            <Image
              width={1900}
              className="px-10"
              height={500}
              src={hero}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[80%] text-center flex mt-40 text-5xl font-semibold items-center justify-center ">
            <h1 className=" font-semibold leading-normal transform  bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent ">
              Boost the speed of your development and test cycles
            </h1>
          </div>
          <div className="w-[90%] text-center ">
            <h1 className="text-white text-3xl">
              With AI-driven test case generation and code analysis, problems
              may be found and fixed more quickly.
            </h1>
          </div>
        </div>
        <div className="flex flex-col my-10 justify-center items-center">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent">
            <h1>Use AI to handle workflows in your chat platforms</h1>
          </div>
        </div>
        <div className="flex flex-col text-5xl justify-center text-center items-center font-bold ">
          <h1 className="w-[85%] bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Automate all aspects of your delivery process with AI support.
          </h1>
          <div className=" w-1/3 my-6">
            <h1 className="text-white text-xl">Get Early access</h1>
          </div>
        </div>
        <div>
          <form>
            <div className="flex  rounded-full px-4 py-2 items-center  justify-center border-2">
              <input
                className="  h-10 outline-none bg-black text-white"
                type="text"
                placeholder="your email"
              />
              <button
                className="border-white border-2  rounded-full text-xs text-white font-bold py-2 px-2 "
                type="submit"
              >
                join whishlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
