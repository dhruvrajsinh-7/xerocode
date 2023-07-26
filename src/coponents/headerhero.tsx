import Image from "next/image";
import hero from "public/heroimg.png";
import bghero from "public/bghero.png";
export default function HeaderHero() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className=" bg-gradient-to-r font-semibold  text-5xl leading-normal via-purple-500 from-pink-500 to-red-500 text-transparent bg-clip-text">
        Integrate AI Throughout Your Workflow
      </div>
      <div className="text-white text-5xl my-6">Code Doctor</div>
      <h2 className="text-white w-[40%] text-center text-xl mb-10">
        Make processes where AI collaborates with your team throughout the whole
        development process.
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
    </div>
  );
}
