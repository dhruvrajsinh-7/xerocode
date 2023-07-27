import React from "react";
import FeatureItem from "./FeaturItem";
const Feature: React.FC = () => {
  const features = [
    {
      title: "ask questions",
      description: [
        "To assist with managing the development, testing,and",
        "deployment process,ask it questions or issue instructions.",
      ],
    },
    {
      title: "execution",
      description: [
        "With a single command, you may run a series of tests or install a",
        "new version of a programme in a particular setting.",
      ],
    },
  ];
  return (
    <div className="flex flex-col my-10 justify-center items-center">
      <div className="font-bold bg-gradient-to-r from-blue-700 to-purple-400 via-pink-500 bg-clip-text text-transparent">
        <h1 className="text-4xl text-center">
          Use AI to handle workflows in your chat platforms
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-6 w-[982px]">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[50%] bg-[#181924] p-2 my-6 rounded-3xl">
          <div className="p-4">
            <h1 className="w-[90%] my-2  text-2xl md:text-3xl lg:text-4xl leading-7 md:leading-8 lg:leading-9 tracking-wide  bg-gradient-to-r  from-blue-700 to-purple-700 via-pink-300 bg-clip-text text-transparent ">
              Fix security concerns more quickly using generated code
              recommendations
            </h1>
            <div className="text-white text-sm font-normal mt-4 mb-16">
              <h3 className="">
                With the aid of AI, recognise any security risk and swiftly and
                effectively fix it
              </h3>
              <h3 className="">
                granting developers the freedom they require to protect their
                work frequently and early
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-5xl justify-center text-center items-center font-bold ">
        <h1 className="w-[85%] bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl leading-7 md:leading-8 lg:leading-9 tracking-wide">
          Automate all aspects of your delivery process with AI support.
        </h1>
        <div className=" w-1/3 my-6">
          <h1 className="text-white text-xl">Get Early access</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
