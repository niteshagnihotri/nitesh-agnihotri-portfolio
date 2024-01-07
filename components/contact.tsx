import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function ContactForm() {
  return (
    <div className="pb-20 flex flex-col text-center space-y-10 sm:space-y-0">
      <h1 className="text-center text-2xl flex gap-10 justify-center md:py-16 sm:text-3xl uppercase">
        Feel Free to Connect
      </h1>
      <div>
      <div className="flex items-center justify-center gap-10 text-gray-600">
          <Link href={"https://www.linkedin.com/in/niteshagnihotri/"}>
            <FaLinkedinIn className="transition text-2xl sm:text-4xl ease-in delay-100 cursor-pointer hover:text-[#496685]" />
          </Link>
          <Link href={"https://github.com/niteshagnihotri"}>
            <BsGithub className="transition text-2xl sm:text-4xl ease-in delay-100 cursor-pointer hover:text-[#496685]" />
          </Link>
          <Link href={"mailto:niteshagnihotri01@gmail.com"}>
            <FiMail className="transition text-2xl sm:text-4xl ease-in delay-100 cursor-pointer hover:text-[#496685]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
