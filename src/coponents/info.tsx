import { Urbanist } from "next/font/google";

export default function Info() {
  return (
    <div className="flex-col  flex justify-center items-center py-2 gap-2">
      <span
        className="text-4xl mt-24 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[55%] text-center leading-8 animate-fade-in"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        Boost the speed of your development and test cycles.
      </span>
      <span
        className="leading-6 text-center text-2xl w-[64%] animate-fade-in"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        With AI-driven test case generation and code analysis, problems may be
        found and fixed more quickly.
      </span>
    </div>
  );
}
