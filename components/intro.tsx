import TextAnimation from "./textanimation";
import { BsArrowBarUp, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div className="w-full min-h-[90vh] md:min-h-screen relative text-gray-700 flex items-center justify-center text-center sm:px-8 bg-diagonal sm:bg-top bg-fixed lg:bg-cover">
      <div className="space-y-16 xs:space-y-20 sm:space-y-14 text-[2rem] xs:text-4xl sm:text-5xl lg:text-6xl flex flex-col flex-wrap px-5">
        <div className="flex items-center gap-4 gap-y-8 xs:gap-4 xs:gap-y-8 sm:gap-4 flex-wrap">
          <span>Hi, I am </span>
          <span className="text-gray-700 font-semibold">Nitesh Agnihotri</span>
        </div>

        <TextAnimation
          texts={[
            "Full Stack Developer",
            "Frontend Developer",
            "Blockchain Developer",
          ]}
        />
        <div className="flex justify-start space-x-8 sm:space-x-16 sm:mx-1">
          <Link href={"https://www.linkedin.com/in/niteshagnihotri/"}>
            <FaLinkedinIn className="transition text-4xl ease-in delay-100 cursor-pointer text-gray-600 hover:text-[#496685]" />
          </Link>
          <Link href={"https://github.com/niteshagnihotri"}>
            <BsGithub className="transition text-4xl ease-in delay-100 cursor-pointer text-gray-600 hover:text-[#496685]" />
          </Link>
        </div>
      </div>
      <Link  href={"/#about"} className="absolute bottom-14 sm:bottom-10 animate-bounce text-gray-700 text-4xl cursor-pointer hover:text-[#496685]" >
        <BsArrowBarUp />
      </Link>
    </div>
  );
}
