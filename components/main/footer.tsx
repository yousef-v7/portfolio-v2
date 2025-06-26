import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col items-center justify-center gap-2 py-6">
          <div className="text-lg font-semibold flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <span className="font-normal">yousef.ahmedv7@gmail.com</span>
          </div>
          <div className="text-lg font-semibold flex items-center gap-2">
            <FaPhone className="text-xl" />
            <span className="font-normal">+201028967791</span>
          </div>
        </div>
      </div>
    </div>
  );
};
