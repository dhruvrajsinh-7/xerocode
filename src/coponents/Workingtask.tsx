import Image from "next/image";
import { FC } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FeaturesProps {}

const itemFade: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const hoverVariants: Variants = {
  hover: {
    scale: 1.1,
    backgroundColor: "purple",
  },
};

const Workingtask: FC<FeaturesProps> = ({}) => {
  return (
    <div className="mb-5 w-full h-screen">
      <div className="relative h-[80%] w-[95%] mx-5 flex justify-center items-center">
        <motion.div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="300"
            viewBox="0 0 247 220"
            fill="none"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <g filter="url(#filter0_f_6_47)">
              <path
                d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z"
                stroke="url(#paint0_linear_6_47)"
                strokeWidth="10"
              />
              <path
                d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z"
                stroke="url(#paint1_linear_6_47)"
                strokeWidth="10"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_6_47"
                x="0"
                y="0"
                width="247"
                height="220"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="4.5"
                  result="effect1_foregroundBlur_6_47"
                />
              </filter>
              <linearGradient
                id="paint0_linear_6_47"
                x1="124.759"
                y1="14"
                x2="124.759"
                y2="206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A056F7" />
                <stop offset="1" stopColor="#20C1E4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6_47"
                x1="25.9569"
                y1="109.373"
                x2="205.15"
                y2="185.046"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0104167"
                  stopColor="#0A05F8"
                  stopOpacity="0.33"
                />
                <stop offset="1" stopColor="white" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className="bg-[#181924] absolute top-10 left-32 rounded-xl flex flex-col px-5 w-[25%] font-urbanist text-sm font-light"
          variants={hoverVariants}
          whileHover="hover"
        >
          <div className="border-b border-slate-600 border-opacity-30 py-3 flex gap-2">
            <Image
              src="/duotone-stack.svg"
              width={25}
              height={25}
              className="object-contain"
              alt="stack_png"
            />
            <span className="text-xs">CI/CD Pipeline Generate</span>
          </div>
          <div className="py-3 flex gap-2">
            <Image
              src="/duotone-stack_blue.svg"
              width={25}
              height={25}
              className="object-contain"
              alt="stack_png"
            />
            <span className="text-xs">Build / Deploymnent</span>
          </div>
        </motion.div>

        {/* Rest of your code for the second section */}
        {/* Wrap the SVG image and text with motion.div */}
        <motion.div
          className={`bg-[#181924] absolute bottom-10 right-32 rounded-xl flex flex-col px-5 w-[25%] font-urbanist text-sm font-light`}
          variants={hoverVariants}
          whileHover="hover" // Use the hover animation variant
        >
          <div className="border-b border-slate-600 border-opacity-30 py-3 flex gap-2">
            <Image
              src="/duotone-stack.svg"
              width={25}
              height={25}
              className="object-contain"
              alt="stack_png"
            />
            <span className="text-xs">Generate Test Cases</span>
          </div>
          <div className="py-3 flex gap-2">
            <Image
              src="/duotone-stack_blue.svg"
              width={25}
              height={25}
              className="object-contain"
              alt="stack_png"
            />
            <span className="text-xs">Code Analysis</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workingtask;
