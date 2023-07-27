import Link from "next/link";
export default function WaitlistForm() {
  return (
    <div className="p-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-full flex w-[25%]">
      <input
        type="email"
        placeholder="Your Email"
        className="overflow-hidden border-none outline-none text-sm font-urbanist font-normal px-6 rounded-full py-3 h-full w-full bg-black text-slate-200 placeholder:text-gray-700 placeholder:font-extralight pr-24"
      />
      <button className="rounded-full text-xs px-3 my-1 -ml-[29%] border border-white bg-transparent hover:bg-slate-700">
        <Link href="/signup">Join Waitlist</Link>
      </button>
    </div>
  );
}
