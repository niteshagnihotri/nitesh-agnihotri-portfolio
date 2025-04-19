import React from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div className="md:min-h-[70vh] space-y-12 md:space-y-0 pb-10">
      <h1 className="text-center text-2xl font-semibold text-gray-700 md:py-16 sm:text-3xl uppercase">
        WORK EXPERIENCE
      </h1>
      <div className="grid gap-y-10 md:grid-cols-2 grid-rows-2 md:w-10/12 lg:w-9/12 mx-auto px-5 sm:px-0">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col space-y-5 p-5 "
        >
          <div className="space-y-1">
            <h1 className="font-semibold flex items-center text-base text-[#586c83]">
              <BsPersonVcardFill className="mr-2" /> Tata Consultancy Services -
              System Engineer
            </h1>
            <h1 className="text-sm">July 2024 - Present</h1>
          </div>
          <ol className="text-xs sm:text-sm space-y-3 list-disc pl-5">
            <li className="text-justify">
              Actively working in an agile environment, collaborating with
              cross-functional teams to deliver efficient solutions.
            </li>
            <li className="text-justify">
              Contributing to the development and optimization of financial
              applications, ensuring scalability and security.
            </li>
            <li className="text-justify">
              Led stack cleanup and vulnerability fixes tasks, enhancing system
              performance and security.
            </li>
          </ol>
        </motion.div>
        <div className="hidden md:block" />
        <div className="hidden md:block " />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col space-y-5 p-5 "
        >
          <div className="space-y-1">
            <h1 className="font-semibold flex items-center text-base text-[#586c83]">
              <BsPersonVcardFill className="mr-2" /> Weframetech - Full Stack
              Developer
            </h1>
            <h1 className="text-sm">June 2023 - July 2024</h1>
          </div>
          <ol className="text-xs sm:text-sm space-y-3 list-disc pl-5">
            <li className="text-justify">
              Collaborated with clients to gather requirements and troubleshoot
              critical issues, ensuring alignment with project goals.
            </li>
            <li className="text-justify">
              Led frontend development to build functionality and enhance user
              experiences across diverse projects.
            </li>
            <li className="text-justify">
              Led a dedicated team of developers to eliminate 400 bugs,
              achieving a 100% reduction and delivering seamless user interfaces
              for a SaaS platform.
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
