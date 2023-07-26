export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
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
      <div className="text-white justify-center items-center mt-6 mb-3">
        <h2 className="text-2xl">
          Copyright © 2023
          <span className="font-bold">EXOCODE TECHNOLOGIES |</span>
          All rights reserved
        </h2>
      </div>
    </div>
  );
}
