import Image from "next/image";
import hero from "public/heroimg.png";
import bghero from "public/bghero.png";
import WaitlistForm from "./shared/Waitlistinput";

export default function HeaderHero() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 mb-20">
      <div className="relative mb-8 ">
        <span className="font-bold  bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 font-Open text-5xl bg-clip-text text-transparent">
          Integrate AI Throughout Your Workflow
        </span>
      </div>

      <div className="text-white font-abeezee mb-8 text-5xl tracking-wider font-normal">
        Code Doctor
      </div>

      <div className="font-open  text-md text-center w-[34%]">
        Make processes where AI collaborates with your team throughout the whole
        development process.
      </div>
      <WaitlistForm />
      <div className="w-full relative">
        <div className="absolute top-0 left-0 z-0 animate-fade-in">
          <Image width={1900} height={500} src={bghero} alt="" />
        </div>
        <div className="relative z-10">
          <Image
            width={1900}
            className="px-10 animate-fade-in"
            height={500}
            src={hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
