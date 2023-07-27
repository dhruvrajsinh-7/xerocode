"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Logo from "public/logo.png";
export default function Navbar() {
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
    </div>
  );
}
