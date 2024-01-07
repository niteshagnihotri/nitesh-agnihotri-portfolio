import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="md:min-h-screen space-y-10 py-20 sm:pb-20 sm:py-0" id="about">
      <h1 className="text-center text-2xl md:py-16 font-semibold text-gray-700 sm:text-3xl uppercase">
        ABOUT ME
      </h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
        className="grid gap-y-10 md:grid-cols-2 mx-auto md:w-11/12 lg:w-3/4 xl:w-8/12 h-full px-5 "
      >
        <Image
          src={"/nitesh.png"}
          alt=""
          width={300}
          height={300}
          className="shadow-md shadow-gray-500 rounded-sm w-60 sm:w-72 aspect-square my-auto mx-auto md:mx-0"
        />
        <div className="leading-relaxed text-justify my-auto flex flex-col px-4 text-sm md:text-base">
          <h1 className="text-xl font-semibold text-gray-600 sm:text-3xl border-b-2 w-fit mx-auto md:mx-0 ">
            Nitesh Agnihotri
          </h1>
          <br /> Self-taught developer with a year of experience in developing
          user interfaces using Next.js. Proficient in independently managing
          projects and collaborating within team structures. I thrive on
          learning and solving complex problems. Led the frontend team in my
          internship focused on Next.js development, I am well-versed in all
          aspects of creating compelling user interfaces. Taking web development
          as a profession not only fulfills my pocket but also my heart because
          it has been my passion since my early teenage.
        </div>
      </motion.div>
    </div>
  );
}
