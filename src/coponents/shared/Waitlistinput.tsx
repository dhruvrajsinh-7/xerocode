"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onSendWhishlistEmail = async () => {
    try {
      setLoading(true);

      const checkStatusURL = "/api/user/emailstatus";
      const response = await axios.post(checkStatusURL, {
        email,
      });

      if (response.data.error) {
        toast.error(response.data.error);
        if (
          response.data.error === "Email not verified" ||
          response.data.error === "Email not found"
        ) {
          window.location.replace("/signup");
        }
      } else {
        const earlyAccessURL = "/api/user/earlyaccess";
        const wishlistResponse = await axios.post(earlyAccessURL);
        console.log("Whishlist email sent successfully", wishlistResponse.data);
        toast.success("Whishlist email sent successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(
        error.response?.data?.error || "Whishlist email sending failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-full flex w-[25%]">
      <input
        type="email"
        placeholder="Your Email"
        className="overflow-hidden border-none outline-none text-sm font-urbanist font-normal px-6 rounded-full py-3 h-full w-full bg-black text-slate-200 placeholder:text-gray-700 placeholder:font-extralight pr-24"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={onSendWhishlistEmail}
        disabled={loading}
        className="rounded-full text-xs px-3 my-1 -ml-[29%] border border-white bg-transparent hover:bg-slate-700"
      >
        Join Waitlist
      </button>
    </div>
  );
}
