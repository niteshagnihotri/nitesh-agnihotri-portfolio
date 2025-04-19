import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div
      className="md:min-h-screen space-y-10 py-20 sm:pb-20 sm:py-0"
      id="about"
    >
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
          src={"/nitesh.jpg"}
          alt=""
          width={300}
          height={300}
          className="shadow-md shadow-gray-500 rounded-sm w-60 sm:w-80 aspect-square my-auto mx-auto md:mx-0"
        />
        <div className="leading-relaxed text-justify my-auto flex flex-col px-4 text-sm md:text-base">
          <h1 className="text-xl font-semibold text-gray-600 sm:text-3xl border-b-2 w-fit mx-auto md:mx-0 ">
            Nitesh Agnihotri
          </h1>
          <br />
          Software engineer with years of experience
          in building robust, user-centered applications with various
          technologies stacks. I am highly adaptable, possess a strong grasping
          power, and open to work with any stack. My journey began in college,
          where I started freelancing to help companies build engaging websites,
          followed by an internship that deepened my technical foundation.
          Today, I work full-time as a System Engineer at Tata Consultancy
          Services (TCS), where I am enhancing my skills in Java Spring Boot,
          Angular, and AWS to develop scalable enterprise applications.
        </div>
      </motion.div>
    </div>
  );
}
