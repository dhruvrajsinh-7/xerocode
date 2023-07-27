import WaitlistForm from "./shared/Waitlistinput";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <WaitlistForm />
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
